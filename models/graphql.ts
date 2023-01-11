/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  eqi?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type ComponentContactSocialNetwork = {
  __typename?: "ComponentContactSocialNetwork";
  id: Scalars["ID"];
  type?: Maybe<Enum_Componentcontactsocialnetwork_Type>;
  url?: Maybe<Scalars["String"]>;
};

export type ComponentContactSocialNetworkFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkFiltersInput>>
  >;
  not?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactSocialNetworkFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentContactSocialNetworkInput = {
  id?: InputMaybe<Scalars["ID"]>;
  type?: InputMaybe<Enum_Componentcontactsocialnetwork_Type>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ComponentEventsMedia = {
  __typename?: "ComponentEventsMedia";
  id: Scalars["ID"];
  type: Enum_Componenteventsmedia_Type;
  url: Scalars["String"];
};

export type ComponentEventsMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsMediaFiltersInput>>>;
  not?: InputMaybe<ComponentEventsMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsMediaFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentEventsMediaInput = {
  id?: InputMaybe<Scalars["ID"]>;
  type?: InputMaybe<Enum_Componenteventsmedia_Type>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ComponentEventsSponsorship = {
  __typename?: "ComponentEventsSponsorship";
  category?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  sponsors?: Maybe<SponsorRelationResponseCollection>;
};

export type ComponentEventsSponsorshipSponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentEventsSponsorshipFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventsSponsorshipFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipFiltersInput>>>;
  sponsors?: InputMaybe<SponsorFiltersInput>;
};

export type ComponentEventsSponsorshipInput = {
  category?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type ComponentEventsTimeSlots = {
  __typename?: "ComponentEventsTimeSlots";
  description: Scalars["String"];
  id: Scalars["ID"];
  time: Scalars["Time"];
};

export type ComponentEventsTimeSlotsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsFiltersInput>>>;
  time?: InputMaybe<TimeFilterInput>;
};

export type ComponentEventsTimeSlotsInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  time?: InputMaybe<Scalars["Time"]>;
};

export type ComponentEventsTimetable = {
  __typename?: "ComponentEventsTimetable";
  day: Enum_Componenteventstimetable_Day;
  description: Scalars["String"];
  id: Scalars["ID"];
  timeslots?: Maybe<Array<Maybe<ComponentEventsTimeSlots>>>;
};

export type ComponentEventsTimetableTimeslotsArgs = {
  filters?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentEventsTimetableFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableFiltersInput>>>;
  day?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventsTimetableFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableFiltersInput>>>;
  timeslots?: InputMaybe<ComponentEventsTimeSlotsFiltersInput>;
};

export type ComponentEventsTimetableInput = {
  day?: InputMaybe<Enum_Componenteventstimetable_Day>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  timeslots?: InputMaybe<Array<InputMaybe<ComponentEventsTimeSlotsInput>>>;
};

export type ComponentLocationAddress = {
  __typename?: "ComponentLocationAddress";
  area?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  id: Scalars["ID"];
  postalCode?: Maybe<Scalars["String"]>;
  street: Scalars["String"];
};

export type ComponentLocationAddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationAddressFiltersInput>>>;
  area?: InputMaybe<StringFilterInput>;
  city?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocationAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationAddressFiltersInput>>>;
  postalCode?: InputMaybe<StringFilterInput>;
  street?: InputMaybe<StringFilterInput>;
};

export type ComponentLocationAddressInput = {
  area?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
};

export type ComponentRegistrationRegistration = {
  __typename?: "ComponentRegistrationRegistration";
  id: Scalars["ID"];
  link?: Maybe<Scalars["String"]>;
  widgetCode?: Maybe<Scalars["String"]>;
};

export type ComponentRegistrationRegistrationFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentRegistrationRegistrationFiltersInput>>
  >;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentRegistrationRegistrationFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentRegistrationRegistrationFiltersInput>>
  >;
  widgetCode?: InputMaybe<StringFilterInput>;
};

export type ComponentRegistrationRegistrationInput = {
  id?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  widgetCode?: InputMaybe<Scalars["String"]>;
};

export type ComponentSharedMetaSocial = {
  __typename?: "ComponentSharedMetaSocial";
  description: Scalars["String"];
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars["String"];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeo = {
  __typename?: "ComponentSharedSeo";
  canonicalURL?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  keywords?: Maybe<Scalars["String"]>;
  metaDescription: Scalars["String"];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars["String"]>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars["String"];
  metaViewport?: Maybe<Scalars["String"]>;
  structuredData?: Maybe<Scalars["JSON"]>;
};

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  eqi?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
};

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

