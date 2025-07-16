/* eslint-disable */
/* tslint:disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: any; output: any }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any }
}

export type Article = {
  __typename?: "Article"
  author?: Maybe<PlayerEntityResponse>
  cannonical?: Maybe<Scalars["String"]["output"]>
  category?: Maybe<Enum_Article_Category>
  content?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  defaultImage: UploadFileEntityResponse
  images: UploadFileRelationResponseCollection
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  summary?: Maybe<Scalars["String"]["output"]>
  tags?: Maybe<TagRelationResponseCollection>
  title: Scalars["String"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ArticleImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleEntity = {
  __typename?: "ArticleEntity"
  attributes?: Maybe<Article>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type ArticleEntityResponse = {
  __typename?: "ArticleEntityResponse"
  data?: Maybe<ArticleEntity>
}

export type ArticleEntityResponseCollection = {
  __typename?: "ArticleEntityResponseCollection"
  data: Array<ArticleEntity>
  meta: ResponseCollectionMeta
}

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  author?: InputMaybe<PlayerFiltersInput>
  cannonical?: InputMaybe<StringFilterInput>
  category?: InputMaybe<StringFilterInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ArticleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  summary?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<TagFiltersInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ArticleInput = {
  author?: InputMaybe<Scalars["ID"]["input"]>
  cannonical?: InputMaybe<Scalars["String"]["input"]>
  category?: InputMaybe<Enum_Article_Category>
  content?: InputMaybe<Scalars["String"]["input"]>
  defaultImage?: InputMaybe<Scalars["ID"]["input"]>
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
  summary?: InputMaybe<Scalars["String"]["input"]>
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  title?: InputMaybe<Scalars["String"]["input"]>
}

export type ArticleRelationResponseCollection = {
  __typename?: "ArticleRelationResponseCollection"
  data: Array<ArticleEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  contains?: InputMaybe<Scalars["Boolean"]["input"]>
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>
  eq?: InputMaybe<Scalars["Boolean"]["input"]>
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>
  gt?: InputMaybe<Scalars["Boolean"]["input"]>
  gte?: InputMaybe<Scalars["Boolean"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  lt?: InputMaybe<Scalars["Boolean"]["input"]>
  lte?: InputMaybe<Scalars["Boolean"]["input"]>
  ne?: InputMaybe<Scalars["Boolean"]["input"]>
  nei?: InputMaybe<Scalars["Boolean"]["input"]>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ComponentContactSocialNetwork = {
  __typename?: "ComponentContactSocialNetwork"
  id: Scalars["ID"]["output"]
  type?: Maybe<Enum_Componentcontactsocialnetwork_Type>
  url?: Maybe<Scalars["String"]["output"]>
}

export type ComponentContactSocialNetworkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactSocialNetworkFiltersInput>>>
  not?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentContactSocialNetworkFiltersInput>>>
  type?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type ComponentContactSocialNetworkInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  type?: InputMaybe<Enum_Componentcontactsocialnetwork_Type>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentDefaultHistoryItem = {
  __typename?: "ComponentDefaultHistoryItem"
  additionalText?: Maybe<Scalars["String"]["output"]>
  date: Scalars["Date"]["output"]
  dateFormat?: Maybe<Enum_Componentdefaulthistoryitem_Dateformat>
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  image: UploadFileEntityResponse
  title: Scalars["String"]["output"]
}

export type ComponentDefaultHistoryItemFiltersInput = {
  additionalText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentDefaultHistoryItemFiltersInput>>>
  date?: InputMaybe<DateFilterInput>
  dateFormat?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentDefaultHistoryItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentDefaultHistoryItemFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentDefaultHistoryItemInput = {
  additionalText?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["Date"]["input"]>
  dateFormat?: InputMaybe<Enum_Componentdefaulthistoryitem_Dateformat>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  image?: InputMaybe<Scalars["ID"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentEventsMedia = {
  __typename?: "ComponentEventsMedia"
  id: Scalars["ID"]["output"]
  type: Enum_Componenteventsmedia_Type
  url: Scalars["String"]["output"]
}

export type ComponentEventsMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsMediaFiltersInput>>>
  not?: InputMaybe<ComponentEventsMediaFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentEventsMediaFiltersInput>>>
  type?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type ComponentEventsMediaInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  type?: InputMaybe<Enum_Componenteventsmedia_Type>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentEventsSponsorship = {
  __typename?: "ComponentEventsSponsorship"
  category: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  sponsors?: Maybe<SponsorRelationResponseCollection>
}

export type ComponentEventsSponsorshipSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentEventsSponsorshipFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipFiltersInput>>>
  category?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentEventsSponsorshipFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipFiltersInput>>>
  sponsors?: InputMaybe<SponsorFiltersInput>
}

export type ComponentEventsSponsorshipInput = {
  category?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  sponsors?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type ComponentEventsTimeSlots = {
  __typename?: "ComponentEventsTimeSlots"
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  time: Scalars["Time"]["output"]
}

export type ComponentEventsTimeSlotsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsFiltersInput>>>
  time?: InputMaybe<TimeFilterInput>
}

export type ComponentEventsTimeSlotsInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  time?: InputMaybe<Scalars["Time"]["input"]>
}

export type ComponentEventsTimetable = {
  __typename?: "ComponentEventsTimetable"
  day: Enum_Componenteventstimetable_Day
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  timeslots: Array<Maybe<ComponentEventsTimeSlots>>
}

export type ComponentEventsTimetableTimeslotsArgs = {
  filters?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentEventsTimetableFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableFiltersInput>>>
  day?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentEventsTimetableFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableFiltersInput>>>
  timeslots?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>
}

export type ComponentEventsTimetableInput = {
  day?: InputMaybe<Enum_Componenteventstimetable_Day>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  timeslots?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsInput>>>
}

export type ComponentGamesRatings = {
  __typename?: "ComponentGamesRatings"
  connection?: Maybe<Scalars["Int"]["output"]>
  energy?: Maybe<Scalars["Int"]["output"]>
  id: Scalars["ID"]["output"]
  silliness?: Maybe<Scalars["Int"]["output"]>
}

export type ComponentGamesRatingsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGamesRatingsFiltersInput>>>
  connection?: InputMaybe<IntFilterInput>
  energy?: InputMaybe<IntFilterInput>
  not?: InputMaybe<ComponentGamesRatingsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentGamesRatingsFiltersInput>>>
  silliness?: InputMaybe<IntFilterInput>
}

export type ComponentGamesRatingsInput = {
  connection?: InputMaybe<Scalars["Int"]["input"]>
  energy?: InputMaybe<Scalars["Int"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  silliness?: InputMaybe<Scalars["Int"]["input"]>
}

export type ComponentLocationAddress = {
  __typename?: "ComponentLocationAddress"
  area?: Maybe<Scalars["String"]["output"]>
  city: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  postalCode?: Maybe<Scalars["String"]["output"]>
  street: Scalars["String"]["output"]
}

export type ComponentRegistrationRegistration = {
  __typename?: "ComponentRegistrationRegistration"
  id: Scalars["ID"]["output"]
  link?: Maybe<Scalars["String"]["output"]>
  widgetCode?: Maybe<Scalars["String"]["output"]>
}

export type ComponentRegistrationRegistrationFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentRegistrationRegistrationFiltersInput>>
  >
  link?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentRegistrationRegistrationFiltersInput>
  or?: InputMaybe<
    Array<InputMaybe<ComponentRegistrationRegistrationFiltersInput>>
  >
  widgetCode?: InputMaybe<StringFilterInput>
}

export type ComponentRegistrationRegistrationInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  link?: InputMaybe<Scalars["String"]["input"]>
  widgetCode?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentReportingFinance = {
  __typename?: "ComponentReportingFinance"
  destination: Scalars["String"]["output"]
  expenses: Scalars["Float"]["output"]
  id: Scalars["ID"]["output"]
  result: Enum_Componentreportingfinance_Result
  resultAmount: Scalars["Float"]["output"]
  revenue: Scalars["Float"]["output"]
}

export type ComponentReportingFinanceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentReportingFinanceFiltersInput>>>
  destination?: InputMaybe<StringFilterInput>
  expenses?: InputMaybe<FloatFilterInput>
  not?: InputMaybe<ComponentReportingFinanceFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentReportingFinanceFiltersInput>>>
  result?: InputMaybe<StringFilterInput>
  resultAmount?: InputMaybe<FloatFilterInput>
  revenue?: InputMaybe<FloatFilterInput>
}

export type ComponentReportingFinanceInput = {
  destination?: InputMaybe<Scalars["String"]["input"]>
  expenses?: InputMaybe<Scalars["Float"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
  result?: InputMaybe<Enum_Componentreportingfinance_Result>
  resultAmount?: InputMaybe<Scalars["Float"]["input"]>
  revenue?: InputMaybe<Scalars["Float"]["input"]>
}

export type ComponentSharedDictionary = {
  __typename?: "ComponentSharedDictionary"
  id: Scalars["ID"]["output"]
  key: Scalars["String"]["output"]
  value: Scalars["String"]["output"]
}

export type ComponentSharedDictionaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedDictionaryFiltersInput>>>
  key?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedDictionaryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedDictionaryFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

export type ComponentSharedDictionaryInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  key?: InputMaybe<Scalars["String"]["input"]>
  value?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentSharedList = {
  __typename?: "ComponentSharedList"
  id: Scalars["ID"]["output"]
  value: Scalars["String"]["output"]
}

export type ComponentSharedListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedListFiltersInput>>>
  not?: InputMaybe<ComponentSharedListFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedListFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

export type ComponentSharedListInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  value?: InputMaybe<Scalars["String"]["input"]>
}

export type ComponentSharedMetaSocial = {
  __typename?: "ComponentSharedMetaSocial"
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  image?: Maybe<UploadFileEntityResponse>
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
  title: Scalars["String"]["output"]
}

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  socialNetwork?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentSharedSeo = {
  __typename?: "ComponentSharedSeo"
  canonicalURL?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  keywords?: Maybe<Scalars["String"]["output"]>
  metaDescription: Scalars["String"]["output"]
  metaImage: UploadFileEntityResponse
  metaRobots?: Maybe<Scalars["String"]["output"]>
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>
  metaTitle: Scalars["String"]["output"]
  metaViewport?: Maybe<Scalars["String"]["output"]>
  structuredData?: Maybe<Scalars["JSON"]["output"]>
}

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>
  contains?: InputMaybe<Scalars["Date"]["input"]>
  containsi?: InputMaybe<Scalars["Date"]["input"]>
  endsWith?: InputMaybe<Scalars["Date"]["input"]>
  eq?: InputMaybe<Scalars["Date"]["input"]>
  eqi?: InputMaybe<Scalars["Date"]["input"]>
  gt?: InputMaybe<Scalars["Date"]["input"]>
  gte?: InputMaybe<Scalars["Date"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>
  lt?: InputMaybe<Scalars["Date"]["input"]>
  lte?: InputMaybe<Scalars["Date"]["input"]>
  ne?: InputMaybe<Scalars["Date"]["input"]>
  nei?: InputMaybe<Scalars["Date"]["input"]>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars["Date"]["input"]>
  notContainsi?: InputMaybe<Scalars["Date"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Date"]["input"]>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  contains?: InputMaybe<Scalars["DateTime"]["input"]>
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  ne?: InputMaybe<Scalars["DateTime"]["input"]>
  nei?: InputMaybe<Scalars["DateTime"]["input"]>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum Enum_Article_Category {
  Announcement = "Announcement",
  Article = "Article",
  Event = "Event",
  Interview = "Interview",
  Meetup = "Meetup",
}

export enum Enum_Componentcontactsocialnetwork_Type {
  Email = "Email",
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  Other = "Other",
  Twitter = "Twitter",
  Vimeo = "Vimeo",
  Website = "Website",
  Wikipedia = "Wikipedia",
  Xing = "Xing",
  Youtube = "Youtube",
}

export enum Enum_Componentdefaulthistoryitem_Dateformat {
  Day = "Day",
  Month = "Month",
  Year = "Year",
}

export enum Enum_Componenteventsmedia_Type {
  Photos = "Photos",
  Videos = "Videos",
}

export enum Enum_Componenteventstimetable_Day {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

export enum Enum_Componentreportingfinance_Result {
  Loss = "Loss",
  Profit = "Profit",
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = "Facebook",
  Twitter = "Twitter",
}

export enum Enum_Event_Status {
  Announced = "Announced",
  Cancelled = "Cancelled",
  Open = "Open",
  Over = "Over",
}

export enum Enum_Expectation_Type {
  Main = "Main",
  Secondary = "Secondary",
}

export enum Enum_Game_Category {
  CoolDown = "CoolDown",
  Facilitation = "Facilitation",
  Game = "Game",
  IceBreaker = "IceBreaker",
  Retrospective = "Retrospective",
  WarmUp = "WarmUp",
}

export enum Enum_Player_Position {
  Founder = "Founder",
  Host = "Host",
  Mentor = "Mentor",
  Player = "Player",
}

export type Event = {
  __typename?: "Event"
  contactEmail?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  defaultImage: UploadFileEntityResponse
  description?: Maybe<Scalars["String"]["output"]>
  end: Scalars["DateTime"]["output"]
  finance?: Maybe<ComponentReportingFinance>
  hosts?: Maybe<PlayerRelationResponseCollection>
  images?: Maybe<UploadFileRelationResponseCollection>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<EventRelationResponseCollection>
  location?: Maybe<EventLocationEntityResponse>
  media?: Maybe<Array<Maybe<ComponentEventsMedia>>>
  mentors?: Maybe<PlayerRelationResponseCollection>
  name: Scalars["String"]["output"]
  players?: Maybe<PlayerRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  registration?: Maybe<ComponentRegistrationRegistration>
  slug: Scalars["String"]["output"]
  sponsorships?: Maybe<Array<Maybe<ComponentEventsSponsorship>>>
  start: Scalars["DateTime"]["output"]
  status: Enum_Event_Status
  tagline?: Maybe<Scalars["String"]["output"]>
  timetable?: Maybe<Array<Maybe<ComponentEventsTimetable>>>
  timezone?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  venue?: Maybe<VenueEntityResponse>
}

export type EventHostsArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocalizationsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventMediaArgs = {
  filters?: InputMaybe<ComponentEventsMediaFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventMentorsArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventSponsorshipsArgs = {
  filters?: InputMaybe<ComponentEventsSponsorshipFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventTimetableArgs = {
  filters?: InputMaybe<ComponentEventsTimetableFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventEntity = {
  __typename?: "EventEntity"
  attributes?: Maybe<Event>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type EventEntityResponse = {
  __typename?: "EventEntityResponse"
  data?: Maybe<EventEntity>
}

export type EventEntityResponseCollection = {
  __typename?: "EventEntityResponseCollection"
  data: Array<EventEntity>
  meta: ResponseCollectionMeta
}

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>
  contactEmail?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  end?: InputMaybe<DateTimeFilterInput>
  finance?: InputMaybe<ComponentReportingFinanceFiltersInput>
  hosts?: InputMaybe<PlayerFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<EventFiltersInput>
  location?: InputMaybe<EventLocationFiltersInput>
  media?: InputMaybe<ComponentEventsMediaFiltersInput>
  mentors?: InputMaybe<PlayerFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EventFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>
  players?: InputMaybe<PlayerFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  registration?: InputMaybe<ComponentRegistrationRegistrationFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  sponsorships?: InputMaybe<ComponentEventsSponsorshipFiltersInput>
  start?: InputMaybe<DateTimeFilterInput>
  status?: InputMaybe<StringFilterInput>
  tagline?: InputMaybe<StringFilterInput>
  timetable?: InputMaybe<ComponentEventsTimetableFiltersInput>
  timezone?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  venue?: InputMaybe<VenueFiltersInput>
}

export type EventInput = {
  contactEmail?: InputMaybe<Scalars["String"]["input"]>
  defaultImage?: InputMaybe<Scalars["ID"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  end?: InputMaybe<Scalars["DateTime"]["input"]>
  finance?: InputMaybe<ComponentReportingFinanceInput>
  hosts?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  location?: InputMaybe<Scalars["ID"]["input"]>
  media?: InputMaybe<Array<InputMaybe<ComponentEventsMediaInput>>>
  mentors?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  players?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  registration?: InputMaybe<ComponentRegistrationRegistrationInput>
  slug?: InputMaybe<Scalars["String"]["input"]>
  sponsorships?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipInput>>>
  start?: InputMaybe<Scalars["DateTime"]["input"]>
  status?: InputMaybe<Enum_Event_Status>
  tagline?: InputMaybe<Scalars["String"]["input"]>
  timetable?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableInput>>>
  timezone?: InputMaybe<Scalars["String"]["input"]>
  venue?: InputMaybe<Scalars["ID"]["input"]>
}

export type EventLocation = {
  __typename?: "EventLocation"
  country?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  events?: Maybe<EventRelationResponseCollection>
  location?: Maybe<Scalars["JSON"]["output"]>
  name: Scalars["String"]["output"]
  slug?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type EventLocationEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocationEntity = {
  __typename?: "EventLocationEntity"
  attributes?: Maybe<EventLocation>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type EventLocationEntityResponse = {
  __typename?: "EventLocationEntityResponse"
  data?: Maybe<EventLocationEntity>
}

export type EventLocationEntityResponseCollection = {
  __typename?: "EventLocationEntityResponseCollection"
  data: Array<EventLocationEntity>
  meta: ResponseCollectionMeta
}

export type EventLocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>
  country?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  events?: InputMaybe<EventFiltersInput>
  id?: InputMaybe<IdFilterInput>
  location?: InputMaybe<JsonFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EventLocationFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type EventLocationInput = {
  country?: InputMaybe<Scalars["String"]["input"]>
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  location?: InputMaybe<Scalars["JSON"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
}

export type EventRelationResponseCollection = {
  __typename?: "EventRelationResponseCollection"
  data: Array<EventEntity>
}

export type Expectation = {
  __typename?: "Expectation"
  content: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  icon: Scalars["String"]["output"]
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<ExpectationRelationResponseCollection>
  title: Scalars["String"]["output"]
  type: Enum_Expectation_Type
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ExpectationLocalizationsArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ExpectationEntity = {
  __typename?: "ExpectationEntity"
  attributes?: Maybe<Expectation>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type ExpectationEntityResponse = {
  __typename?: "ExpectationEntityResponse"
  data?: Maybe<ExpectationEntity>
}

export type ExpectationEntityResponseCollection = {
  __typename?: "ExpectationEntityResponseCollection"
  data: Array<ExpectationEntity>
  meta: ResponseCollectionMeta
}

export type ExpectationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExpectationFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  icon?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ExpectationFiltersInput>
  not?: InputMaybe<ExpectationFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ExpectationFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ExpectationInput = {
  content?: InputMaybe<Scalars["String"]["input"]>
  icon?: InputMaybe<Scalars["String"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<Enum_Expectation_Type>
}

export type ExpectationRelationResponseCollection = {
  __typename?: "ExpectationRelationResponseCollection"
  data: Array<ExpectationEntity>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>
  caption?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  contains?: InputMaybe<Scalars["Float"]["input"]>
  containsi?: InputMaybe<Scalars["Float"]["input"]>
  endsWith?: InputMaybe<Scalars["Float"]["input"]>
  eq?: InputMaybe<Scalars["Float"]["input"]>
  eqi?: InputMaybe<Scalars["Float"]["input"]>
  gt?: InputMaybe<Scalars["Float"]["input"]>
  gte?: InputMaybe<Scalars["Float"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  lt?: InputMaybe<Scalars["Float"]["input"]>
  lte?: InputMaybe<Scalars["Float"]["input"]>
  ne?: InputMaybe<Scalars["Float"]["input"]>
  nei?: InputMaybe<Scalars["Float"]["input"]>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars["Float"]["input"]>
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Float"]["input"]>
}

export type Format = {
  __typename?: "Format"
  bumblebee?: Maybe<Scalars["String"]["output"]>
  butterfly?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  lawOfTwoFeet?: Maybe<Scalars["String"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<FormatRelationResponseCollection>
  openspace?: Maybe<Scalars["String"]["output"]>
  schedule?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type FormatEntity = {
  __typename?: "FormatEntity"
  attributes?: Maybe<Format>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type FormatEntityResponse = {
  __typename?: "FormatEntityResponse"
  data?: Maybe<FormatEntity>
}

export type FormatInput = {
  bumblebee?: InputMaybe<Scalars["String"]["input"]>
  butterfly?: InputMaybe<Scalars["String"]["input"]>
  lawOfTwoFeet?: InputMaybe<Scalars["String"]["input"]>
  openspace?: InputMaybe<Scalars["String"]["input"]>
  schedule?: InputMaybe<Scalars["String"]["input"]>
}

export type FormatRelationResponseCollection = {
  __typename?: "FormatRelationResponseCollection"
  data: Array<FormatEntity>
}

export type Game = {
  __typename?: "Game"
  category: Enum_Game_Category
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  credits?: Maybe<Scalars["String"]["output"]>
  defaultImage: UploadFileEntityResponse
  description: Scalars["String"]["output"]
  documentedBy?: Maybe<PlayerRelationResponseCollection>
  firstPlayedAt?: Maybe<EventEntityResponse>
  images: UploadFileRelationResponseCollection
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<GameRelationResponseCollection>
  materials?: Maybe<Array<Maybe<ComponentSharedList>>>
  name: Scalars["String"]["output"]
  preparationSteps?: Maybe<Array<Maybe<ComponentSharedList>>>
  proposedBy?: Maybe<PlayerRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  ratings?: Maybe<ComponentGamesRatings>
  resources?: Maybe<UploadFileRelationResponseCollection>
  safety?: Maybe<Array<Maybe<ComponentSharedDictionary>>>
  scale?: Maybe<Scalars["String"]["output"]>
  slug: Scalars["String"]["output"]
  summary?: Maybe<Scalars["String"]["output"]>
  tags?: Maybe<Array<Maybe<ComponentSharedList>>>
  timebox?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type GameDocumentedByArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameLocalizationsArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameMaterialsArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GamePreparationStepsArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameProposedByArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameResourcesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameSafetyArgs = {
  filters?: InputMaybe<ComponentSharedDictionaryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameTagsArgs = {
  filters?: InputMaybe<ComponentSharedListFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameEntity = {
  __typename?: "GameEntity"
  attributes?: Maybe<Game>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type GameEntityResponse = {
  __typename?: "GameEntityResponse"
  data?: Maybe<GameEntity>
}

export type GameEntityResponseCollection = {
  __typename?: "GameEntityResponseCollection"
  data: Array<GameEntity>
  meta: ResponseCollectionMeta
}

export type GameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  category?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  credits?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentedBy?: InputMaybe<PlayerFiltersInput>
  firstPlayedAt?: InputMaybe<EventFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<GameFiltersInput>
  materials?: InputMaybe<ComponentSharedListFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<GameFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  preparationSteps?: InputMaybe<ComponentSharedListFiltersInput>
  proposedBy?: InputMaybe<PlayerFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  ratings?: InputMaybe<ComponentGamesRatingsFiltersInput>
  safety?: InputMaybe<ComponentSharedDictionaryFiltersInput>
  scale?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  summary?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<ComponentSharedListFiltersInput>
  timebox?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type GameInput = {
  category?: InputMaybe<Enum_Game_Category>
  credits?: InputMaybe<Scalars["String"]["input"]>
  defaultImage?: InputMaybe<Scalars["ID"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  documentedBy?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  firstPlayedAt?: InputMaybe<Scalars["ID"]["input"]>
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  materials?: InputMaybe<Array<InputMaybe<ComponentSharedListInput>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  preparationSteps?: InputMaybe<Array<InputMaybe<ComponentSharedListInput>>>
  proposedBy?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  ratings?: InputMaybe<ComponentGamesRatingsInput>
  resources?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  safety?: InputMaybe<Array<InputMaybe<ComponentSharedDictionaryInput>>>
  scale?: InputMaybe<Scalars["String"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
  summary?: InputMaybe<Scalars["String"]["input"]>
  tags?: InputMaybe<Array<InputMaybe<ComponentSharedListInput>>>
  timebox?: InputMaybe<Scalars["String"]["input"]>
}

export type GameRelationResponseCollection = {
  __typename?: "GameRelationResponseCollection"
  data: Array<GameEntity>
}

export type GenericMorph =
  | Article
  | ComponentContactSocialNetwork
  | ComponentDefaultHistoryItem
  | ComponentEventsMedia
  | ComponentEventsSponsorship
  | ComponentEventsTimeSlots
  | ComponentEventsTimetable
  | ComponentGamesRatings
  | ComponentLocationAddress
  | ComponentRegistrationRegistration
  | ComponentReportingFinance
  | ComponentSharedDictionary
  | ComponentSharedList
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | Event
  | EventLocation
  | Expectation
  | Format
  | Game
  | History
  | Home
  | Hosting
  | I18NLocale
  | Player
  | Sponsor
  | Tag
  | Testimonial
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Venue

export type History = {
  __typename?: "History"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  founders?: Maybe<Scalars["String"]["output"]>
  intro?: Maybe<Scalars["String"]["output"]>
  items?: Maybe<Array<Maybe<ComponentDefaultHistoryItem>>>
  keyMoments?: Maybe<Scalars["String"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<HistoryRelationResponseCollection>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HistoryItemsArgs = {
  filters?: InputMaybe<ComponentDefaultHistoryItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HistoryEntity = {
  __typename?: "HistoryEntity"
  attributes?: Maybe<History>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type HistoryEntityResponse = {
  __typename?: "HistoryEntityResponse"
  data?: Maybe<HistoryEntity>
}

export type HistoryInput = {
  founders?: InputMaybe<Scalars["String"]["input"]>
  intro?: InputMaybe<Scalars["String"]["input"]>
  items?: InputMaybe<Array<InputMaybe<ComponentDefaultHistoryItemInput>>>
  keyMoments?: InputMaybe<Scalars["String"]["input"]>
}

export type HistoryRelationResponseCollection = {
  __typename?: "HistoryRelationResponseCollection"
  data: Array<HistoryEntity>
}

export type Home = {
  __typename?: "Home"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  images: UploadFileRelationResponseCollection
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<HomeRelationResponseCollection>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HomeImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HomeEntity = {
  __typename?: "HomeEntity"
  attributes?: Maybe<Home>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type HomeEntityResponse = {
  __typename?: "HomeEntityResponse"
  data?: Maybe<HomeEntity>
}

export type HomeInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type HomeRelationResponseCollection = {
  __typename?: "HomeRelationResponseCollection"
  data: Array<HomeEntity>
}

export type Hosting = {
  __typename?: "Hosting"
  content?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations?: Maybe<HostingRelationResponseCollection>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HostingEntity = {
  __typename?: "HostingEntity"
  attributes?: Maybe<Hosting>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type HostingEntityResponse = {
  __typename?: "HostingEntityResponse"
  data?: Maybe<HostingEntity>
}

export type HostingInput = {
  content?: InputMaybe<Scalars["String"]["input"]>
}

export type HostingRelationResponseCollection = {
  __typename?: "HostingRelationResponseCollection"
  data: Array<HostingEntity>
}

export type I18NLocale = {
  __typename?: "I18NLocale"
  code?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity"
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse"
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection"
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  contains?: InputMaybe<Scalars["ID"]["input"]>
  containsi?: InputMaybe<Scalars["ID"]["input"]>
  endsWith?: InputMaybe<Scalars["ID"]["input"]>
  eq?: InputMaybe<Scalars["ID"]["input"]>
  eqi?: InputMaybe<Scalars["ID"]["input"]>
  gt?: InputMaybe<Scalars["ID"]["input"]>
  gte?: InputMaybe<Scalars["ID"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  lt?: InputMaybe<Scalars["ID"]["input"]>
  lte?: InputMaybe<Scalars["ID"]["input"]>
  ne?: InputMaybe<Scalars["ID"]["input"]>
  nei?: InputMaybe<Scalars["ID"]["input"]>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars["ID"]["input"]>
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  startsWith?: InputMaybe<Scalars["ID"]["input"]>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  contains?: InputMaybe<Scalars["Int"]["input"]>
  containsi?: InputMaybe<Scalars["Int"]["input"]>
  endsWith?: InputMaybe<Scalars["Int"]["input"]>
  eq?: InputMaybe<Scalars["Int"]["input"]>
  eqi?: InputMaybe<Scalars["Int"]["input"]>
  gt?: InputMaybe<Scalars["Int"]["input"]>
  gte?: InputMaybe<Scalars["Int"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  lt?: InputMaybe<Scalars["Int"]["input"]>
  lte?: InputMaybe<Scalars["Int"]["input"]>
  ne?: InputMaybe<Scalars["Int"]["input"]>
  nei?: InputMaybe<Scalars["Int"]["input"]>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars["Int"]["input"]>
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Int"]["input"]>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  contains?: InputMaybe<Scalars["JSON"]["input"]>
  containsi?: InputMaybe<Scalars["JSON"]["input"]>
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>
  eq?: InputMaybe<Scalars["JSON"]["input"]>
  eqi?: InputMaybe<Scalars["JSON"]["input"]>
  gt?: InputMaybe<Scalars["JSON"]["input"]>
  gte?: InputMaybe<Scalars["JSON"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  lt?: InputMaybe<Scalars["JSON"]["input"]>
  lte?: InputMaybe<Scalars["JSON"]["input"]>
  ne?: InputMaybe<Scalars["JSON"]["input"]>
  nei?: InputMaybe<Scalars["JSON"]["input"]>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars["JSON"]["input"]>
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>
}

export type Mutation = {
  __typename?: "Mutation"
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createArticle?: Maybe<ArticleEntityResponse>
  createEvent?: Maybe<EventEntityResponse>
  createEventLocalization?: Maybe<EventEntityResponse>
  createEventLocation?: Maybe<EventLocationEntityResponse>
  createExpectation?: Maybe<ExpectationEntityResponse>
  createExpectationLocalization?: Maybe<ExpectationEntityResponse>
  createFormatLocalization?: Maybe<FormatEntityResponse>
  createGame?: Maybe<GameEntityResponse>
  createGameLocalization?: Maybe<GameEntityResponse>
  createHistoryLocalization?: Maybe<HistoryEntityResponse>
  createHomeLocalization?: Maybe<HomeEntityResponse>
  createHostingLocalization?: Maybe<HostingEntityResponse>
  createPlayer?: Maybe<PlayerEntityResponse>
  createSponsor?: Maybe<SponsorEntityResponse>
  createTag?: Maybe<TagEntityResponse>
  createTestimonial?: Maybe<TestimonialEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createVenue?: Maybe<VenueEntityResponse>
  deleteArticle?: Maybe<ArticleEntityResponse>
  deleteEvent?: Maybe<EventEntityResponse>
  deleteEventLocation?: Maybe<EventLocationEntityResponse>
  deleteExpectation?: Maybe<ExpectationEntityResponse>
  deleteFormat?: Maybe<FormatEntityResponse>
  deleteGame?: Maybe<GameEntityResponse>
  deleteHistory?: Maybe<HistoryEntityResponse>
  deleteHome?: Maybe<HomeEntityResponse>
  deleteHosting?: Maybe<HostingEntityResponse>
  deletePlayer?: Maybe<PlayerEntityResponse>
  deleteSponsor?: Maybe<SponsorEntityResponse>
  deleteTag?: Maybe<TagEntityResponse>
  deleteTestimonial?: Maybe<TestimonialEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteVenue?: Maybe<VenueEntityResponse>
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateArticle?: Maybe<ArticleEntityResponse>
  updateEvent?: Maybe<EventEntityResponse>
  updateEventLocation?: Maybe<EventLocationEntityResponse>
  updateExpectation?: Maybe<ExpectationEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateFormat?: Maybe<FormatEntityResponse>
  updateGame?: Maybe<GameEntityResponse>
  updateHistory?: Maybe<HistoryEntityResponse>
  updateHome?: Maybe<HomeEntityResponse>
  updateHosting?: Maybe<HostingEntityResponse>
  updatePlayer?: Maybe<PlayerEntityResponse>
  updateSponsor?: Maybe<SponsorEntityResponse>
  updateTag?: Maybe<TagEntityResponse>
  updateTestimonial?: Maybe<TestimonialEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateVenue?: Maybe<VenueEntityResponse>
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationCreateArticleArgs = {
  data: ArticleInput
}

export type MutationCreateEventArgs = {
  data: EventInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateEventLocalizationArgs = {
  data?: InputMaybe<EventInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateEventLocationArgs = {
  data: EventLocationInput
}

export type MutationCreateExpectationArgs = {
  data: ExpectationInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateExpectationLocalizationArgs = {
  data?: InputMaybe<ExpectationInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateFormatLocalizationArgs = {
  data?: InputMaybe<FormatInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateGameArgs = {
  data: GameInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateGameLocalizationArgs = {
  data?: InputMaybe<GameInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateHistoryLocalizationArgs = {
  data?: InputMaybe<HistoryInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreateHostingLocalizationArgs = {
  data?: InputMaybe<HostingInput>
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationCreatePlayerArgs = {
  data: PlayerInput
}

export type MutationCreateSponsorArgs = {
  data: SponsorInput
}

export type MutationCreateTagArgs = {
  data: TagInput
}

export type MutationCreateTestimonialArgs = {
  data: TestimonialInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationCreateVenueArgs = {
  data: VenueInput
}

export type MutationDeleteArticleArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteEventArgs = {
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteEventLocationArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteExpectationArgs = {
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteFormatArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteGameArgs = {
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteHistoryArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteHostingArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeletePlayerArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteSponsorArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteTagArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteTestimonialArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteVenueArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"]
}

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"]
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>
  files: Array<InputMaybe<Scalars["Upload"]["input"]>>
  ref?: InputMaybe<Scalars["String"]["input"]>
  refId?: InputMaybe<Scalars["ID"]["input"]>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationUpdateArticleArgs = {
  data: ArticleInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateEventArgs = {
  data: EventInput
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateEventLocationArgs = {
  data: EventLocationInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateExpectationArgs = {
  data: ExpectationInput
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"]
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateFormatArgs = {
  data: FormatInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateGameArgs = {
  data: GameInput
  id: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateHistoryArgs = {
  data: HistoryInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateHomeArgs = {
  data: HomeInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdateHostingArgs = {
  data: HostingInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationUpdatePlayerArgs = {
  data: PlayerInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateSponsorArgs = {
  data: SponsorInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateTagArgs = {
  data: TagInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars["ID"]["input"]
}

export type MutationUpdateVenueArgs = {
  data: VenueInput
  id: Scalars["ID"]["input"]
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>
  file: Scalars["Upload"]["input"]
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars["String"]["input"]>
  refId?: InputMaybe<Scalars["ID"]["input"]>
}

export type Pagination = {
  __typename?: "Pagination"
  page: Scalars["Int"]["output"]
  pageCount: Scalars["Int"]["output"]
  pageSize: Scalars["Int"]["output"]
  total: Scalars["Int"]["output"]
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  page?: InputMaybe<Scalars["Int"]["input"]>
  pageSize?: InputMaybe<Scalars["Int"]["input"]>
  start?: InputMaybe<Scalars["Int"]["input"]>
}

export type Player = {
  __typename?: "Player"
  attended?: Maybe<EventRelationResponseCollection>
  avatar?: Maybe<UploadFileEntityResponse>
  bio?: Maybe<Scalars["String"]["output"]>
  company?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  documented?: Maybe<GameRelationResponseCollection>
  hosted?: Maybe<EventRelationResponseCollection>
  location?: Maybe<Scalars["JSON"]["output"]>
  mentored?: Maybe<EventRelationResponseCollection>
  name: Scalars["String"]["output"]
  position: Enum_Player_Position
  proposed?: Maybe<GameRelationResponseCollection>
  slug: Scalars["String"]["output"]
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  tagline?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  user?: Maybe<UsersPermissionsUserEntityResponse>
  website?: Maybe<Scalars["String"]["output"]>
}

export type PlayerAttendedArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerDocumentedArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerHostedArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerMentoredArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerProposedArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerEntity = {
  __typename?: "PlayerEntity"
  attributes?: Maybe<Player>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type PlayerEntityResponse = {
  __typename?: "PlayerEntityResponse"
  data?: Maybe<PlayerEntity>
}

export type PlayerEntityResponseCollection = {
  __typename?: "PlayerEntityResponseCollection"
  data: Array<PlayerEntity>
  meta: ResponseCollectionMeta
}

export type PlayerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>
  attended?: InputMaybe<EventFiltersInput>
  bio?: InputMaybe<StringFilterInput>
  company?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documented?: InputMaybe<GameFiltersInput>
  hosted?: InputMaybe<EventFiltersInput>
  id?: InputMaybe<IdFilterInput>
  location?: InputMaybe<JsonFilterInput>
  mentored?: InputMaybe<EventFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PlayerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>
  position?: InputMaybe<StringFilterInput>
  proposed?: InputMaybe<GameFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  tagline?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
  website?: InputMaybe<StringFilterInput>
}

export type PlayerInput = {
  attended?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  avatar?: InputMaybe<Scalars["ID"]["input"]>
  bio?: InputMaybe<Scalars["String"]["input"]>
  company?: InputMaybe<Scalars["String"]["input"]>
  documented?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  hosted?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  location?: InputMaybe<Scalars["JSON"]["input"]>
  mentored?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  position?: InputMaybe<Enum_Player_Position>
  proposed?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  slug?: InputMaybe<Scalars["String"]["input"]>
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >
  tagline?: InputMaybe<Scalars["String"]["input"]>
  user?: InputMaybe<Scalars["ID"]["input"]>
  website?: InputMaybe<Scalars["String"]["input"]>
}

export type PlayerRelationResponseCollection = {
  __typename?: "PlayerRelationResponseCollection"
  data: Array<PlayerEntity>
}

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query"
  article?: Maybe<ArticleEntityResponse>
  articles?: Maybe<ArticleEntityResponseCollection>
  event?: Maybe<EventEntityResponse>
  eventLocation?: Maybe<EventLocationEntityResponse>
  eventLocations?: Maybe<EventLocationEntityResponseCollection>
  events?: Maybe<EventEntityResponseCollection>
  expectation?: Maybe<ExpectationEntityResponse>
  expectations?: Maybe<ExpectationEntityResponseCollection>
  format?: Maybe<FormatEntityResponse>
  game?: Maybe<GameEntityResponse>
  games?: Maybe<GameEntityResponseCollection>
  history?: Maybe<HistoryEntityResponse>
  home?: Maybe<HomeEntityResponse>
  hosting?: Maybe<HostingEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  player?: Maybe<PlayerEntityResponse>
  players?: Maybe<PlayerEntityResponseCollection>
  search?: Maybe<SearchResponse>
  sponsor?: Maybe<SponsorEntityResponse>
  sponsors?: Maybe<SponsorEntityResponseCollection>
  tag?: Maybe<TagEntityResponse>
  tags?: Maybe<TagEntityResponseCollection>
  testimonial?: Maybe<TestimonialEntityResponse>
  testimonials?: Maybe<TestimonialEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
  venue?: Maybe<VenueEntityResponse>
  venues?: Maybe<VenueEntityResponseCollection>
}

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryEventArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryEventLocationArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryEventLocationsArgs = {
  filters?: InputMaybe<EventLocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryExpectationArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryExpectationsArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryFormatArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryGameArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryHistoryArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryHostingArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QuerySearchArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>
  query: Scalars["String"]["input"]
}

export type QuerySponsorArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QuerySponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryTagArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryTestimonialArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryVenueArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

export type QueryVenuesArgs = {
  filters?: InputMaybe<VenueFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta"
  pagination: Pagination
}

export type SearchResponse = {
  __typename?: "SearchResponse"
  articles?: Maybe<ArticleEntityResponseCollection>
  events?: Maybe<EventEntityResponseCollection>
  games?: Maybe<GameEntityResponseCollection>
  players?: Maybe<PlayerEntityResponseCollection>
}

export type SearchResponseArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
}

export type SearchResponseEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
}

export type SearchResponseGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
}

export type SearchResponsePlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
}

export type Sponsor = {
  __typename?: "Sponsor"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  logo?: Maybe<UploadFileEntityResponse>
  name: Scalars["String"]["output"]
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type SponsorSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type SponsorEntity = {
  __typename?: "SponsorEntity"
  attributes?: Maybe<Sponsor>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type SponsorEntityResponse = {
  __typename?: "SponsorEntityResponse"
  data?: Maybe<SponsorEntity>
}

export type SponsorEntityResponseCollection = {
  __typename?: "SponsorEntityResponseCollection"
  data: Array<SponsorEntity>
  meta: ResponseCollectionMeta
}

export type SponsorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<SponsorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type SponsorInput = {
  logo?: InputMaybe<Scalars["ID"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type SponsorRelationResponseCollection = {
  __typename?: "SponsorRelationResponseCollection"
  data: Array<SponsorEntity>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  contains?: InputMaybe<Scalars["String"]["input"]>
  containsi?: InputMaybe<Scalars["String"]["input"]>
  endsWith?: InputMaybe<Scalars["String"]["input"]>
  eq?: InputMaybe<Scalars["String"]["input"]>
  eqi?: InputMaybe<Scalars["String"]["input"]>
  gt?: InputMaybe<Scalars["String"]["input"]>
  gte?: InputMaybe<Scalars["String"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  lt?: InputMaybe<Scalars["String"]["input"]>
  lte?: InputMaybe<Scalars["String"]["input"]>
  ne?: InputMaybe<Scalars["String"]["input"]>
  nei?: InputMaybe<Scalars["String"]["input"]>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars["String"]["input"]>
  notContainsi?: InputMaybe<Scalars["String"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  startsWith?: InputMaybe<Scalars["String"]["input"]>
}

export type Tag = {
  __typename?: "Tag"
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  value: Scalars["String"]["output"]
}

export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type TagEntity = {
  __typename?: "TagEntity"
  attributes?: Maybe<Tag>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type TagEntityResponse = {
  __typename?: "TagEntityResponse"
  data?: Maybe<TagEntity>
}

export type TagEntityResponseCollection = {
  __typename?: "TagEntityResponseCollection"
  data: Array<TagEntity>
  meta: ResponseCollectionMeta
}

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<TagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  value?: InputMaybe<StringFilterInput>
}

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  value?: InputMaybe<Scalars["String"]["input"]>
}

export type TagRelationResponseCollection = {
  __typename?: "TagRelationResponseCollection"
  data: Array<TagEntity>
}

export type Testimonial = {
  __typename?: "Testimonial"
  audio?: Maybe<UploadFileEntityResponse>
  author?: Maybe<PlayerEntityResponse>
  content: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type TestimonialEntity = {
  __typename?: "TestimonialEntity"
  attributes?: Maybe<Testimonial>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type TestimonialEntityResponse = {
  __typename?: "TestimonialEntityResponse"
  data?: Maybe<TestimonialEntity>
}

export type TestimonialEntityResponseCollection = {
  __typename?: "TestimonialEntityResponseCollection"
  data: Array<TestimonialEntity>
  meta: ResponseCollectionMeta
}

export type TestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>
  author?: InputMaybe<PlayerFiltersInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<TestimonialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type TestimonialInput = {
  audio?: InputMaybe<Scalars["ID"]["input"]>
  author?: InputMaybe<Scalars["ID"]["input"]>
  content?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>
  between?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>
  contains?: InputMaybe<Scalars["Time"]["input"]>
  containsi?: InputMaybe<Scalars["Time"]["input"]>
  endsWith?: InputMaybe<Scalars["Time"]["input"]>
  eq?: InputMaybe<Scalars["Time"]["input"]>
  eqi?: InputMaybe<Scalars["Time"]["input"]>
  gt?: InputMaybe<Scalars["Time"]["input"]>
  gte?: InputMaybe<Scalars["Time"]["input"]>
  in?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>
  lt?: InputMaybe<Scalars["Time"]["input"]>
  lte?: InputMaybe<Scalars["Time"]["input"]>
  ne?: InputMaybe<Scalars["Time"]["input"]>
  nei?: InputMaybe<Scalars["Time"]["input"]>
  not?: InputMaybe<TimeFilterInput>
  notContains?: InputMaybe<Scalars["Time"]["input"]>
  notContainsi?: InputMaybe<Scalars["Time"]["input"]>
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>
  null?: InputMaybe<Scalars["Boolean"]["input"]>
  or?: InputMaybe<Array<InputMaybe<Scalars["Time"]["input"]>>>
  startsWith?: InputMaybe<Scalars["Time"]["input"]>
}

export type UploadFile = {
  __typename?: "UploadFile"
  alternativeText?: Maybe<Scalars["String"]["output"]>
  blurhash?: Maybe<Scalars["String"]["output"]>
  caption?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  ext?: Maybe<Scalars["String"]["output"]>
  formats?: Maybe<Scalars["JSON"]["output"]>
  hash: Scalars["String"]["output"]
  height?: Maybe<Scalars["Int"]["output"]>
  mime: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
  previewUrl?: Maybe<Scalars["String"]["output"]>
  provider: Scalars["String"]["output"]
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars["Float"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url: Scalars["String"]["output"]
  width?: Maybe<Scalars["Int"]["output"]>
}

export type UploadFileEntity = {
  __typename?: "UploadFileEntity"
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse"
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection"
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  blurhash?: InputMaybe<StringFilterInput>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>
  blurhash?: InputMaybe<Scalars["String"]["input"]>
  caption?: InputMaybe<Scalars["String"]["input"]>
  ext?: InputMaybe<Scalars["String"]["input"]>
  folder?: InputMaybe<Scalars["ID"]["input"]>
  folderPath?: InputMaybe<Scalars["String"]["input"]>
  formats?: InputMaybe<Scalars["JSON"]["input"]>
  hash?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["Int"]["input"]>
  mime?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  previewUrl?: InputMaybe<Scalars["String"]["input"]>
  provider?: InputMaybe<Scalars["String"]["input"]>
  provider_metadata?: InputMaybe<Scalars["JSON"]["input"]>
  size?: InputMaybe<Scalars["Float"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  width?: InputMaybe<Scalars["Int"]["input"]>
}

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection"
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: "UploadFolder"
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars["String"]["output"]
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars["String"]["output"]
  pathId: Scalars["Int"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity"
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse"
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection"
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  name?: InputMaybe<Scalars["String"]["input"]>
  parent?: InputMaybe<Scalars["ID"]["input"]>
  path?: InputMaybe<Scalars["String"]["input"]>
  pathId?: InputMaybe<Scalars["Int"]["input"]>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection"
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  provider?: Scalars["String"]["input"]
}

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload"
  jwt?: Maybe<Scalars["String"]["output"]>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe"
  blocked?: Maybe<Scalars["Boolean"]["output"]>
  confirmed?: Maybe<Scalars["Boolean"]["output"]>
  email?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars["String"]["output"]
}

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole"
  description?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  type?: Maybe<Scalars["String"]["output"]>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission"
  action: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity"
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection"
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  username: Scalars["String"]["input"]
}

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole"
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  name: Scalars["String"]["output"]
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity"
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse"
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection"
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  type?: InputMaybe<Scalars["String"]["input"]>
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser"
  blocked?: Maybe<Scalars["Boolean"]["output"]>
  confirmed?: Maybe<Scalars["Boolean"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  email: Scalars["String"]["output"]
  player?: Maybe<PlayerEntityResponse>
  provider?: Maybe<Scalars["String"]["output"]>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  username: Scalars["String"]["output"]
}

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity"
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse"
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection"
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  player?: InputMaybe<PlayerFiltersInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  player?: InputMaybe<Scalars["ID"]["input"]>
  provider?: InputMaybe<Scalars["String"]["input"]>
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>
  role?: InputMaybe<Scalars["ID"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection"
  data: Array<UsersPermissionsUserEntity>
}

export type Venue = {
  __typename?: "Venue"
  addressDetails?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  events?: Maybe<EventRelationResponseCollection>
  location?: Maybe<Scalars["JSON"]["output"]>
  logo?: Maybe<UploadFileEntityResponse>
  name: Scalars["String"]["output"]
  shortName?: Maybe<Scalars["String"]["output"]>
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  website?: Maybe<Scalars["String"]["output"]>
}

export type VenueEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VenueSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VenueEntity = {
  __typename?: "VenueEntity"
  attributes?: Maybe<Venue>
  id?: Maybe<Scalars["ID"]["output"]>
}

export type VenueEntityResponse = {
  __typename?: "VenueEntityResponse"
  data?: Maybe<VenueEntity>
}

export type VenueEntityResponseCollection = {
  __typename?: "VenueEntityResponseCollection"
  data: Array<VenueEntity>
  meta: ResponseCollectionMeta
}

export type VenueFiltersInput = {
  addressDetails?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  events?: InputMaybe<EventFiltersInput>
  id?: InputMaybe<IdFilterInput>
  location?: InputMaybe<JsonFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<VenueFiltersInput>
  or?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>
  shortName?: InputMaybe<StringFilterInput>
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  website?: InputMaybe<StringFilterInput>
}

export type VenueInput = {
  addressDetails?: InputMaybe<Scalars["String"]["input"]>
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  location?: InputMaybe<Scalars["JSON"]["input"]>
  logo?: InputMaybe<Scalars["ID"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  shortName?: InputMaybe<Scalars["String"]["input"]>
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >
  website?: InputMaybe<Scalars["String"]["input"]>
}

export type FormatQueryVariables = Exact<{ [key: string]: never }>

export type FormatQuery = {
  __typename?: "Query"
  format?: {
    __typename?: "FormatEntityResponse"
    data?: {
      __typename?: "FormatEntity"
      attributes?: {
        __typename?: "Format"
        openspace?: string | null
        lawOfTwoFeet?: string | null
        butterfly?: string | null
        bumblebee?: string | null
        schedule?: string | null
      } | null
    } | null
  } | null
}

export type StoryQueryVariables = Exact<{ [key: string]: never }>

export type StoryQuery = {
  __typename?: "Query"
  history?: {
    __typename?: "HistoryEntityResponse"
    data?: {
      __typename?: "HistoryEntity"
      attributes?: {
        __typename?: "History"
        founders?: string | null
        keyMoments?: string | null
        intro?: string | null
        items?: Array<{
          __typename?: "ComponentDefaultHistoryItem"
          id: string
          date: any
          dateFormat?: Enum_Componentdefaulthistoryitem_Dateformat | null
          additionalText?: string | null
          title: string
          description: string
          image: {
            __typename?: "UploadFileEntityResponse"
            data?: {
              __typename?: "UploadFileEntity"
              id?: string | null
              attributes?: {
                __typename?: "UploadFile"
                name: string
                url: string
              } | null
            } | null
          }
        } | null> | null
      } | null
    } | null
  } | null
  players?: {
    __typename?: "PlayerEntityResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
          })
        | null
    }>
  } | null
}

export type ArticleQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type ArticleQuery = {
  __typename?: "Query"
  articles?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      attributes?:
        | ({ __typename?: "Article" } & {
            " $fragmentRefs"?: {
              ArticleDetailsFragment: ArticleDetailsFragment
            }
          })
        | null
    }>
  } | null
}

export type ArticleDetailsFragment = {
  __typename?: "Article"
  slug: string
  title: string
  category?: Enum_Article_Category | null
  summary?: string | null
  publishedAt?: any | null
  updatedAt?: any | null
  cannonical?: string | null
  content?: string | null
  tags?: {
    __typename?: "TagRelationResponseCollection"
    data: Array<{
      __typename?: "TagEntity"
      id?: string | null
      attributes?: { __typename?: "Tag"; value: string } | null
    }>
  } | null
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
  images: {
    __typename?: "UploadFileRelationResponseCollection"
    data: Array<{
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    }>
  }
  author?: {
    __typename?: "PlayerEntityResponse"
    data?: {
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?: {
        __typename?: "Player"
        name: string
        slug: string
        position: Enum_Player_Position
        tagline?: string | null
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
} & { " $fragmentName"?: "ArticleDetailsFragment" }

export type ArticlesQueryVariables = Exact<{
  page: Scalars["Int"]["input"]
  pageSize: Scalars["Int"]["input"]
  category?: InputMaybe<Scalars["String"]["input"]>
  tag?: InputMaybe<Scalars["String"]["input"]>
}>

export type ArticlesQuery = {
  __typename?: "Query"
  articles?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Article" } & {
            " $fragmentRefs"?: { ArticleItemFragment: ArticleItemFragment }
          })
        | null
    }>
    meta: {
      __typename?: "ResponseCollectionMeta"
      pagination: {
        __typename?: "Pagination"
        page: number
        pageSize: number
        total: number
        pageCount: number
      }
    }
  } | null
}

export type ArticleItemFragment = {
  __typename?: "Article"
  slug: string
  title: string
  summary?: string | null
  category?: Enum_Article_Category | null
  publishedAt?: any | null
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
  author?: {
    __typename?: "PlayerEntityResponse"
    data?: {
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?: {
        __typename?: "Player"
        slug: string
        name: string
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
} & { " $fragmentName"?: "ArticleItemFragment" }

export type ArticleNavQueryVariables = Exact<{ [key: string]: never }>

export type ArticleNavQuery = {
  __typename?: "Query"
  articles?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      attributes?: {
        __typename?: "Article"
        slug: string
        title: string
        category?: Enum_Article_Category | null
        publishedAt?: any | null
        tags?: {
          __typename?: "TagRelationResponseCollection"
          data: Array<{
            __typename?: "TagEntity"
            attributes?: { __typename?: "Tag"; value: string } | null
          }>
        } | null
        defaultImage: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        }
      } | null
    }>
  } | null
}

export type ArticleSidebarQueryVariables = Exact<{ [key: string]: never }>

export type ArticleSidebarQuery = {
  __typename?: "Query"
  latest?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      id?: string | null
      attributes?: {
        __typename?: "Article"
        slug: string
        title: string
        publishedAt?: any | null
        defaultImage: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        }
      } | null
    }>
  } | null
  categories?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      attributes?: {
        __typename?: "Article"
        category?: Enum_Article_Category | null
      } | null
    }>
  } | null
  tags?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      attributes?: {
        __typename?: "Article"
        tags?: {
          __typename?: "TagRelationResponseCollection"
          data: Array<{
            __typename?: "TagEntity"
            id?: string | null
            attributes?: { __typename?: "Tag"; value: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type ArticleSlugsQueryVariables = Exact<{ [key: string]: never }>

export type ArticleSlugsQuery = {
  __typename?: "Query"
  articles?: {
    __typename?: "ArticleEntityResponseCollection"
    data: Array<{
      __typename?: "ArticleEntity"
      attributes?: { __typename?: "Article"; slug: string } | null
    }>
  } | null
}

export type EventCalendarQueryVariables = Exact<{ [key: string]: never }>

export type EventCalendarQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      attributes?: {
        __typename?: "Event"
        slug: string
        name: string
        start: any
        end: any
        status: Enum_Event_Status
        venue?: {
          __typename?: "VenueEntityResponse"
          data?: {
            __typename?: "VenueEntity"
            attributes?: { __typename?: "Venue"; name: string } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type EventQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type EventQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventDetailsFragment: EventDetailsFragment }
          })
        | null
    }>
  } | null
}

export type EventDetailsFragment = {
  __typename?: "Event"
  slug: string
  name: string
  start: any
  end: any
  timezone?: string | null
  status: Enum_Event_Status
  description?: string | null
  contactEmail?: string | null
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
  images?: {
    __typename?: "UploadFileRelationResponseCollection"
    data: Array<{
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    }>
  } | null
  location?: {
    __typename?: "EventLocationEntityResponse"
    data?: {
      __typename?: "EventLocationEntity"
      attributes?: {
        __typename?: "EventLocation"
        name: string
        country?: string | null
        location?: any | null
      } | null
    } | null
  } | null
  venue?: {
    __typename?: "VenueEntityResponse"
    data?: {
      __typename?: "VenueEntity"
      attributes?: {
        __typename?: "Venue"
        name: string
        website?: string | null
        location?: any | null
        addressDetails?: string | null
      } | null
    } | null
  } | null
  timetable?: Array<{
    __typename?: "ComponentEventsTimetable"
    id: string
    day: Enum_Componenteventstimetable_Day
    description: string
    timeslots: Array<{
      __typename?: "ComponentEventsTimeSlots"
      id: string
      time: any
      description: string
    } | null>
  } | null> | null
  registration?: {
    __typename?: "ComponentRegistrationRegistration"
    link?: string | null
    widgetCode?: string | null
  } | null
  sponsorships?: Array<{
    __typename?: "ComponentEventsSponsorship"
    id: string
    category: string
    sponsors?: {
      __typename?: "SponsorRelationResponseCollection"
      data: Array<{
        __typename?: "SponsorEntity"
        id?: string | null
        attributes?: {
          __typename?: "Sponsor"
          name: string
          url?: string | null
          logo?: {
            __typename?: "UploadFileEntityResponse"
            data?: {
              __typename?: "UploadFileEntity"
              id?: string | null
              attributes?: {
                __typename?: "UploadFile"
                name: string
                url: string
                blurhash?: string | null
                width?: number | null
                height?: number | null
              } | null
            } | null
          } | null
          socialNetworks?: Array<{
            __typename?: "ComponentContactSocialNetwork"
            id: string
            type?: Enum_Componentcontactsocialnetwork_Type | null
            url?: string | null
          } | null> | null
        } | null
      }>
    } | null
  } | null> | null
  hosts?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
          })
        | null
    }>
  } | null
  mentors?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
          })
        | null
    }>
  } | null
  players?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
          })
        | null
    }>
  } | null
  media?: Array<{
    __typename?: "ComponentEventsMedia"
    id: string
    url: string
    type: Enum_Componenteventsmedia_Type
  } | null> | null
} & { " $fragmentName"?: "EventDetailsFragment" }

export type EventsQueryVariables = Exact<{
  page: Scalars["Int"]["input"]
  pageSize: Scalars["Int"]["input"]
  status?: InputMaybe<Scalars["String"]["input"]>
  location?: InputMaybe<Scalars["String"]["input"]>
  country?: InputMaybe<Scalars["String"]["input"]>
}>

export type EventsQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
          })
        | null
    }>
    meta: {
      __typename?: "ResponseCollectionMeta"
      pagination: {
        __typename?: "Pagination"
        page: number
        pageSize: number
        total: number
        pageCount: number
      }
    }
  } | null
}

export type UpcomingEventsQueryVariables = Exact<{
  today: Scalars["DateTime"]["input"]
}>

export type UpcomingEventsQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
          })
        | null
    }>
  } | null
}

export type EventItemFragment = {
  __typename?: "Event"
  slug: string
  name: string
  start: any
  end: any
  timezone?: string | null
  status: Enum_Event_Status
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
  location?: {
    __typename?: "EventLocationEntityResponse"
    data?: {
      __typename?: "EventLocationEntity"
      attributes?: {
        __typename?: "EventLocation"
        name: string
        country?: string | null
      } | null
    } | null
  } | null
} & { " $fragmentName"?: "EventItemFragment" }

export type HostingQueryVariables = Exact<{ [key: string]: never }>

export type HostingQuery = {
  __typename?: "Query"
  hosting?: {
    __typename?: "HostingEntityResponse"
    data?: {
      __typename?: "HostingEntity"
      attributes?: { __typename?: "Hosting"; content?: string | null } | null
    } | null
  } | null
}

export type MarkersQueryVariables = Exact<{ [key: string]: never }>

export type MarkersQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?: {
        __typename?: "Event"
        slug: string
        name: string
        start: any
        end: any
        timezone?: string | null
        status: Enum_Event_Status
        registration?: {
          __typename?: "ComponentRegistrationRegistration"
          link?: string | null
        } | null
        venue?: {
          __typename?: "VenueEntityResponse"
          data?: {
            __typename?: "VenueEntity"
            id?: string | null
            attributes?: {
              __typename?: "Venue"
              name: string
              website?: string | null
              location?: any | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type EventNavQueryVariables = Exact<{ [key: string]: never }>

export type EventNavQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      attributes?: {
        __typename?: "Event"
        slug: string
        name: string
        start: any
        status: Enum_Event_Status
        location?: {
          __typename?: "EventLocationEntityResponse"
          data?: {
            __typename?: "EventLocationEntity"
            attributes?: {
              __typename?: "EventLocation"
              slug?: string | null
              name: string
              country?: string | null
            } | null
          } | null
        } | null
        defaultImage: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        }
      } | null
    }>
  } | null
}

export type EventSlugsQueryVariables = Exact<{
  today: Scalars["DateTime"]["input"]
}>

export type EventSlugsQuery = {
  __typename?: "Query"
  events?: {
    __typename?: "EventEntityResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      attributes?: { __typename?: "Event"; slug: string } | null
    }>
  } | null
}

export type TestimonialsQueryVariables = Exact<{ [key: string]: never }>

export type TestimonialsQuery = {
  __typename?: "Query"
  testimonials?: {
    __typename?: "TestimonialEntityResponseCollection"
    data: Array<{
      __typename?: "TestimonialEntity"
      id?: string | null
      attributes?: {
        __typename?: "Testimonial"
        content: string
        url?: string | null
        audio?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
            } | null
          } | null
        } | null
        author?: {
          __typename?: "PlayerEntityResponse"
          data?: {
            __typename?: "PlayerEntity"
            attributes?: {
              __typename?: "Player"
              name: string
              slug: string
              tagline?: string | null
              avatar?: {
                __typename?: "UploadFileEntityResponse"
                data?: {
                  __typename?: "UploadFileEntity"
                  id?: string | null
                  attributes?: {
                    __typename?: "UploadFile"
                    name: string
                    url: string
                    blurhash?: string | null
                    width?: number | null
                    height?: number | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type GameQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type GameQuery = {
  __typename?: "Query"
  games?: {
    __typename?: "GameEntityResponseCollection"
    data: Array<{
      __typename?: "GameEntity"
      attributes?:
        | ({ __typename?: "Game" } & {
            " $fragmentRefs"?: { GameDetailsFragment: GameDetailsFragment }
          })
        | null
    }>
  } | null
}

export type GameDetailsFragment = {
  __typename?: "Game"
  slug: string
  name: string
  category: Enum_Game_Category
  scale?: string | null
  timebox?: string | null
  summary?: string | null
  credits?: string | null
  description: string
  publishedAt?: any | null
  tags?: Array<{
    __typename?: "ComponentSharedList"
    id: string
    value: string
  } | null> | null
  materials?: Array<{
    __typename?: "ComponentSharedList"
    id: string
    value: string
  } | null> | null
  preparationSteps?: Array<{
    __typename?: "ComponentSharedList"
    id: string
    value: string
  } | null> | null
  safety?: Array<{
    __typename?: "ComponentSharedDictionary"
    id: string
    key: string
    value: string
  } | null> | null
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
  images: {
    __typename?: "UploadFileRelationResponseCollection"
    data: Array<{
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    }>
  }
  resources?: {
    __typename?: "UploadFileRelationResponseCollection"
    data: Array<{
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
      } | null
    }>
  } | null
  firstPlayedAt?: {
    __typename?: "EventEntityResponse"
    data?: {
      __typename?: "EventEntity"
      attributes?: { __typename?: "Event"; name: string; slug: string } | null
    } | null
  } | null
  documentedBy?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?: {
        __typename?: "Player"
        name: string
        slug: string
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
  proposedBy?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?: {
        __typename?: "Player"
        name: string
        slug: string
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
  ratings?: {
    __typename?: "ComponentGamesRatings"
    energy?: number | null
    connection?: number | null
    silliness?: number | null
  } | null
} & { " $fragmentName"?: "GameDetailsFragment" }

export type GamesQueryVariables = Exact<{
  page: Scalars["Int"]["input"]
  pageSize: Scalars["Int"]["input"]
  category?: InputMaybe<Scalars["String"]["input"]>
  tag?: InputMaybe<Scalars["String"]["input"]>
}>

export type GamesQuery = {
  __typename?: "Query"
  games?: {
    __typename?: "GameEntityResponseCollection"
    data: Array<{
      __typename?: "GameEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Game" } & {
            " $fragmentRefs"?: { GameItemFragment: GameItemFragment }
          })
        | null
    }>
    meta: {
      __typename?: "ResponseCollectionMeta"
      pagination: {
        __typename?: "Pagination"
        page: number
        pageSize: number
        total: number
        pageCount: number
      }
    }
  } | null
}

export type GameItemFragment = {
  __typename?: "Game"
  slug: string
  name: string
  summary?: string | null
  timebox?: string | null
  scale?: string | null
  category: Enum_Game_Category
  proposedBy?: {
    __typename?: "PlayerRelationResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?: {
        __typename?: "Player"
        name: string
        slug: string
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
  defaultImage: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  }
} & { " $fragmentName"?: "GameItemFragment" }

export type GameNavQueryVariables = Exact<{ [key: string]: never }>

export type GameNavQuery = {
  __typename?: "Query"
  games?: {
    __typename?: "GameEntityResponseCollection"
    data: Array<{
      __typename?: "GameEntity"
      attributes?: {
        __typename?: "Game"
        slug: string
        name: string
        category: Enum_Game_Category
        publishedAt?: any | null
        tags?: Array<{
          __typename?: "ComponentSharedList"
          value: string
        } | null> | null
        defaultImage: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        }
      } | null
    }>
  } | null
}

export type GameSlugsQueryVariables = Exact<{ [key: string]: never }>

export type GameSlugsQuery = {
  __typename?: "Query"
  games?: {
    __typename?: "GameEntityResponseCollection"
    data: Array<{
      __typename?: "GameEntity"
      attributes?: { __typename?: "Game"; slug: string } | null
    }>
  } | null
}

export type ExpectationsQueryVariables = Exact<{
  type: Scalars["String"]["input"]
}>

export type ExpectationsQuery = {
  __typename?: "Query"
  expectations?: {
    __typename?: "ExpectationEntityResponseCollection"
    data: Array<{
      __typename?: "ExpectationEntity"
      id?: string | null
      attributes?: {
        __typename?: "Expectation"
        title: string
        type: Enum_Expectation_Type
        icon: string
        content: string
      } | null
    }>
  } | null
}

export type HomeQueryVariables = Exact<{ [key: string]: never }>

export type HomeQuery = {
  __typename?: "Query"
  home?: {
    __typename?: "HomeEntityResponse"
    data?: {
      __typename?: "HomeEntity"
      attributes?: {
        __typename?: "Home"
        images: {
          __typename?: "UploadFileRelationResponseCollection"
          data: Array<{
            __typename?: "UploadFileEntity"
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              width?: number | null
              height?: number | null
              hash: string
              mime: string
              provider: string
              size: number
            } | null
          }>
        }
      } | null
    } | null
  } | null
}

export type PlayerQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type PlayerQuery = {
  __typename?: "Query"
  players?: {
    __typename?: "PlayerEntityResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerDetailsFragment: PlayerDetailsFragment }
          })
        | null
    }>
  } | null
}

export type PlayerDetailsFragment = {
  __typename?: "Player"
  slug: string
  name: string
  position: Enum_Player_Position
  company?: string | null
  tagline?: string | null
  bio?: string | null
  website?: string | null
  location?: any | null
  avatar?: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  } | null
  socialNetworks?: Array<{
    __typename?: "ComponentContactSocialNetwork"
    id: string
    url?: string | null
    type?: Enum_Componentcontactsocialnetwork_Type | null
  } | null> | null
  attended?: {
    __typename?: "EventRelationResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
          })
        | null
    }>
  } | null
  hosted?: {
    __typename?: "EventRelationResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
          })
        | null
    }>
  } | null
  mentored?: {
    __typename?: "EventRelationResponseCollection"
    data: Array<{
      __typename?: "EventEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
          })
        | null
    }>
  } | null
} & { " $fragmentName"?: "PlayerDetailsFragment" }

export type PlayersQueryVariables = Exact<{
  page: Scalars["Int"]["input"]
  pageSize: Scalars["Int"]["input"]
  position?: InputMaybe<Scalars["String"]["input"]>
}>

export type PlayersQuery = {
  __typename?: "Query"
  players?: {
    __typename?: "PlayerEntityResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      id?: string | null
      attributes?:
        | ({ __typename?: "Player" } & {
            " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
          })
        | null
    }>
    meta: {
      __typename?: "ResponseCollectionMeta"
      pagination: {
        __typename?: "Pagination"
        page: number
        pageSize: number
        total: number
        pageCount: number
      }
    }
  } | null
}

export type PlayerItemFragment = {
  __typename?: "Player"
  slug: string
  name: string
  position: Enum_Player_Position
  avatar?: {
    __typename?: "UploadFileEntityResponse"
    data?: {
      __typename?: "UploadFileEntity"
      id?: string | null
      attributes?: {
        __typename?: "UploadFile"
        name: string
        url: string
        blurhash?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null
  } | null
  socialNetworks?: Array<{
    __typename?: "ComponentContactSocialNetwork"
    id: string
    url?: string | null
    type?: Enum_Componentcontactsocialnetwork_Type | null
  } | null> | null
} & { " $fragmentName"?: "PlayerItemFragment" }

export type PlayerNavQueryVariables = Exact<{ [key: string]: never }>

export type PlayerNavQuery = {
  __typename?: "Query"
  players?: {
    __typename?: "PlayerEntityResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      attributes?: {
        __typename?: "Player"
        slug: string
        name: string
        position: Enum_Player_Position
        updatedAt?: any | null
        avatar?: {
          __typename?: "UploadFileEntityResponse"
          data?: {
            __typename?: "UploadFileEntity"
            id?: string | null
            attributes?: {
              __typename?: "UploadFile"
              name: string
              url: string
              blurhash?: string | null
              width?: number | null
              height?: number | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type PlayerSlugsQueryVariables = Exact<{ [key: string]: never }>

export type PlayerSlugsQuery = {
  __typename?: "Query"
  players?: {
    __typename?: "PlayerEntityResponseCollection"
    data: Array<{
      __typename?: "PlayerEntity"
      attributes?: { __typename?: "Player"; slug: string } | null
    }>
  } | null
}

export type SearchQueryVariables = Exact<{
  input: Scalars["String"]["input"]
}>

export type SearchQuery = {
  __typename?: "Query"
  search?: {
    __typename?: "SearchResponse"
    events?: {
      __typename?: "EventEntityResponseCollection"
      data: Array<{
        __typename?: "EventEntity"
        id?: string | null
        attributes?:
          | ({ __typename?: "Event" } & {
              " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
            })
          | null
      }>
    } | null
    players?: {
      __typename?: "PlayerEntityResponseCollection"
      data: Array<{
        __typename?: "PlayerEntity"
        id?: string | null
        attributes?:
          | ({ __typename?: "Player" } & {
              " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
            })
          | null
      }>
    } | null
    games?: {
      __typename?: "GameEntityResponseCollection"
      data: Array<{
        __typename?: "GameEntity"
        attributes?:
          | ({ __typename?: "Game" } & {
              " $fragmentRefs"?: { GameItemFragment: GameItemFragment }
            })
          | null
      }>
    } | null
    articles?: {
      __typename?: "ArticleEntityResponseCollection"
      data: Array<{
        __typename?: "ArticleEntity"
        attributes?:
          | ({ __typename?: "Article" } & {
              " $fragmentRefs"?: { ArticleItemFragment: ArticleItemFragment }
            })
          | null
      }>
    } | null
  } | null
}

export const ArticleDetailsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Article" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "cannonical" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "position" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tagline" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "content" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleDetailsFragment, unknown>
export const ArticleItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Article" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleItemFragment, unknown>
export const PlayerItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerItemFragment, unknown>
export const EventDetailsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "contactEmail" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "venue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "website" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "addressDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "timetable" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "day" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "timeslots" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "limit" },
                            value: { kind: "IntValue", value: "10000" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "time" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "registration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "link" } },
                { kind: "Field", name: { kind: "Name", value: "widgetCode" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sponsorships" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sponsors" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "logo" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "data" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "name",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "url",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "blurhash",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "width",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "height",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "socialNetworks",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mentors" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventDetailsFragment, unknown>
export const GameDetailsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GameDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Game" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "scale" } },
          { kind: "Field", name: { kind: "Name", value: "timebox" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "credits" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "materials" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "preparationSteps" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "safety" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "resources" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "firstPlayedAt" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "documentedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ratings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "energy" } },
                { kind: "Field", name: { kind: "Name", value: "connection" } },
                { kind: "Field", name: { kind: "Name", value: "silliness" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameDetailsFragment, unknown>
export const GameItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GameItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Game" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "timebox" } },
          { kind: "Field", name: { kind: "Name", value: "scale" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameItemFragment, unknown>
export const EventItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventItemFragment, unknown>
export const PlayerDetailsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          { kind: "Field", name: { kind: "Name", value: "company" } },
          { kind: "Field", name: { kind: "Name", value: "tagline" } },
          { kind: "Field", name: { kind: "Name", value: "bio" } },
          { kind: "Field", name: { kind: "Name", value: "website" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "attended" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hosted" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mentored" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerDetailsFragment, unknown>
export const FormatDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Format" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "format" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "openspace" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lawOfTwoFeet" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "butterfly" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bumblebee" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "schedule" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FormatQuery, FormatQueryVariables>
export const StoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Story" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "history" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "founders" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "keyMoments" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "intro" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "items" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "pagination" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "limit" },
                                        value: {
                                          kind: "IntValue",
                                          value: "10000",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "date" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "dateFormat" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "additionalText",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "title" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "data" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "name",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "url",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name:asc", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "position" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "StringValue",
                              value: "Founder",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StoryQuery, StoryQueryVariables>
export const ArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Article" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ArticleDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Article" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "cannonical" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "position" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tagline" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "content" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>
export const ArticlesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Articles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "category" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "publishedAt:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "page" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "page" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pageSize" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pageSize" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "category" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eqi" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "category" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tags" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "value" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eqi" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tag" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ArticleItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "meta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pagination" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageSize" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageCount" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Article" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>
export const ArticleNavDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ArticleNav" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "publishedAt:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "value",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publishedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultImage" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleNavQuery, ArticleNavQueryVariables>
export const ArticleSidebarDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ArticleSidebar" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "latest" },
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "publishedAt:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "3" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publishedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultImage" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "categories" },
            name: { kind: "Name", value: "articles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "articles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "value",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleSidebarQuery, ArticleSidebarQueryVariables>
export const ArticleSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ArticleSlugs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleSlugsQuery, ArticleSlugsQueryVariables>
export const EventCalendarDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EventCalendar" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "start" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "end" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "venue" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventCalendarQuery, EventCalendarQueryVariables>
export const EventDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Event" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "contactEmail" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "venue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "website" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "addressDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "timetable" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "day" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "timeslots" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "limit" },
                            value: { kind: "IntValue", value: "10000" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "time" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "registration" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "link" } },
                { kind: "Field", name: { kind: "Name", value: "widgetCode" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sponsorships" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sponsors" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "logo" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "data" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "name",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "url",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "blurhash",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "width",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "height",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "socialNetworks",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mentors" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventQuery, EventQueryVariables>
export const EventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Events" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "location" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "country" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "page" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "page" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pageSize" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pageSize" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eqi" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "status" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "location" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eqi" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "location" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "country" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eqi" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "country" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "meta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pagination" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageSize" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageCount" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>
export const UpcomingEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UpcomingEvents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "today" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DateTime" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:asc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "end" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "today" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpcomingEventsQuery, UpcomingEventsQueryVariables>
export const HostingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Hosting" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "hosting" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HostingQuery, HostingQueryVariables>
export const MarkersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Markers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:asc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "ne" },
                            value: {
                              kind: "StringValue",
                              value: "Cancelled",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "venue" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "location" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "ne" },
                                  value: { kind: "ObjectValue", fields: [] },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "start" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "end" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timezone" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "registration" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "link" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "venue" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "website",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "location",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarkersQuery, MarkersQueryVariables>
export const EventNavDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EventNav" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "start" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "slug",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "country",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultImage" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventNavQuery, EventNavQueryVariables>
export const EventSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EventSlugs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "today" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DateTime" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "end" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "lt" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "today" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventSlugsQuery, EventSlugsQueryVariables>
export const TestimonialsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Testimonials" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "testimonials" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "audio" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "author" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "slug",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "tagline",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "avatar",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "data",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "id",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value:
                                                                "attributes",
                                                            },
                                                            selectionSet: {
                                                              kind: "SelectionSet",
                                                              selections: [
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "name",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "url",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "blurhash",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "width",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "height",
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TestimonialsQuery, TestimonialsQueryVariables>
export const GameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Game" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "games" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "GameDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GameDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Game" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "scale" } },
          { kind: "Field", name: { kind: "Name", value: "timebox" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "credits" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "materials" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "preparationSteps" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "safety" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "resources" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "firstPlayedAt" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "documentedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ratings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "energy" } },
                { kind: "Field", name: { kind: "Name", value: "connection" } },
                { kind: "Field", name: { kind: "Name", value: "silliness" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameQuery, GameQueryVariables>
export const GamesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Games" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "category" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tag" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "games" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name:asc", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "page" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "page" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pageSize" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pageSize" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "category" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eqi" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "category" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tags" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "value" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eqi" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tag" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "GameItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "meta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pagination" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageSize" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageCount" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GameItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Game" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "timebox" } },
          { kind: "Field", name: { kind: "Name", value: "scale" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GamesQuery, GamesQueryVariables>
export const GameNavDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GameNav" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "games" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name:asc", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publishedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultImage" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameNavQuery, GameNavQueryVariables>
export const GameSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GameSlugs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "games" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameSlugsQuery, GameSlugsQueryVariables>
export const ExpectationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Expectations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "expectations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "type" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "icon" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ExpectationsQuery, ExpectationsQueryVariables>
export const HomeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Home" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "home" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "pagination" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "limit" },
                                        value: {
                                          kind: "IntValue",
                                          value: "10000",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "hash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "mime",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "provider",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>
export const PlayerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Player" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerDetails" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerDetails" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          { kind: "Field", name: { kind: "Name", value: "company" } },
          { kind: "Field", name: { kind: "Name", value: "tagline" } },
          { kind: "Field", name: { kind: "Name", value: "bio" } },
          { kind: "Field", name: { kind: "Name", value: "website" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "attended" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hosted" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mentored" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: {
                  kind: "StringValue",
                  value: "start:desc",
                  block: false,
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "EventItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerQuery, PlayerQueryVariables>
export const PlayersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Players" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "position" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name:asc", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "page" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "page" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "pageSize" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pageSize" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "position" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eqi" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "position" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PlayerItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "meta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pagination" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageSize" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageCount" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayersQuery, PlayersQueryVariables>
export const PlayerNavDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PlayerNav" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name:asc", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "position" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerNavQuery, PlayerNavQueryVariables>
export const PlayerSlugsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PlayerSlugs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerSlugsQuery, PlayerSlugsQueryVariables>
export const SearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Search" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "search" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "events" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "publishedAt" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "notNull" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "EventItem" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "players" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "PlayerItem" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "games" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "publishedAt" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "notNull" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "GameItem" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "articles" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "publishedAt" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "notNull" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ArticleItem",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "start" } },
          { kind: "Field", name: { kind: "Name", value: "end" } },
          { kind: "Field", name: { kind: "Name", value: "timezone" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "socialNetworks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GameItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Game" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "timebox" } },
          { kind: "Field", name: { kind: "Name", value: "scale" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Article" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blurhash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attributes",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "blurhash",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>
