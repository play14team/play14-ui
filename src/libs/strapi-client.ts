import "server-only"
import qs from "qs"

const STRAPI_REST_ENDPOINT = process.env.STRAPI_API_URL + "/api"

/**
 * Fetch with timeout to prevent hanging connections
 * Mirrors the Apollo client pattern for consistency
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  const timeout = 30000 // 30 seconds
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * Strapi REST API query parameters
 */
export interface StrapiParams {
  filters?: Record<string, unknown>
  sort?: string[]
  pagination?: {
    page?: number
    pageSize?: number
    limit?: number
    start?: number
  }
  populate?: string | string[] | Record<string, unknown>
  fields?: string[]
}

/**
 * Strapi pagination metadata
 */
export interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

/**
 * Strapi REST API response structure
 */
export interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: StrapiPagination
  }
}

/**
 * Normalized response structure matching GraphQL _connection pattern
 * This allows components to work with both GraphQL and REST responses
 */
export interface StrapiConnectionResponse<T> {
  nodes: T[]
  pageInfo: StrapiPagination
}

/**
 * Default pagination values
 */
const defaultPagination: StrapiPagination = {
  page: 1,
  pageSize: 25,
  pageCount: 1,
  total: 0,
}

/**
 * Main REST query function
 * Executes a GET request to the Strapi REST API with the provided parameters
 */
export async function restQuery<T>(
  endpoint: string,
  params?: StrapiParams,
): Promise<StrapiResponse<T>> {
  const queryString = params
    ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
    : ""
  const url = `${STRAPI_REST_ENDPOINT}/${endpoint}${queryString}`

  const token = process.env.STRAPI_API_SECRET

  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      console.error("==================== REST API Error ====================")
      console.error("Endpoint:", url)
      console.error("Status:", response.status, response.statusText)
      console.error("=========================================================")
      throw new Error(
        `REST API Error: ${response.status} ${response.statusText}`,
      )
    }

    return (await response.json()) as StrapiResponse<T>
  } catch (error: unknown) {
    const err = error as {
      message: string
      cause?: Error & { code?: string }
    }

    console.error("==================== REST Query Error ====================")
    console.error("Endpoint:", url)
    console.error("Message:", err.message)

    // Check for connection errors
    if (
      err.message.includes("fetch failed") ||
      err.message.includes("aborted") ||
      err.cause?.code === "ECONNRESET"
    ) {
      console.error("\nConnection Error Detected:")
      console.error(
        "  The server at",
        STRAPI_REST_ENDPOINT,
        "is not reachable.",
      )
      console.error("  Possible causes:")
      console.error("    - Strapi server is not running")
      console.error("    - Wrong STRAPI_API_URL in .env.local")
      console.error("    - Network connectivity issues")
      console.error("    - Request timeout (30s)")
      console.error("\n  To fix:")
      console.error("    1. Check if Strapi is running: http://localhost:1337")
      console.error(
        "    2. Or switch to production: STRAPI_API_URL=https://community.play14.org",
      )
    }

    console.error("==========================================================")
    throw error
  }
}

/**
 * Normalizes a paginated REST response to match GraphQL _connection structure
 * This allows components to remain unchanged during migration
 *
 * REST: { data: [...], meta: { pagination: {...} } }
 * GraphQL: { entity_connection: { nodes: [...], pageInfo: {...} } }
 */
export function normalizeConnection<T>(
  response: StrapiResponse<T[]>,
): StrapiConnectionResponse<T> {
  return {
    nodes: response.data || [],
    pageInfo: response.meta?.pagination || defaultPagination,
  }
}

/**
 * Extracts a single entity from REST response
 * Handles both single object and array responses
 */
export function normalizeEntity<T>(
  response: StrapiResponse<T | T[]>,
): T | null {
  if (!response.data) return null
  return Array.isArray(response.data) ? response.data[0] || null : response.data
}

/**
 * Helper to get document ID (Strapi 5)
 * documentId is the primary identifier (string)
 */
export function getDocumentId(
  item: { documentId?: string; id?: string | number } | null | undefined,
): string | null {
  return item?.documentId || item?.id?.toString() || null
}
