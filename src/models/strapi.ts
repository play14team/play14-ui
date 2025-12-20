/**
 * Strapi REST API Types
 *
 * These types match the flat structure returned by Strapi 5 REST API.
 * They replace the nested GraphQL types previously used.
 */

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Maybe<T> = T | null | undefined

// ============================================================================
// PAGINATION
// ============================================================================

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
  hash?: string
  mime?: string
  provider?: string
  size?: number
  blurhash?: string
}

export interface SocialNetwork {
  id: string
  url: string
  type: string
}

export interface Tag {
  id?: string
  value: string
}

// ============================================================================
// LOCATION & VENUE
// ============================================================================

// GeoLocation can be either simple lat/lng or Mapbox format with geometry
export interface SimpleGeoLocation {
  lat?: number
  lng?: number
  place_name?: string
}

export interface MapboxGeoLocation {
  geometry: {
    coordinates: [number, number]
    type?: string
  }
  place_name?: string
  // Allow additional Mapbox properties
  id?: string
  text?: string
  type?: string
  center?: [number, number]
  address?: string
  context?: unknown[]
  relevance?: number
  place_type?: string[]
  properties?: Record<string, unknown>
  [key: string]: unknown // Allow any additional properties
}

export type GeoLocation = SimpleGeoLocation | MapboxGeoLocation

export interface Location {
  slug?: string
  name: string
  country: string
  location?: GeoLocation
}

// Alias for Location (backwards compatibility)
export type EventLocation = Location

export interface Venue {
  documentId?: string
  name: string
  website?: string
  location?: GeoLocation
  addressDetails?: string
}

// ============================================================================
// PLAYERS
// ============================================================================

export interface Player {
  documentId?: string
  slug: string
  name: string
  position?: string
  company?: string
  tagline?: string
  bio?: string
  website?: string
  location?: string | GeoLocation
  avatar?: UploadFile
  socialNetworks?: SocialNetwork[]
  attended?: Event[]
  hosted?: Event[]
  mentored?: Event[]
}

// ============================================================================
// EVENTS
// ============================================================================

export type Enum_Event_Eventstatus = "Announced" | "Open" | "Over" | "Cancelled"

export const Enum_Event_Eventstatus = {
  Announced: "Announced" as const,
  Open: "Open" as const,
  Over: "Over" as const,
  Cancelled: "Cancelled" as const,
}

export type Enum_Componenteventsmedia_Type = "Photos" | "Videos"

export const Enum_Componenteventsmedia_Type = {
  Photos: "Photos" as const,
  Videos: "Videos" as const,
}

export interface ComponentEventsTimeslot {
  id: string
  time: string
  description?: string
}

export interface ComponentEventsTimetable {
  id: string
  day: string
  description?: string
  timeslots?: ComponentEventsTimeslot[]
}

export interface Registration {
  link?: string
  widgetCode?: string
}

export interface Sponsor {
  name: string
  url?: string
  logo?: UploadFile
  socialNetworks?: SocialNetwork[]
}

export interface ComponentEventsSponsorship {
  id: string
  category: string
  sponsors?: Sponsor[]
}

export interface MediaItem {
  id: string
  url: string
  type: string
}

export interface Event {
  documentId?: string
  slug: string
  name: string
  start: string
  end: string
  timezone?: string
  eventStatus: Enum_Event_Eventstatus | string
  description?: string
  contactEmail?: string
  defaultImage?: UploadFile
  images?: UploadFile[]
  location?: Location
  venue?: Venue
  timetable?: ComponentEventsTimetable[]
  registration?: Registration
  sponsorships?: ComponentEventsSponsorship[]
  hosts?: Player[]
  mentors?: Player[]
  players?: Player[]
  media?: MediaItem[]
}

// ============================================================================
// GAMES
// ============================================================================

export interface Material {
  id: string
  value: string
}

export interface PreparationStep {
  id: string
  value: string
}

export interface Safety {
  id: string
  key: string
  value: string
}

export interface Resource {
  id?: string
  name: string
  url: string
  ext?: string
}

export interface Ratings {
  energy: number
  connection: number
  silliness: number
}

export interface Game {
  documentId?: string
  slug: string
  name: string
  category?: string
  scale?: string
  timebox?: string
  summary?: string
  credits?: string
  description?: string
  publishedAt?: string
  tags?: Tag[]
  materials?: Material[]
  preparationSteps?: PreparationStep[]
  safety?: Safety[]
  defaultImage?: UploadFile
  images?: UploadFile[]
  resources?: Resource[]
  firstPlayedAt?: { name: string; slug: string }
  documentedBy?: Player[]
  proposedBy?: Player[]
  ratings?: Ratings
}

// ============================================================================
// ARTICLES
// ============================================================================

export interface Author {
  name: string
  slug: string
  position?: string
  tagline?: string
  avatar?: UploadFile
}

export interface Article {
  documentId?: string
  slug: string
  title: string
  category?: string
  summary?: string
  publishedAt?: string
  updatedAt?: string
  canonical?: string
  content?: string
  tags?: Tag[]
  defaultImage?: UploadFile
  images?: UploadFile[]
  author?: Author
}

// ============================================================================
// TESTIMONIALS
// ============================================================================

export interface Testimonial {
  documentId?: string
  content: string
  url?: string
  audio?: { name: string; url: string }
  author?: {
    name: string
    slug: string
    tagline?: string
    avatar?: UploadFile
  }
}

// ============================================================================
// HOME & ABOUT
// ============================================================================

export type Enum_Expectation_Type = "Main" | "Secondary"

export const Enum_Expectation_Type = {
  Main: "Main" as const,
  Secondary: "Secondary" as const,
}

export interface Expectation {
  documentId?: string
  type: Enum_Expectation_Type | string
  title: string
  content: string
  icon?: string
}

export type Enum_Componentdefaulthistoryitem_Dateformat =
  | "Day"
  | "Month"
  | "Year"

export const Enum_Componentdefaulthistoryitem_Dateformat = {
  Day: "Day" as const,
  Month: "Month" as const,
  Year: "Year" as const,
}

export interface HistoryItem {
  id: string
  date: string
  dateFormat?: Enum_Componentdefaulthistoryitem_Dateformat | string
  additionalText?: string
  title?: string
  description?: string
  image?: UploadFile
}

export interface History {
  documentId?: string
  title?: string
  founders?: string
  intro?: string
  keyMoments?: string
  items?: HistoryItem[]
}

export interface Home {
  images?: UploadFile[]
}

export interface Format {
  content?: string
}