export enum Enum_Player_Position {
  Founder = "Founder",
  Host = "Host",
  Mentor = "Mentor",
  Player = "Player",
}

export type Event = {
  __typename?: "Event";
  contactEmail?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  end: Scalars["DateTime"];
  hosts?: Maybe<PlayerRelationResponseCollection>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<EventRelationResponseCollection>;
  location?: Maybe<EventLocationEntityResponse>;
  media?: Maybe<Array<Maybe<ComponentEventsMedia>>>;
  mentors?: Maybe<PlayerRelationResponseCollection>;
  name: Scalars["String"];
  players?: Maybe<PlayerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  registration?: Maybe<ComponentRegistrationRegistration>;
  slug: Scalars["String"];
  sponsorships?: Maybe<Array<Maybe<ComponentEventsSponsorship>>>;
  start: Scalars["DateTime"];
  status?: Maybe<Enum_Event_Status>;
  timetable?: Maybe<Array<Maybe<ComponentEventsTimetable>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  venue?: Maybe<VenueEntityResponse>;
};

export type EventHostsArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventLocalizationsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventMediaArgs = {
  filters?: InputMaybe<ComponentEventsMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventMentorsArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventSponsorshipsArgs = {
  filters?: InputMaybe<ComponentEventsSponsorshipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventTimetableArgs = {
  filters?: InputMaybe<ComponentEventsTimetableFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventEntity = {
  __typename?: "EventEntity";
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars["ID"]>;
};

export type EventEntityResponse = {
  __typename?: "EventEntityResponse";
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: "EventEntityResponseCollection";
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  contactEmail?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end?: InputMaybe<DateTimeFilterInput>;
  hosts?: InputMaybe<PlayerFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventFiltersInput>;
  location?: InputMaybe<EventLocationFiltersInput>;
  media?: InputMaybe<ComponentEventsMediaFiltersInput>;
  mentors?: InputMaybe<PlayerFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  players?: InputMaybe<PlayerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  registration?: InputMaybe<ComponentRegistrationRegistrationFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  sponsorships?: InputMaybe<ComponentEventsSponsorshipFiltersInput>;
  start?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  timetable?: InputMaybe<ComponentEventsTimetableFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  venue?: InputMaybe<VenueFiltersInput>;
};

export type EventInput = {
  contactEmail?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  end?: InputMaybe<Scalars["DateTime"]>;
  hosts?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  location?: InputMaybe<Scalars["ID"]>;
  media?: InputMaybe<Array<InputMaybe<ComponentEventsMediaInput>>>;
  mentors?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  players?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  registration?: InputMaybe<ComponentRegistrationRegistrationInput>;
  slug?: InputMaybe<Scalars["String"]>;
  sponsorships?: InputMaybe<Array<InputMaybe<ComponentEventsSponsorshipInput>>>;
  start?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Event_Status>;
  timetable?: InputMaybe<Array<InputMaybe<ComponentEventsTimetableInput>>>;
  venue?: InputMaybe<Scalars["ID"]>;
};

export type EventLocation = {
  __typename?: "EventLocation";
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  events?: Maybe<EventRelationResponseCollection>;
  name: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EventLocationEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventLocationEntity = {
  __typename?: "EventLocationEntity";
  attributes?: Maybe<EventLocation>;
  id?: Maybe<Scalars["ID"]>;
};

export type EventLocationEntityResponse = {
  __typename?: "EventLocationEntityResponse";
  data?: Maybe<EventLocationEntity>;
};

export type EventLocationEntityResponseCollection = {
  __typename?: "EventLocationEntityResponseCollection";
  data: Array<EventLocationEntity>;
  meta: ResponseCollectionMeta;
};

export type EventLocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventLocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventLocationFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventLocationInput = {
  country?: InputMaybe<Scalars["String"]>;
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type EventRelationResponseCollection = {
  __typename?: "EventRelationResponseCollection";
  data: Array<EventEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  eqi?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
};

export type GenericMorph =
  | ComponentContactSocialNetwork
  | ComponentEventsMedia
  | ComponentEventsSponsorship
  | ComponentEventsTimeSlots
  | ComponentEventsTimetable
  | ComponentLocationAddress
  | ComponentRegistrationRegistration
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | Event
  | EventLocation
  | I18NLocale
  | Player
  | Sponsor
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Venue;

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  eqi?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  eqi?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  eqi?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventLocalization?: Maybe<EventEntityResponse>;
  createEventLocation?: Maybe<EventLocationEntityResponse>;
  createPlayer?: Maybe<PlayerEntityResponse>;
  createSponsor?: Maybe<SponsorEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVenue?: Maybe<VenueEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventLocation?: Maybe<EventLocationEntityResponse>;
  deletePlayer?: Maybe<PlayerEntityResponse>;
  deleteSponsor?: Maybe<SponsorEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVenue?: Maybe<VenueEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventLocation?: Maybe<EventLocationEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePlayer?: Maybe<PlayerEntityResponse>;
  updateSponsor?: Maybe<SponsorEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVenue?: Maybe<VenueEntityResponse>;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationCreateEventArgs = {
  data: EventInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateEventLocalizationArgs = {
  data?: InputMaybe<EventInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateEventLocationArgs = {
  data: EventLocationInput;
};

export type MutationCreatePlayerArgs = {
  data: PlayerInput;
};

export type MutationCreateSponsorArgs = {
  data: SponsorInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateVenueArgs = {
  data: VenueInput;
};

export type MutationDeleteEventArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeleteEventLocationArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePlayerArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSponsorArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteVenueArgs = {
  id: Scalars["ID"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateEventLocationArgs = {
  data: EventLocationInput;
  id: Scalars["ID"];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdatePlayerArgs = {
  data: PlayerInput;
  id: Scalars["ID"];
};

export type MutationUpdateSponsorArgs = {
  data: SponsorInput;
  id: Scalars["ID"];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUpdateVenueArgs = {
  data: VenueInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export type Player = {
  __typename?: "Player";
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  events?: Maybe<EventRelationResponseCollection>;
  hosted?: Maybe<EventRelationResponseCollection>;
  mentored?: Maybe<EventRelationResponseCollection>;
  name: Scalars["String"];
  position?: Maybe<Enum_Player_Position>;
  slug?: Maybe<Scalars["String"]>;
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>;
  tagline?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type PlayerEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PlayerHostedArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PlayerMentoredArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PlayerSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PlayerEntity = {
  __typename?: "PlayerEntity";
  attributes?: Maybe<Player>;
  id?: Maybe<Scalars["ID"]>;
};

export type PlayerEntityResponse = {
  __typename?: "PlayerEntityResponse";
  data?: Maybe<PlayerEntity>;
};

export type PlayerEntityResponseCollection = {
  __typename?: "PlayerEntityResponseCollection";
  data: Array<PlayerEntity>;
  meta: ResponseCollectionMeta;
};

export type PlayerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  company?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  hosted?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  mentored?: InputMaybe<EventFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PlayerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  tagline?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PlayerInput = {
  avatar?: InputMaybe<Scalars["ID"]>;
  bio?: InputMaybe<Scalars["String"]>;
  company?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  hosted?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  mentored?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Enum_Player_Position>;
  slug?: InputMaybe<Scalars["String"]>;
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >;
  tagline?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["ID"]>;
};

export type PlayerRelationResponseCollection = {
  __typename?: "PlayerRelationResponseCollection";
  data: Array<PlayerEntity>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  event?: Maybe<EventEntityResponse>;
  eventLocation?: Maybe<EventLocationEntityResponse>;
  eventLocations?: Maybe<EventLocationEntityResponseCollection>;
  events?: Maybe<EventEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  player?: Maybe<PlayerEntityResponse>;
  players?: Maybe<PlayerEntityResponseCollection>;
  sponsor?: Maybe<SponsorEntityResponse>;
  sponsors?: Maybe<SponsorEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  venue?: Maybe<VenueEntityResponse>;
  venues?: Maybe<VenueEntityResponseCollection>;
};

export type QueryEventArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryEventLocationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEventLocationsArgs = {
  filters?: InputMaybe<EventLocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySponsorArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySponsorsArgs = {
  filters?: InputMaybe<SponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryVenueArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryVenuesArgs = {
  filters?: InputMaybe<VenueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type Sponsor = {
  __typename?: "Sponsor";
  createdAt?: Maybe<Scalars["DateTime"]>;
  logo?: Maybe<UploadFileEntityResponse>;
  name: Scalars["String"];
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SponsorSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SponsorEntity = {
  __typename?: "SponsorEntity";
  attributes?: Maybe<Sponsor>;
  id?: Maybe<Scalars["ID"]>;
};

export type SponsorEntityResponse = {
  __typename?: "SponsorEntityResponse";
  data?: Maybe<SponsorEntity>;
};

export type SponsorEntityResponseCollection = {
  __typename?: "SponsorEntityResponseCollection";
  data: Array<SponsorEntity>;
  meta: ResponseCollectionMeta;
};

export type SponsorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SponsorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SponsorFiltersInput>>>;
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type SponsorInput = {
  logo?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >;
  url?: InputMaybe<Scalars["String"]>;
};

export type SponsorRelationResponseCollection = {
  __typename?: "SponsorRelationResponseCollection";
  data: Array<SponsorEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  eqi?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>;
  contains?: InputMaybe<Scalars["Time"]>;
  containsi?: InputMaybe<Scalars["Time"]>;
  endsWith?: InputMaybe<Scalars["Time"]>;
  eq?: InputMaybe<Scalars["Time"]>;
  eqi?: InputMaybe<Scalars["Time"]>;
  gt?: InputMaybe<Scalars["Time"]>;
  gte?: InputMaybe<Scalars["Time"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  ne?: InputMaybe<Scalars["Time"]>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars["Time"]>;
  notContainsi?: InputMaybe<Scalars["Time"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Time"]>>>;
  startsWith?: InputMaybe<Scalars["Time"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  folder?: InputMaybe<Scalars["ID"]>;
  folderPath?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: "UploadFolder";
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars["String"];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars["String"];
  pathId: Scalars["Int"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity";
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse";
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection";
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<Scalars["ID"]>;
  path?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Int"]>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection";
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  player?: Maybe<PlayerEntityResponse>;
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  player?: InputMaybe<PlayerFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  player?: InputMaybe<Scalars["ID"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type Venue = {
  __typename?: "Venue";
  address?: Maybe<ComponentLocationAddress>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  embeddedMapUrl?: Maybe<Scalars["String"]>;
  events?: Maybe<EventRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars["String"]>;
  shortName?: Maybe<Scalars["String"]>;
  socialNetworks?: Maybe<Array<Maybe<ComponentContactSocialNetwork>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  website?: Maybe<Scalars["String"]>;
};

export type VenueEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type VenueSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type VenueEntity = {
  __typename?: "VenueEntity";
  attributes?: Maybe<Venue>;
  id?: Maybe<Scalars["ID"]>;
};

export type VenueEntityResponse = {
  __typename?: "VenueEntityResponse";
  data?: Maybe<VenueEntity>;
};

export type VenueEntityResponseCollection = {
  __typename?: "VenueEntityResponseCollection";
  data: Array<VenueEntity>;
  meta: ResponseCollectionMeta;
};

export type VenueFiltersInput = {
  address?: InputMaybe<ComponentLocationAddressFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  embeddedMapUrl?: InputMaybe<StringFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VenueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VenueFiltersInput>>>;
  shortName?: InputMaybe<StringFilterInput>;
  socialNetworks?: InputMaybe<ComponentContactSocialNetworkFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type VenueInput = {
  address?: InputMaybe<ComponentLocationAddressInput>;
  country?: InputMaybe<Scalars["String"]>;
  embeddedMapUrl?: InputMaybe<Scalars["String"]>;
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  logo?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  shortName?: InputMaybe<Scalars["String"]>;
  socialNetworks?: InputMaybe<
    Array<InputMaybe<ComponentContactSocialNetworkInput>>
  >;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventItemFragment = {
  __typename?: "Event";
  slug: string;
  name: string;
  start: any;
  end: any;
  status?: Enum_Event_Status | null;
  images?: {
    __typename?: "UploadFileRelationResponseCollection";
    data: Array<{
      __typename?: "UploadFileEntity";
      attributes?: {
        __typename?: "UploadFile";
        name: string;
        url: string;
      } | null;
    }>;
  } | null;
  location?: {
    __typename?: "EventLocationEntityResponse";
    data?: {
      __typename?: "EventLocationEntity";
      attributes?: {
        __typename?: "EventLocation";
        name: string;
        country?: string | null;
      } | null;
    } | null;
  } | null;
} & { " $fragmentName"?: "EventItemFragment" };

export type EventsQueryVariables = Exact<{ [key: string]: never }>;

export type EventsQuery = {
  __typename?: "Query";
  events?: {
    __typename?: "EventEntityResponseCollection";
    data: Array<{
      __typename?: "EventEntity";
      id?: string | null;
      attributes?:
        | ({ __typename?: "Event" } & {
            " $fragmentRefs"?: { EventItemFragment: EventItemFragment };
          })
        | null;
    }>;
  } | null;
};

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
          { kind: "Field", name: { kind: "Name", value: "status" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
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
} as unknown as DocumentNode<EventItemFragment, unknown>;
export const EventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Events" },
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
                      value: { kind: "IntValue", value: "9" },
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
    ...EventItemFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
