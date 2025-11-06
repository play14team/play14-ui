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
}

export type Article = {
  __typename?: "Article"
  /** @deprecated Use root level fields instead */
  attributes: Article
  author?: Maybe<Player>
  cannonical?: Maybe<Scalars["String"]["output"]>
  category?: Maybe<Enum_Article_Category>
  content?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Article
  defaultImage: UploadFile
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  images: Array<Maybe<UploadFile>>
  images_connection: UploadFileRelationResponseCollection
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  summary?: Maybe<Scalars["String"]["output"]>
  tags: Array<Maybe<Tag>>
  tags_connection?: Maybe<TagRelationResponseCollection>
  title: Scalars["String"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ArticleImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ArticleEntityResponseCollection = {
  __typename?: "ArticleEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Article>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Article>
  pageInfo: Pagination
}

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  author?: InputMaybe<PlayerFiltersInput>
  cannonical?: InputMaybe<StringFilterInput>
  category?: InputMaybe<StringFilterInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
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
  /** @deprecated Use `nodes` field instead */
  data: Array<Article>
  nodes: Array<Article>
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentContactSocialNetwork
  /** @deprecated Use root level fields instead */
  data: ComponentContactSocialNetwork
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentDefaultHistoryItem
  /** @deprecated Use root level fields instead */
  data: ComponentDefaultHistoryItem
  date: Scalars["Date"]["output"]
  dateFormat?: Maybe<Enum_Componentdefaulthistoryitem_Dateformat>
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  image: UploadFile
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentEventsMedia
  /** @deprecated Use root level fields instead */
  data: ComponentEventsMedia
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentEventsSponsorship
  category: Scalars["String"]["output"]
  /** @deprecated Use root level fields instead */
  data: ComponentEventsSponsorship
  id: Scalars["ID"]["output"]
  sponsors: Array<Maybe<Sponsor>>
  sponsors_connection?: Maybe<SponsorRelationResponseCollection>
}

export type ComponentEventsSponsorshipSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ComponentEventsSponsorshipSponsors_ConnectionArgs = {
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentEventsTimeSlots
  /** @deprecated Use root level fields instead */
  data: ComponentEventsTimeSlots
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentEventsTimetable
  /** @deprecated Use root level fields instead */
  data: ComponentEventsTimetable
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentGamesRatings
  connection?: Maybe<Scalars["Int"]["output"]>
  /** @deprecated Use root level fields instead */
  data: ComponentGamesRatings
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentLocationAddress
  city: Scalars["String"]["output"]
  /** @deprecated Use root level fields instead */
  data: ComponentLocationAddress
  id: Scalars["ID"]["output"]
  postalCode?: Maybe<Scalars["String"]["output"]>
  street: Scalars["String"]["output"]
}

export type ComponentRegistrationRegistration = {
  __typename?: "ComponentRegistrationRegistration"
  /** @deprecated Use root level fields instead */
  attributes: ComponentRegistrationRegistration
  /** @deprecated Use root level fields instead */
  data: ComponentRegistrationRegistration
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentReportingFinance
  /** @deprecated Use root level fields instead */
  data: ComponentReportingFinance
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentSharedDictionary
  /** @deprecated Use root level fields instead */
  data: ComponentSharedDictionary
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentSharedList
  /** @deprecated Use root level fields instead */
  data: ComponentSharedList
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentSharedMetaSocial
  /** @deprecated Use root level fields instead */
  data: ComponentSharedMetaSocial
  description: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  image?: Maybe<UploadFile>
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
  /** @deprecated Use root level fields instead */
  attributes: ComponentSharedSeo
  canonicalURL?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use root level fields instead */
  data: ComponentSharedSeo
  id: Scalars["ID"]["output"]
  keywords?: Maybe<Scalars["String"]["output"]>
  metaDescription: Scalars["String"]["output"]
  metaImage: UploadFile
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

export type DeleteMutationResponse = {
  __typename?: "DeleteMutationResponse"
  documentId: Scalars["ID"]["output"]
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
  /** @deprecated Use root level fields instead */
  attributes: Event
  contactEmail?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Event
  defaultImage: UploadFile
  description?: Maybe<Scalars["String"]["output"]>
  documentId: Scalars["ID"]["output"]
  end: Scalars["DateTime"]["output"]
  finance?: Maybe<ComponentReportingFinance>
  hosts: Array<Maybe<Player>>
  hosts_connection?: Maybe<PlayerRelationResponseCollection>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  images: Array<Maybe<UploadFile>>
  images_connection?: Maybe<UploadFileRelationResponseCollection>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Event>>
  localizations_connection?: Maybe<EventRelationResponseCollection>
  location?: Maybe<EventLocation>
  media?: Maybe<Array<Maybe<ComponentEventsMedia>>>
  mentors: Array<Maybe<Player>>
  mentors_connection?: Maybe<PlayerRelationResponseCollection>
  name: Scalars["String"]["output"]
  players: Array<Maybe<Player>>
  players_connection?: Maybe<PlayerRelationResponseCollection>
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
  venue?: Maybe<Venue>
}

export type EventHostsArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventHosts_ConnectionArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocalizationsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocalizations_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
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

export type EventMentors_ConnectionArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventPlayers_ConnectionArgs = {
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

export type EventEntityResponseCollection = {
  __typename?: "EventEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Event>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Event>
  pageInfo: Pagination
}

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>
  contactEmail?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  end?: InputMaybe<DateTimeFilterInput>
  finance?: InputMaybe<ComponentReportingFinanceFiltersInput>
  hosts?: InputMaybe<PlayerFiltersInput>
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
  /** @deprecated Use root level fields instead */
  attributes: EventLocation
  country?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: EventLocation
  documentId: Scalars["ID"]["output"]
  events: Array<Maybe<Event>>
  events_connection?: Maybe<EventRelationResponseCollection>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  location?: Maybe<Scalars["JSON"]["output"]>
  name: Scalars["String"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type EventLocationEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocationEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type EventLocationEntityResponseCollection = {
  __typename?: "EventLocationEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<EventLocation>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<EventLocation>
  pageInfo: Pagination
}

export type EventLocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>
  country?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  events?: InputMaybe<EventFiltersInput>
  location?: InputMaybe<JsonFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EventLocationFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type EventLocationInput = {
  country?: InputMaybe<Scalars["String"]["input"]>
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  location?: InputMaybe<Scalars["JSON"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  slug?: InputMaybe<Scalars["String"]["input"]>
}

export type EventRelationResponseCollection = {
  __typename?: "EventRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Event>
  nodes: Array<Event>
}

export type Expectation = {
  __typename?: "Expectation"
  /** @deprecated Use root level fields instead */
  attributes: Expectation
  content: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Expectation
  documentId: Scalars["ID"]["output"]
  icon: Scalars["String"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Expectation>>
  localizations_connection?: Maybe<ExpectationRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  title: Scalars["String"]["output"]
  type: Enum_Expectation_Type
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ExpectationLocalizationsArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ExpectationLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ExpectationEntityResponseCollection = {
  __typename?: "ExpectationEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Expectation>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Expectation>
  pageInfo: Pagination
}

export type ExpectationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExpectationFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  icon?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ExpectationFiltersInput>
  not?: InputMaybe<ExpectationFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ExpectationFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  title?: InputMaybe<StringFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ExpectationInput = {
  content?: InputMaybe<Scalars["String"]["input"]>
  icon?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
  type?: InputMaybe<Enum_Expectation_Type>
}

export type ExpectationRelationResponseCollection = {
  __typename?: "ExpectationRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Expectation>
  nodes: Array<Expectation>
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
  /** @deprecated Use root level fields instead */
  attributes: Format
  bumblebee?: Maybe<Scalars["String"]["output"]>
  butterfly?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Format
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  lawOfTwoFeet?: Maybe<Scalars["String"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Format>>
  localizations_connection?: Maybe<FormatRelationResponseCollection>
  openspace?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  schedule?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type FormatInput = {
  bumblebee?: InputMaybe<Scalars["String"]["input"]>
  butterfly?: InputMaybe<Scalars["String"]["input"]>
  lawOfTwoFeet?: InputMaybe<Scalars["String"]["input"]>
  openspace?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  schedule?: InputMaybe<Scalars["String"]["input"]>
}

export type FormatRelationResponseCollection = {
  __typename?: "FormatRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Format>
  nodes: Array<Format>
}

export type Game = {
  __typename?: "Game"
  /** @deprecated Use root level fields instead */
  attributes: Game
  category: Enum_Game_Category
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  credits?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Game
  defaultImage: UploadFile
  description: Scalars["String"]["output"]
  documentId: Scalars["ID"]["output"]
  documentedBy: Array<Maybe<Player>>
  documentedBy_connection?: Maybe<PlayerRelationResponseCollection>
  firstPlayedAt?: Maybe<Event>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  images: Array<Maybe<UploadFile>>
  images_connection: UploadFileRelationResponseCollection
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Game>>
  localizations_connection?: Maybe<GameRelationResponseCollection>
  materials?: Maybe<Array<Maybe<ComponentSharedList>>>
  name: Scalars["String"]["output"]
  preparationSteps?: Maybe<Array<Maybe<ComponentSharedList>>>
  proposedBy: Array<Maybe<Player>>
  proposedBy_connection?: Maybe<PlayerRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  ratings?: Maybe<ComponentGamesRatings>
  resources: Array<Maybe<UploadFile>>
  resources_connection?: Maybe<UploadFileRelationResponseCollection>
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

export type GameDocumentedBy_ConnectionArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameLocalizationsArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameLocalizations_ConnectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
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

export type GameProposedBy_ConnectionArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameResourcesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type GameResources_ConnectionArgs = {
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

export type GameEntityResponseCollection = {
  __typename?: "GameEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Game>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Game>
  pageInfo: Pagination
}

export type GameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  category?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  credits?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  documentedBy?: InputMaybe<PlayerFiltersInput>
  firstPlayedAt?: InputMaybe<EventFiltersInput>
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
  /** @deprecated Use `nodes` field instead */
  data: Array<Game>
  nodes: Array<Game>
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
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | Sponsor
  | Tag
  | Testimonial
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Venue

export type History = {
  __typename?: "History"
  /** @deprecated Use root level fields instead */
  attributes: History
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: History
  documentId: Scalars["ID"]["output"]
  founders?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  intro?: Maybe<Scalars["String"]["output"]>
  items?: Maybe<Array<Maybe<ComponentDefaultHistoryItem>>>
  keyMoments?: Maybe<Scalars["String"]["output"]>
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<History>>
  localizations_connection?: Maybe<HistoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HistoryItemsArgs = {
  filters?: InputMaybe<ComponentDefaultHistoryItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HistoryInput = {
  founders?: InputMaybe<Scalars["String"]["input"]>
  intro?: InputMaybe<Scalars["String"]["input"]>
  items?: InputMaybe<Array<InputMaybe<ComponentDefaultHistoryItemInput>>>
  keyMoments?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
}

export type HistoryRelationResponseCollection = {
  __typename?: "HistoryRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<History>
  nodes: Array<History>
}

export type Home = {
  __typename?: "Home"
  /** @deprecated Use root level fields instead */
  attributes: Home
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Home
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  images: Array<Maybe<UploadFile>>
  images_connection: UploadFileRelationResponseCollection
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Home>>
  localizations_connection?: Maybe<HomeRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HomeImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HomeImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HomeInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
}

export type HomeRelationResponseCollection = {
  __typename?: "HomeRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Home>
  nodes: Array<Home>
}

export type Hosting = {
  __typename?: "Hosting"
  /** @deprecated Use root level fields instead */
  attributes: Hosting
  content?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Hosting
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  locale?: Maybe<Scalars["String"]["output"]>
  localizations: Array<Maybe<Hosting>>
  localizations_connection?: Maybe<HostingRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type HostingInput = {
  content?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
}

export type HostingRelationResponseCollection = {
  __typename?: "HostingRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Hosting>
  nodes: Array<Hosting>
}

export type I18NLocale = {
  __typename?: "I18NLocale"
  /** @deprecated Use root level fields instead */
  attributes: I18NLocale
  code?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: I18NLocale
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  name?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<I18NLocale>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<I18NLocale>
  pageInfo: Pagination
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
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
  createArticle?: Maybe<Article>
  createEvent?: Maybe<Event>
  createEventLocation?: Maybe<EventLocation>
  createExpectation?: Maybe<Expectation>
  createGame?: Maybe<Game>
  createPlayer?: Maybe<Player>
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>
  createSponsor?: Maybe<Sponsor>
  createTag?: Maybe<Tag>
  createTestimonial?: Maybe<Testimonial>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createVenue?: Maybe<Venue>
  deleteArticle?: Maybe<DeleteMutationResponse>
  deleteEvent?: Maybe<DeleteMutationResponse>
  deleteEventLocation?: Maybe<DeleteMutationResponse>
  deleteExpectation?: Maybe<DeleteMutationResponse>
  deleteFormat?: Maybe<DeleteMutationResponse>
  deleteGame?: Maybe<DeleteMutationResponse>
  deleteHistory?: Maybe<DeleteMutationResponse>
  deleteHome?: Maybe<DeleteMutationResponse>
  deleteHosting?: Maybe<DeleteMutationResponse>
  deletePlayer?: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>
  deleteSponsor?: Maybe<DeleteMutationResponse>
  deleteTag?: Maybe<DeleteMutationResponse>
  deleteTestimonial?: Maybe<DeleteMutationResponse>
  deleteUploadFile?: Maybe<UploadFile>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteVenue?: Maybe<DeleteMutationResponse>
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  /** Register a user */
  register: UsersPermissionsLoginPayload
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateArticle?: Maybe<Article>
  updateEvent?: Maybe<Event>
  updateEventLocation?: Maybe<EventLocation>
  updateExpectation?: Maybe<Expectation>
  updateFormat?: Maybe<Format>
  updateGame?: Maybe<Game>
  updateHistory?: Maybe<History>
  updateHome?: Maybe<Home>
  updateHosting?: Maybe<Hosting>
  updatePlayer?: Maybe<Player>
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>
  updateSponsor?: Maybe<Sponsor>
  updateTag?: Maybe<Tag>
  updateTestimonial?: Maybe<Testimonial>
  updateUploadFile: UploadFile
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateVenue?: Maybe<Venue>
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationCreateArticleArgs = {
  data: ArticleInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateEventArgs = {
  data: EventInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateEventLocationArgs = {
  data: EventLocationInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateExpectationArgs = {
  data: ExpectationInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateGameArgs = {
  data: GameInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreatePlayerArgs = {
  data: PlayerInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateSponsorArgs = {
  data: SponsorInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateTagArgs = {
  data: TagInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateTestimonialArgs = {
  data: TestimonialInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationCreateVenueArgs = {
  data: VenueInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationDeleteArticleArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteEventArgs = {
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteEventLocationArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteExpectationArgs = {
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteFormatArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
}

export type MutationDeleteGameArgs = {
  documentId: Scalars["ID"]["input"]
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
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteSponsorArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteTagArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteTestimonialArgs = {
  documentId: Scalars["ID"]["input"]
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationDeleteVenueArgs = {
  documentId: Scalars["ID"]["input"]
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

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  passwordConfirmation: Scalars["String"]["input"]
}

export type MutationUpdateArticleArgs = {
  data: ArticleInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateEventArgs = {
  data: EventInput
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateEventLocationArgs = {
  data: EventLocationInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateExpectationArgs = {
  data: ExpectationInput
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateFormatArgs = {
  data: FormatInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateGameArgs = {
  data: GameInput
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateHistoryArgs = {
  data: HistoryInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateHomeArgs = {
  data: HomeInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateHostingArgs = {
  data: HostingInput
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdatePlayerArgs = {
  data: PlayerInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateSponsorArgs = {
  data: SponsorInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateTagArgs = {
  data: TagInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"]
  info?: InputMaybe<FileInfoInput>
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
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
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
  attended: Array<Maybe<Event>>
  attended_connection?: Maybe<EventRelationResponseCollection>
  /** @deprecated Use root level fields instead */
  attributes: Player
  avatar?: Maybe<UploadFile>
  bio?: Maybe<Scalars["String"]["output"]>
  company?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Player
  documentId: Scalars["ID"]["output"]
  documented: Array<Maybe<Game>>
  documented_connection?: Maybe<GameRelationResponseCollection>
  hosted: Array<Maybe<Event>>
  hosted_connection?: Maybe<EventRelationResponseCollection>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  location?: Maybe<Scalars["JSON"]["output"]>
  mentored: Array<Maybe<Event>>
  mentored_connection?: Maybe<EventRelationResponseCollection>
  name: Scalars["String"]["output"]
  position: Enum_Player_Position
  proposed: Array<Maybe<Game>>
  proposed_connection?: Maybe<GameRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  slug: Scalars["String"]["output"]
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  tagline?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  user?: Maybe<UsersPermissionsUser>
  website?: Maybe<Scalars["String"]["output"]>
}

export type PlayerAttendedArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerAttended_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerDocumentedArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerDocumented_ConnectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerHostedArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerHosted_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerMentoredArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerMentored_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerProposedArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerProposed_ConnectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PlayerEntityResponseCollection = {
  __typename?: "PlayerEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Player>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Player>
  pageInfo: Pagination
}

export type PlayerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>
  attended?: InputMaybe<EventFiltersInput>
  bio?: InputMaybe<StringFilterInput>
  company?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  documented?: InputMaybe<GameFiltersInput>
  hosted?: InputMaybe<EventFiltersInput>
  location?: InputMaybe<JsonFilterInput>
  mentored?: InputMaybe<EventFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PlayerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>
  position?: InputMaybe<StringFilterInput>
  proposed?: InputMaybe<GameFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
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
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
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
  /** @deprecated Use `nodes` field instead */
  data: Array<Player>
  nodes: Array<Player>
}

export enum PublicationStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type Query = {
  __typename?: "Query"
  article?: Maybe<Article>
  articles: Array<Maybe<Article>>
  articles_connection?: Maybe<ArticleEntityResponseCollection>
  event?: Maybe<Event>
  eventLocation?: Maybe<EventLocation>
  eventLocations: Array<Maybe<EventLocation>>
  eventLocations_connection?: Maybe<EventLocationEntityResponseCollection>
  events: Array<Maybe<Event>>
  events_connection?: Maybe<EventEntityResponseCollection>
  expectation?: Maybe<Expectation>
  expectations: Array<Maybe<Expectation>>
  expectations_connection?: Maybe<ExpectationEntityResponseCollection>
  format?: Maybe<Format>
  game?: Maybe<Game>
  games: Array<Maybe<Game>>
  games_connection?: Maybe<GameEntityResponseCollection>
  history?: Maybe<History>
  home?: Maybe<Home>
  hosting?: Maybe<Hosting>
  i18NLocale?: Maybe<I18NLocale>
  i18NLocales: Array<Maybe<I18NLocale>>
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  player?: Maybe<Player>
  players: Array<Maybe<Player>>
  players_connection?: Maybe<PlayerEntityResponseCollection>
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>
  search?: Maybe<SearchResponse>
  sponsor?: Maybe<Sponsor>
  sponsors: Array<Maybe<Sponsor>>
  sponsors_connection?: Maybe<SponsorEntityResponseCollection>
  tag?: Maybe<Tag>
  tags: Array<Maybe<Tag>>
  tags_connection?: Maybe<TagEntityResponseCollection>
  testimonial?: Maybe<Testimonial>
  testimonials: Array<Maybe<Testimonial>>
  testimonials_connection?: Maybe<TestimonialEntityResponseCollection>
  uploadFile?: Maybe<UploadFile>
  uploadFiles: Array<Maybe<UploadFile>>
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRole>
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUser>
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>
  venue?: Maybe<Venue>
  venues: Array<Maybe<Venue>>
  venues_connection?: Maybe<VenueEntityResponseCollection>
}

export type QueryArticleArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryEventArgs = {
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryEventLocationArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryEventLocationsArgs = {
  filters?: InputMaybe<EventLocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryEventLocations_ConnectionArgs = {
  filters?: InputMaybe<EventLocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryExpectationArgs = {
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryExpectationsArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryExpectations_ConnectionArgs = {
  filters?: InputMaybe<ExpectationFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryFormatArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryGameArgs = {
  documentId: Scalars["ID"]["input"]
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryGames_ConnectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryHistoryArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryHostingArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocaleArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPlayerArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPlayers_ConnectionArgs = {
  filters?: InputMaybe<PlayerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerySearchArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>
  query: Scalars["String"]["input"]
}

export type QuerySponsorArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QuerySponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerySponsors_ConnectionArgs = {
  filters?: InputMaybe<SponsorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryTagArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryTestimonialArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryTestimonials_ConnectionArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFileArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVenueArgs = {
  documentId: Scalars["ID"]["input"]
  status?: InputMaybe<PublicationStatus>
}

export type QueryVenuesArgs = {
  filters?: InputMaybe<VenueFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVenues_ConnectionArgs = {
  filters?: InputMaybe<VenueFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  status?: InputMaybe<PublicationStatus>
}

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta"
  pagination: Pagination
}

export type ReviewWorkflowsWorkflow = {
  __typename?: "ReviewWorkflowsWorkflow"
  /** @deprecated Use root level fields instead */
  attributes: ReviewWorkflowsWorkflow
  contentTypes: Scalars["JSON"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: ReviewWorkflowsWorkflow
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<ReviewWorkflowsWorkflow>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<ReviewWorkflowsWorkflow>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  contentTypes?: InputMaybe<JsonFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars["JSON"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  stageRequiredToPublish?: InputMaybe<Scalars["ID"]["input"]>
  stages?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type ReviewWorkflowsWorkflowStage = {
  __typename?: "ReviewWorkflowsWorkflowStage"
  /** @deprecated Use root level fields instead */
  attributes: ReviewWorkflowsWorkflowStage
  color?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: ReviewWorkflowsWorkflowStage
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  name?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  workflow?: Maybe<ReviewWorkflowsWorkflow>
}

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<ReviewWorkflowsWorkflowStage>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<ReviewWorkflowsWorkflowStage>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  color?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
}

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  workflow?: InputMaybe<Scalars["ID"]["input"]>
}

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<ReviewWorkflowsWorkflowStage>
  nodes: Array<ReviewWorkflowsWorkflowStage>
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
  /** @deprecated Use root level fields instead */
  attributes: Sponsor
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Sponsor
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  logo?: Maybe<UploadFile>
  name: Scalars["String"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type SponsorSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type SponsorEntityResponseCollection = {
  __typename?: "SponsorEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Sponsor>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Sponsor>
  pageInfo: Pagination
}

export type SponsorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<SponsorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type SponsorInput = {
  logo?: InputMaybe<Scalars["ID"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type SponsorRelationResponseCollection = {
  __typename?: "SponsorRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Sponsor>
  nodes: Array<Sponsor>
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
  articles: Array<Maybe<Article>>
  articles_connection?: Maybe<ArticleRelationResponseCollection>
  /** @deprecated Use root level fields instead */
  attributes: Tag
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Tag
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  value: Scalars["String"]["output"]
}

export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type TagArticles_ConnectionArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type TagEntityResponseCollection = {
  __typename?: "TagEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Tag>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Tag>
  pageInfo: Pagination
}

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  not?: InputMaybe<TagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  value?: InputMaybe<StringFilterInput>
}

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  value?: InputMaybe<Scalars["String"]["input"]>
}

export type TagRelationResponseCollection = {
  __typename?: "TagRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Tag>
  nodes: Array<Tag>
}

export type Testimonial = {
  __typename?: "Testimonial"
  /** @deprecated Use root level fields instead */
  attributes: Testimonial
  audio?: Maybe<UploadFile>
  author?: Maybe<Player>
  content: Scalars["String"]["output"]
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Testimonial
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type TestimonialEntityResponseCollection = {
  __typename?: "TestimonialEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Testimonial>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Testimonial>
  pageInfo: Pagination
}

export type TestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>
  author?: InputMaybe<PlayerFiltersInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  not?: InputMaybe<TestimonialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type TestimonialInput = {
  audio?: InputMaybe<Scalars["ID"]["input"]>
  author?: InputMaybe<Scalars["ID"]["input"]>
  content?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
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
  /** @deprecated Use root level fields instead */
  attributes: UploadFile
  caption?: Maybe<Scalars["String"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: UploadFile
  documentId: Scalars["ID"]["output"]
  ext?: Maybe<Scalars["String"]["output"]>
  formats?: Maybe<Scalars["JSON"]["output"]>
  hash: Scalars["String"]["output"]
  height?: Maybe<Scalars["Int"]["output"]>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  mime: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
  previewUrl?: Maybe<Scalars["String"]["output"]>
  provider: Scalars["String"]["output"]
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars["Float"]["output"]
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  url: Scalars["String"]["output"]
  width?: Maybe<Scalars["Int"]["output"]>
}

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UploadFile>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<UploadFile>
  pageInfo: Pagination
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  ext?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UploadFile>
  nodes: Array<UploadFile>
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
  documentId: Scalars["ID"]["output"]
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
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsPermission
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsPermission
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  role?: Maybe<UsersPermissionsRole>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UsersPermissionsPermission>
  nodes: Array<UsersPermissionsPermission>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  username: Scalars["String"]["input"]
}

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole"
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsRole
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsRole
  description?: Maybe<Scalars["String"]["output"]>
  documentId: Scalars["ID"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  permissions: Array<Maybe<UsersPermissionsPermission>>
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  type?: Maybe<Scalars["String"]["output"]>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  users: Array<Maybe<UsersPermissionsUser>>
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UsersPermissionsRole>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<UsersPermissionsRole>
  pageInfo: Pagination
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  type?: InputMaybe<Scalars["String"]["input"]>
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload"
  ok: Scalars["Boolean"]["output"]
}

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser"
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsUser
  blocked?: Maybe<Scalars["Boolean"]["output"]>
  confirmed?: Maybe<Scalars["Boolean"]["output"]>
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsUser
  documentId: Scalars["ID"]["output"]
  email: Scalars["String"]["output"]
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  player?: Maybe<Player>
  provider?: Maybe<Scalars["String"]["output"]>
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  role?: Maybe<UsersPermissionsRole>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  username: Scalars["String"]["output"]
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse"
  data?: Maybe<UsersPermissionsUser>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UsersPermissionsUser>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<UsersPermissionsUser>
  pageInfo: Pagination
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  email?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  player?: InputMaybe<PlayerFiltersInput>
  provider?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  player?: InputMaybe<Scalars["ID"]["input"]>
  provider?: InputMaybe<Scalars["String"]["input"]>
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  role?: InputMaybe<Scalars["ID"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<UsersPermissionsUser>
  nodes: Array<UsersPermissionsUser>
}

export type Venue = {
  __typename?: "Venue"
  addressDetails?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use root level fields instead */
  attributes: Venue
  createdAt?: Maybe<Scalars["DateTime"]["output"]>
  /** @deprecated Use root level fields instead */
  data: Venue
  documentId: Scalars["ID"]["output"]
  events: Array<Maybe<Event>>
  events_connection?: Maybe<EventRelationResponseCollection>
  /** @deprecated Use `documentId` instead */
  id: Scalars["ID"]["output"]
  location?: Maybe<Scalars["JSON"]["output"]>
  logo?: Maybe<UploadFile>
  name: Scalars["String"]["output"]
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  shortName?: Maybe<Scalars["String"]["output"]>
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  website?: Maybe<Scalars["String"]["output"]>
}

export type VenueEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VenueEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VenueSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type VenueEntityResponseCollection = {
  __typename?: "VenueEntityResponseCollection"
  /** @deprecated Use `nodes` field instead */
  data: Array<Venue>
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta
  nodes: Array<Venue>
  pageInfo: Pagination
}

export type VenueFiltersInput = {
  addressDetails?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IdFilterInput>
  events?: InputMaybe<EventFiltersInput>
  location?: InputMaybe<JsonFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<VenueFiltersInput>
  or?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
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
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
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
    __typename?: "Format"
    openspace?: string | null
    lawOfTwoFeet?: string | null
    butterfly?: string | null
    bumblebee?: string | null
    schedule?: string | null
  } | null
}

export type StoryQueryVariables = Exact<{ [key: string]: never }>

export type StoryQuery = {
  __typename?: "Query"
  history?: {
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
      image: { __typename?: "UploadFile"; name: string; url: string }
    } | null> | null
  } | null
  players: Array<
    | ({ __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
      })
    | null
  >
}

export type ArticleQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type ArticleQuery = {
  __typename?: "Query"
  articles: Array<
    | ({ __typename?: "Article" } & {
        " $fragmentRefs"?: { ArticleDetailsFragment: ArticleDetailsFragment }
      })
    | null
  >
}

export type ArticleDetailsFragment = {
  __typename?: "Article"
  documentId: string
  slug: string
  title: string
  category?: Enum_Article_Category | null
  summary?: string | null
  publishedAt?: any | null
  updatedAt?: any | null
  cannonical?: string | null
  content?: string | null
  tags: Array<{ __typename?: "Tag"; value: string } | null>
  defaultImage: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
  images: Array<{
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  } | null>
  author?: {
    __typename?: "Player"
    name: string
    slug: string
    position: Enum_Player_Position
    tagline?: string | null
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
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
  articles_connection?: {
    __typename?: "ArticleEntityResponseCollection"
    nodes: Array<
      { __typename?: "Article" } & {
        " $fragmentRefs"?: { ArticleItemFragment: ArticleItemFragment }
      }
    >
    pageInfo: {
      __typename?: "Pagination"
      page: number
      pageSize: number
      total: number
      pageCount: number
    }
  } | null
}

export type ArticleItemFragment = {
  __typename?: "Article"
  documentId: string
  slug: string
  title: string
  summary?: string | null
  category?: Enum_Article_Category | null
  publishedAt?: any | null
  defaultImage: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
  author?: {
    __typename?: "Player"
    slug: string
    name: string
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    } | null
  } | null
} & { " $fragmentName"?: "ArticleItemFragment" }

export type ArticleNavQueryVariables = Exact<{ [key: string]: never }>

export type ArticleNavQuery = {
  __typename?: "Query"
  articles: Array<{
    __typename?: "Article"
    slug: string
    title: string
    category?: Enum_Article_Category | null
    publishedAt?: any | null
    tags: Array<{ __typename?: "Tag"; value: string } | null>
    defaultImage: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    }
  } | null>
}

export type ArticleSidebarQueryVariables = Exact<{ [key: string]: never }>

export type ArticleSidebarQuery = {
  __typename?: "Query"
  latest?: {
    __typename?: "ArticleEntityResponseCollection"
    nodes: Array<{
      __typename?: "Article"
      documentId: string
      slug: string
      title: string
      publishedAt?: any | null
      defaultImage: {
        __typename?: "UploadFile"
        name: string
        url: string
        width?: number | null
        height?: number | null
      }
    }>
  } | null
  categories: Array<{
    __typename?: "Article"
    category?: Enum_Article_Category | null
  } | null>
  tags: Array<{
    __typename?: "Article"
    tags: Array<{ __typename?: "Tag"; value: string } | null>
  } | null>
}

export type ArticleSlugsQueryVariables = Exact<{ [key: string]: never }>

export type ArticleSlugsQuery = {
  __typename?: "Query"
  articles: Array<{ __typename?: "Article"; slug: string } | null>
}

export type EventCalendarQueryVariables = Exact<{ [key: string]: never }>

export type EventCalendarQuery = {
  __typename?: "Query"
  events: Array<{
    __typename?: "Event"
    slug: string
    name: string
    start: any
    end: any
    status: Enum_Event_Status
    venue?: { __typename?: "Venue"; name: string } | null
  } | null>
}

export type EventQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type EventQuery = {
  __typename?: "Query"
  events: Array<
    | ({ __typename?: "Event" } & {
        " $fragmentRefs"?: { EventDetailsFragment: EventDetailsFragment }
      })
    | null
  >
}

export type EventDetailsFragment = {
  __typename?: "Event"
  documentId: string
  slug: string
  name: string
  start: any
  end: any
  timezone?: string | null
  status: Enum_Event_Status
  description?: string | null
  contactEmail?: string | null
  defaultImage: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
  images: Array<{
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  } | null>
  location?: {
    __typename?: "EventLocation"
    name: string
    country?: string | null
    location?: any | null
  } | null
  venue?: {
    __typename?: "Venue"
    name: string
    website?: string | null
    location?: any | null
    addressDetails?: string | null
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
    sponsors: Array<{
      __typename?: "Sponsor"
      name: string
      url?: string | null
      logo?: {
        __typename?: "UploadFile"
        name: string
        url: string
        width?: number | null
        height?: number | null
      } | null
      socialNetworks?: Array<{
        __typename?: "ComponentContactSocialNetwork"
        id: string
        type?: Enum_Componentcontactsocialnetwork_Type | null
        url?: string | null
      } | null> | null
    } | null>
  } | null> | null
  hosts: Array<
    | ({ __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
      })
    | null
  >
  mentors: Array<
    | ({ __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
      })
    | null
  >
  players: Array<
    | ({ __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
      })
    | null
  >
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
  events_connection?: {
    __typename?: "EventEntityResponseCollection"
    nodes: Array<
      { __typename?: "Event" } & {
        " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
      }
    >
    pageInfo: {
      __typename?: "Pagination"
      page: number
      pageSize: number
      total: number
      pageCount: number
    }
  } | null
}

export type UpcomingEventsQueryVariables = Exact<{
  today: Scalars["DateTime"]["input"]
}>

export type UpcomingEventsQuery = {
  __typename?: "Query"
  events: Array<
    | ({ __typename?: "Event" } & {
        " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
      })
    | null
  >
}

export type EventItemFragment = {
  __typename?: "Event"
  documentId: string
  slug: string
  name: string
  start: any
  end: any
  timezone?: string | null
  status: Enum_Event_Status
  defaultImage: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
  location?: {
    __typename?: "EventLocation"
    name: string
    country?: string | null
  } | null
} & { " $fragmentName"?: "EventItemFragment" }

export type HostingQueryVariables = Exact<{ [key: string]: never }>

export type HostingQuery = {
  __typename?: "Query"
  hosting?: { __typename?: "Hosting"; content?: string | null } | null
}

export type MarkersQueryVariables = Exact<{ [key: string]: never }>

export type MarkersQuery = {
  __typename?: "Query"
  events: Array<{
    __typename?: "Event"
    documentId: string
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
      __typename?: "Venue"
      name: string
      website?: string | null
      location?: any | null
    } | null
  } | null>
}

export type EventNavQueryVariables = Exact<{ [key: string]: never }>

export type EventNavQuery = {
  __typename?: "Query"
  events: Array<{
    __typename?: "Event"
    slug: string
    name: string
    start: any
    status: Enum_Event_Status
    location?: {
      __typename?: "EventLocation"
      slug?: string | null
      name: string
      country?: string | null
    } | null
    defaultImage: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    }
  } | null>
}

export type EventSlugsQueryVariables = Exact<{
  today: Scalars["DateTime"]["input"]
}>

export type EventSlugsQuery = {
  __typename?: "Query"
  events: Array<{ __typename?: "Event"; slug: string } | null>
}

export type TestimonialsQueryVariables = Exact<{ [key: string]: never }>

export type TestimonialsQuery = {
  __typename?: "Query"
  testimonials: Array<{
    __typename?: "Testimonial"
    documentId: string
    content: string
    url?: string | null
    audio?: { __typename?: "UploadFile"; name: string; url: string } | null
    author?: {
      __typename?: "Player"
      name: string
      slug: string
      tagline?: string | null
      avatar?: {
        __typename?: "UploadFile"
        name: string
        url: string
        width?: number | null
        height?: number | null
      } | null
    } | null
  } | null>
}

export type GameQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type GameQuery = {
  __typename?: "Query"
  games: Array<
    | ({ __typename?: "Game" } & {
        " $fragmentRefs"?: { GameDetailsFragment: GameDetailsFragment }
      })
    | null
  >
}

export type GameDetailsFragment = {
  __typename?: "Game"
  documentId: string
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
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
  images: Array<{
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  } | null>
  resources: Array<{
    __typename?: "UploadFile"
    name: string
    url: string
  } | null>
  firstPlayedAt?: { __typename?: "Event"; name: string; slug: string } | null
  documentedBy: Array<{
    __typename?: "Player"
    name: string
    slug: string
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    } | null
  } | null>
  proposedBy: Array<{
    __typename?: "Player"
    name: string
    slug: string
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    } | null
  } | null>
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
  games_connection?: {
    __typename?: "GameEntityResponseCollection"
    nodes: Array<
      { __typename?: "Game" } & {
        " $fragmentRefs"?: { GameItemFragment: GameItemFragment }
      }
    >
    pageInfo: {
      __typename?: "Pagination"
      page: number
      pageSize: number
      total: number
      pageCount: number
    }
  } | null
}

export type GameItemFragment = {
  __typename?: "Game"
  documentId: string
  slug: string
  name: string
  summary?: string | null
  timebox?: string | null
  scale?: string | null
  category: Enum_Game_Category
  proposedBy: Array<{
    __typename?: "Player"
    name: string
    slug: string
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    } | null
  } | null>
  defaultImage: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  }
} & { " $fragmentName"?: "GameItemFragment" }

export type GameNavQueryVariables = Exact<{ [key: string]: never }>

export type GameNavQuery = {
  __typename?: "Query"
  games: Array<{
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
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    }
  } | null>
}

export type GameSlugsQueryVariables = Exact<{ [key: string]: never }>

export type GameSlugsQuery = {
  __typename?: "Query"
  games: Array<{ __typename?: "Game"; slug: string } | null>
}

export type ExpectationsQueryVariables = Exact<{
  type: Scalars["String"]["input"]
}>

export type ExpectationsQuery = {
  __typename?: "Query"
  expectations: Array<{
    __typename?: "Expectation"
    title: string
    type: Enum_Expectation_Type
    icon: string
    content: string
  } | null>
}

export type HomeQueryVariables = Exact<{ [key: string]: never }>

export type HomeQuery = {
  __typename?: "Query"
  home?: {
    __typename?: "Home"
    images: Array<{
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
      hash: string
      mime: string
      provider: string
      size: number
    } | null>
  } | null
}

export type PlayerQueryVariables = Exact<{
  slug: Scalars["String"]["input"]
}>

export type PlayerQuery = {
  __typename?: "Query"
  players: Array<
    | ({ __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerDetailsFragment: PlayerDetailsFragment }
      })
    | null
  >
}

export type PlayerDetailsFragment = {
  __typename?: "Player"
  documentId: string
  slug: string
  name: string
  position: Enum_Player_Position
  company?: string | null
  tagline?: string | null
  bio?: string | null
  website?: string | null
  location?: any | null
  avatar?: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
  } | null
  socialNetworks?: Array<{
    __typename?: "ComponentContactSocialNetwork"
    id: string
    url?: string | null
    type?: Enum_Componentcontactsocialnetwork_Type | null
  } | null> | null
  attended: Array<
    | ({ __typename?: "Event" } & {
        " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
      })
    | null
  >
  hosted: Array<
    | ({ __typename?: "Event" } & {
        " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
      })
    | null
  >
  mentored: Array<
    | ({ __typename?: "Event" } & {
        " $fragmentRefs"?: { EventItemFragment: EventItemFragment }
      })
    | null
  >
} & { " $fragmentName"?: "PlayerDetailsFragment" }

export type PlayersQueryVariables = Exact<{
  page: Scalars["Int"]["input"]
  pageSize: Scalars["Int"]["input"]
  position?: InputMaybe<Scalars["String"]["input"]>
}>

export type PlayersQuery = {
  __typename?: "Query"
  players_connection?: {
    __typename?: "PlayerEntityResponseCollection"
    nodes: Array<
      { __typename?: "Player" } & {
        " $fragmentRefs"?: { PlayerItemFragment: PlayerItemFragment }
      }
    >
    pageInfo: {
      __typename?: "Pagination"
      page: number
      pageSize: number
      total: number
      pageCount: number
    }
  } | null
}

export type PlayerItemFragment = {
  __typename?: "Player"
  documentId: string
  slug: string
  name: string
  position: Enum_Player_Position
  avatar?: {
    __typename?: "UploadFile"
    name: string
    url: string
    width?: number | null
    height?: number | null
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
  players: Array<{
    __typename?: "Player"
    slug: string
    name: string
    position: Enum_Player_Position
    updatedAt?: any | null
    avatar?: {
      __typename?: "UploadFile"
      name: string
      url: string
      width?: number | null
      height?: number | null
    } | null
  } | null>
}

export type PlayerSlugsQueryVariables = Exact<{ [key: string]: never }>

export type PlayerSlugsQuery = {
  __typename?: "Query"
  players: Array<{ __typename?: "Player"; slug: string } | null>
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
      nodes: Array<{
        __typename?: "Event"
        documentId: string
        slug: string
        name: string
        start: any
        end: any
        timezone?: string | null
        status: Enum_Event_Status
        publishedAt?: any | null
        defaultImage: {
          __typename?: "UploadFile"
          name: string
          url: string
          width?: number | null
          height?: number | null
        }
        location?: {
          __typename?: "EventLocation"
          name: string
          country?: string | null
        } | null
      }>
    } | null
    articles?: {
      __typename?: "ArticleEntityResponseCollection"
      nodes: Array<{
        __typename?: "Article"
        documentId: string
        slug: string
        title: string
        summary?: string | null
        category?: Enum_Article_Category | null
        publishedAt?: any | null
        defaultImage: {
          __typename?: "UploadFile"
          name: string
          url: string
          width?: number | null
          height?: number | null
        }
        author?: {
          __typename?: "Player"
          slug: string
          name: string
          avatar?: {
            __typename?: "UploadFile"
            name: string
            url: string
            width?: number | null
            height?: number | null
          } | null
        } | null
      }>
    } | null
    games?: {
      __typename?: "GameEntityResponseCollection"
      nodes: Array<{
        __typename?: "Game"
        documentId: string
        slug: string
        name: string
        summary?: string | null
        timebox?: string | null
        scale?: string | null
        category: Enum_Game_Category
        publishedAt?: any | null
        proposedBy: Array<{
          __typename?: "Player"
          name: string
          slug: string
          avatar?: {
            __typename?: "UploadFile"
            name: string
            url: string
            width?: number | null
            height?: number | null
          } | null
        } | null>
        defaultImage: {
          __typename?: "UploadFile"
          name: string
          url: string
          width?: number | null
          height?: number | null
        }
      }>
    } | null
    players?: {
      __typename?: "PlayerEntityResponseCollection"
      nodes: Array<{
        __typename?: "Player"
        documentId: string
        slug: string
        name: string
        position: Enum_Player_Position
        publishedAt?: any | null
        avatar?: {
          __typename?: "UploadFile"
          name: string
          url: string
          width?: number | null
          height?: number | null
        } | null
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "position" } },
                { kind: "Field", name: { kind: "Name", value: "tagline" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "venue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "website" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addressDetails" },
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
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "logo" },
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
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "hosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
          {
            kind: "Field",
            name: { kind: "Name", value: "mentors" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "resources" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "firstPlayedAt" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "documentedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
            ],
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
            ],
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
            ],
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
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
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
                { kind: "Field", name: { kind: "Name", value: "openspace" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lawOfTwoFeet" },
                },
                { kind: "Field", name: { kind: "Name", value: "butterfly" } },
                { kind: "Field", name: { kind: "Name", value: "bumblebee" } },
                { kind: "Field", name: { kind: "Name", value: "schedule" } },
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
                { kind: "Field", name: { kind: "Name", value: "founders" } },
                { kind: "Field", name: { kind: "Name", value: "keyMoments" } },
                { kind: "Field", name: { kind: "Name", value: "intro" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dateFormat" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "additionalText" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
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
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlayerItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Player" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ArticleDetails" },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "position" } },
                { kind: "Field", name: { kind: "Name", value: "tagline" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
            name: { kind: "Name", value: "articles_connection" },
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
                  name: { kind: "Name", value: "nodes" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageSize" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
            name: { kind: "Name", value: "articles_connection" },
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
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "documentId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
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
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
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
            alias: { kind: "Name", value: "categories" },
            name: { kind: "Name", value: "articles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "category" } },
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
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "value" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
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
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "start" } },
                { kind: "Field", name: { kind: "Name", value: "end" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "venue" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EventDetails" },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "venue" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "website" } },
                { kind: "Field", name: { kind: "Name", value: "location" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addressDetails" },
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
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "logo" },
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
                              name: { kind: "Name", value: "width" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "height" },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "hosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
          {
            kind: "Field",
            name: { kind: "Name", value: "mentors" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
          {
            kind: "Field",
            name: { kind: "Name", value: "players" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "StringValue", value: "name", block: false },
              },
            ],
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
            name: { kind: "Name", value: "events_connection" },
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
                  name: { kind: "Name", value: "nodes" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageSize" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
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
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
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
                { kind: "Field", name: { kind: "Name", value: "content" } },
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
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "documentId" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "start" } },
                { kind: "Field", name: { kind: "Name", value: "end" } },
                { kind: "Field", name: { kind: "Name", value: "timezone" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "registration" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "link" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "venue" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "website" },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "start" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "location" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "country" },
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
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "documentId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "audio" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
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
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "GameDetails" },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "resources" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "firstPlayedAt" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "documentedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "proposedBy" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
            name: { kind: "Name", value: "games_connection" },
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
                  name: { kind: "Name", value: "nodes" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageSize" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
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
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "icon" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
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
                  name: { kind: "Name", value: "images" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "hash" } },
                      { kind: "Field", name: { kind: "Name", value: "mime" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "provider" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "size" } },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PlayerDetails" },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
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
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
            ],
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
            ],
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
            ],
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
            name: { kind: "Name", value: "players_connection" },
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
                  name: { kind: "Name", value: "nodes" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageSize" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "total" } },
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
          { kind: "Field", name: { kind: "Name", value: "documentId" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "position" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "avatar" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "position" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
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
                      value: { kind: "IntValue", value: "5000" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
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
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "documentId" },
                            },
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
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "location" },
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
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "documentId" },
                            },
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
                              name: { kind: "Name", value: "summary" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
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
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "author" },
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
                                          name: { kind: "Name", value: "name" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
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
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "documentId" },
                            },
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
                              name: { kind: "Name", value: "summary" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timebox" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "scale" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publishedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "proposedBy" },
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
                                          name: { kind: "Name", value: "name" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "defaultImage" },
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
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "documentId" },
                            },
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
                              name: { kind: "Name", value: "publishedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
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
      },
    },
  ],
} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>
