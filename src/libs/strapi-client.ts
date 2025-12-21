import "server-only"
import qs from "qs"

const STRAPI_REST_ENDPOINT =
  (process.env.STRAPI_API_URL || "").replace(/\/$/, "") + "/api"

// Fallback to production if primary endpoint is unavailable
const STRAPI_FALLBACK_ENDPOINT = process.env.STRAPI_FALLBACK_API_URL
  ? process.env.STRAPI_FALLBACK_API_URL.replace(/\/$/, "") + "/api"
  : "https://community.play14.org/api"

/**
 * Fetch with timeout to prevent hanging connections
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
 * Attempts to fetch from a specific endpoint
 */
async function tryFetch(
  baseUrl: string,
  endpoint: string,
  queryString: string,
  token: string | undefined,
): Promise<{ response: Response; url: string } | null> {
  const url = `${baseUrl}/${endpoint}${queryString}`

  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      return { response, url }
    }

    console.warn(
      `[Strapi] ${url} returned ${response.status}: ${response.statusText}`,
    )
    return null
  } catch (error) {
    console.warn(
      `[Strapi] ${url} failed:`,
      error instanceof Error ? error.message : String(error),
    )
    return null
  }
}

/**
 * Safely parse JSON response with error handling
 */
async function parseJsonResponse<T>(
  response: Response,
  url: string,
): Promise<StrapiResponse<T>> {
  try {
    return (await response.json()) as StrapiResponse<T>
  } catch (error) {
    console.error(
      `[Strapi] Failed to parse JSON from ${url}:`,
      error instanceof Error ? error.message : String(error),
    )
    throw new Error("Invalid JSON response from Strapi API")
  }
}

/**
 * Main REST query function
 * Executes a GET request to the Strapi REST API with the provided parameters
 * Falls back to production endpoint if primary is unavailable
 */
export async function restQuery<T>(
  endpoint: string,
  params?: StrapiParams,
): Promise<StrapiResponse<T>> {
  const queryString = params
    ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
    : ""

  const primaryToken = process.env.STRAPI_API_SECRET
  const fallbackToken =
    process.env.STRAPI_FALLBACK_API_SECRET || process.env.STRAPI_API_SECRET

  // Try primary endpoint first
  const primaryResult = await tryFetch(
    STRAPI_REST_ENDPOINT,
    endpoint,
    queryString,
    primaryToken,
  )

  if (primaryResult) {
    return parseJsonResponse<T>(primaryResult.response, primaryResult.url)
  }

  // Fallback to production if primary failed and fallback is different
  if (STRAPI_REST_ENDPOINT !== STRAPI_FALLBACK_ENDPOINT) {
    console.log(
      `[Strapi] Primary endpoint unavailable, trying fallback: ${STRAPI_FALLBACK_ENDPOINT}`,
    )

    const fallbackResult = await tryFetch(
      STRAPI_FALLBACK_ENDPOINT,
      endpoint,
      queryString,
      fallbackToken,
    )

    if (fallbackResult) {
      return parseJsonResponse<T>(fallbackResult.response, fallbackResult.url)
    }
  }

  // Both endpoints failed
  const url = `${STRAPI_REST_ENDPOINT}/${endpoint}${queryString}`
  console.error("==================== REST API Error ====================")
  console.error("Endpoint:", url)
  console.error("Both primary and fallback endpoints failed")
  console.error("=========================================================")
  throw new Error(`REST API Error: Unable to reach Strapi API`)
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
