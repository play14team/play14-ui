/* eslint-disable */
import * as types from "./graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "query Format {\n  format {\n    openspace\n    lawOfTwoFeet\n    butterfly\n    bumblebee\n    schedule\n  }\n}": typeof types.FormatDocument
  'query Story {\n  history {\n    founders\n    keyMoments\n    intro\n    items {\n      id\n      date\n      dateFormat\n      additionalText\n      title\n      description\n      image {\n        name\n        url\n      }\n    }\n  }\n  players(sort: "name:asc", filters: {position: {eq: "Founder"}}) {\n    ...PlayerItem\n  }\n}': typeof types.StoryDocument
  "query Article($slug: String!) {\n  articles(filters: {slug: {eq: $slug}}) {\n    ...ArticleDetails\n  }\n}\n\nfragment ArticleDetails on Article {\n  documentId\n  slug\n  title\n  category\n  summary\n  publishedAt\n  updatedAt\n  cannonical\n  tags {\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  author {\n    name\n    slug\n    position\n    tagline\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  content\n}": typeof types.ArticleDocument
  'query Articles($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  articles_connection(\n    sort: "publishedAt:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...ArticleItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment ArticleItem on Article {\n  documentId\n  slug\n  title\n  summary\n  category\n  publishedAt\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  author {\n    slug\n    name\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}': typeof types.ArticlesDocument
  'query ArticleNav {\n  articles(sort: "publishedAt:desc", pagination: {limit: 5000}) {\n    slug\n    title\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}': typeof types.ArticleNavDocument
  'query ArticleSidebar {\n  latest: articles_connection(sort: "publishedAt:desc", pagination: {limit: 3}) {\n    nodes {\n      documentId\n      slug\n      title\n      publishedAt\n      defaultImage {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n  categories: articles {\n    category\n  }\n  tags: articles {\n    tags {\n      value\n    }\n  }\n}': typeof types.ArticleSidebarDocument
  "query ArticleSlugs {\n  articles(pagination: {limit: 5000}) {\n    slug\n  }\n}": typeof types.ArticleSlugsDocument
  'query EventCalendar {\n  events(sort: "start:desc") {\n    slug\n    name\n    start\n    end\n    status\n    venue {\n      name\n    }\n  }\n}': typeof types.EventCalendarDocument
  'query Event($slug: String!) {\n  events(filters: {slug: {eq: $slug}}) {\n    ...EventDetails\n  }\n}\n\nfragment EventDetails on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  description\n  contactEmail\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n    location\n  }\n  venue {\n    name\n    website\n    location\n    addressDetails\n  }\n  timetable {\n    id\n    day\n    description\n    timeslots {\n      id\n      time\n      description\n    }\n  }\n  registration {\n    link\n    widgetCode\n  }\n  sponsorships {\n    id\n    category\n    sponsors {\n      name\n      url\n      logo {\n        name\n        url\n        width\n        height\n      }\n      socialNetworks {\n        id\n        type\n        url\n      }\n    }\n  }\n  hosts(sort: "name") {\n    ...PlayerItem\n  }\n  mentors(sort: "name") {\n    ...PlayerItem\n  }\n  players(sort: "name") {\n    ...PlayerItem\n  }\n  media {\n    id\n    url\n    type\n  }\n}': typeof types.EventDocument
  'query Events($page: Int!, $pageSize: Int!, $status: String, $location: String, $country: String) {\n  events_connection(\n    sort: "start:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {status: {eqi: $status}, location: {slug: {eqi: $location}, country: {eqi: $country}}}\n  ) {\n    nodes {\n      ...EventItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nquery UpcomingEvents($today: DateTime!) {\n  events(sort: "start:asc", filters: {end: {gte: $today}}) {\n    ...EventItem\n  }\n}\n\nfragment EventItem on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n  }\n}': typeof types.EventsDocument
  "query Hosting {\n  hosting {\n    content\n  }\n}": typeof types.HostingDocument
  'query Markers {\n  events(\n    sort: "start:asc"\n    filters: {status: {ne: "Cancelled"}, venue: {location: {ne: {}}}}\n    pagination: {limit: 5000}\n  ) {\n    documentId\n    slug\n    name\n    start\n    end\n    timezone\n    status\n    registration {\n      link\n    }\n    venue {\n      name\n      website\n      location\n    }\n  }\n}': typeof types.MarkersDocument
  'query EventNav {\n  events(sort: "start:desc", pagination: {limit: 5000}) {\n    slug\n    name\n    start\n    status\n    location {\n      slug\n      name\n      country\n    }\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}': typeof types.EventNavDocument
  "query EventSlugs($today: DateTime!) {\n  events(filters: {end: {lt: $today}}, pagination: {limit: 5000}) {\n    slug\n  }\n}": typeof types.EventSlugsDocument
  "query Testimonials {\n  testimonials(pagination: {limit: 5000}) {\n    documentId\n    content\n    url\n    audio {\n      name\n      url\n    }\n    author {\n      name\n      slug\n      tagline\n      avatar {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n}": typeof types.TestimonialsDocument
  "query Game($slug: String!) {\n  games(filters: {slug: {eq: $slug}}) {\n    ...GameDetails\n  }\n}\n\nfragment GameDetails on Game {\n  documentId\n  slug\n  name\n  category\n  scale\n  timebox\n  summary\n  credits\n  description\n  publishedAt\n  tags {\n    id\n    value\n  }\n  materials {\n    id\n    value\n  }\n  preparationSteps {\n    id\n    value\n  }\n  safety {\n    id\n    key\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  resources {\n    name\n    url\n  }\n  firstPlayedAt {\n    name\n    slug\n  }\n  documentedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  ratings {\n    energy\n    connection\n    silliness\n  }\n}": typeof types.GameDocument
  'query Games($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  games_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...GameItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment GameItem on Game {\n  documentId\n  slug\n  name\n  summary\n  timebox\n  scale\n  category\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n}': typeof types.GamesDocument
  'query GameNav {\n  games(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}': typeof types.GameNavDocument
  "query GameSlugs {\n  games(pagination: {limit: 5000}) {\n    slug\n  }\n}": typeof types.GameSlugsDocument
  "query Expectations($type: String!) {\n  expectations(filters: {type: {eq: $type}}) {\n    title\n    type\n    icon\n    content\n  }\n}": typeof types.ExpectationsDocument
  "query Home {\n  home {\n    images {\n      name\n      url\n      width\n      height\n      hash\n      mime\n      provider\n      size\n    }\n  }\n}": typeof types.HomeDocument
  'query Player($slug: String!) {\n  players(filters: {slug: {eq: $slug}}) {\n    ...PlayerDetails\n  }\n}\n\nfragment PlayerDetails on Player {\n  documentId\n  slug\n  name\n  position\n  company\n  tagline\n  bio\n  website\n  location\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n  attended(sort: "start:desc") {\n    ...EventItem\n  }\n  hosted(sort: "start:desc") {\n    ...EventItem\n  }\n  mentored(sort: "start:desc") {\n    ...EventItem\n  }\n}': typeof types.PlayerDocument
  'query Players($page: Int!, $pageSize: Int!, $position: String) {\n  players_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {position: {eqi: $position}}\n  ) {\n    nodes {\n      ...PlayerItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment PlayerItem on Player {\n  documentId\n  slug\n  name\n  position\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n}': typeof types.PlayersDocument
  'query PlayerNav {\n  players(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    position\n    updatedAt\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}': typeof types.PlayerNavDocument
  "query PlayerSlugs {\n  players(pagination: {limit: 5000}) {\n    slug\n  }\n}": typeof types.PlayerSlugsDocument
  "query Search($input: String!) {\n  search(query: $input) {\n    events(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        start\n        end\n        timezone\n        status\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        location {\n          name\n          country\n        }\n      }\n    }\n    articles(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        title\n        summary\n        category\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        author {\n          slug\n          name\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    games(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        summary\n        timebox\n        scale\n        category\n        publishedAt\n        proposedBy {\n          name\n          slug\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n    players(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        position\n        publishedAt\n        avatar {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n  }\n}": typeof types.SearchDocument
}
const documents: Documents = {
  "query Format {\n  format {\n    openspace\n    lawOfTwoFeet\n    butterfly\n    bumblebee\n    schedule\n  }\n}":
    types.FormatDocument,
  'query Story {\n  history {\n    founders\n    keyMoments\n    intro\n    items {\n      id\n      date\n      dateFormat\n      additionalText\n      title\n      description\n      image {\n        name\n        url\n      }\n    }\n  }\n  players(sort: "name:asc", filters: {position: {eq: "Founder"}}) {\n    ...PlayerItem\n  }\n}':
    types.StoryDocument,
  "query Article($slug: String!) {\n  articles(filters: {slug: {eq: $slug}}) {\n    ...ArticleDetails\n  }\n}\n\nfragment ArticleDetails on Article {\n  documentId\n  slug\n  title\n  category\n  summary\n  publishedAt\n  updatedAt\n  cannonical\n  tags {\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  author {\n    name\n    slug\n    position\n    tagline\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  content\n}":
    types.ArticleDocument,
  'query Articles($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  articles_connection(\n    sort: "publishedAt:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...ArticleItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment ArticleItem on Article {\n  documentId\n  slug\n  title\n  summary\n  category\n  publishedAt\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  author {\n    slug\n    name\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}':
    types.ArticlesDocument,
  'query ArticleNav {\n  articles(sort: "publishedAt:desc", pagination: {limit: 5000}) {\n    slug\n    title\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}':
    types.ArticleNavDocument,
  'query ArticleSidebar {\n  latest: articles_connection(sort: "publishedAt:desc", pagination: {limit: 3}) {\n    nodes {\n      documentId\n      slug\n      title\n      publishedAt\n      defaultImage {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n  categories: articles {\n    category\n  }\n  tags: articles {\n    tags {\n      value\n    }\n  }\n}':
    types.ArticleSidebarDocument,
  "query ArticleSlugs {\n  articles(pagination: {limit: 5000}) {\n    slug\n  }\n}":
    types.ArticleSlugsDocument,
  'query EventCalendar {\n  events(sort: "start:desc") {\n    slug\n    name\n    start\n    end\n    status\n    venue {\n      name\n    }\n  }\n}':
    types.EventCalendarDocument,
  'query Event($slug: String!) {\n  events(filters: {slug: {eq: $slug}}) {\n    ...EventDetails\n  }\n}\n\nfragment EventDetails on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  description\n  contactEmail\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n    location\n  }\n  venue {\n    name\n    website\n    location\n    addressDetails\n  }\n  timetable {\n    id\n    day\n    description\n    timeslots {\n      id\n      time\n      description\n    }\n  }\n  registration {\n    link\n    widgetCode\n  }\n  sponsorships {\n    id\n    category\n    sponsors {\n      name\n      url\n      logo {\n        name\n        url\n        width\n        height\n      }\n      socialNetworks {\n        id\n        type\n        url\n      }\n    }\n  }\n  hosts(sort: "name") {\n    ...PlayerItem\n  }\n  mentors(sort: "name") {\n    ...PlayerItem\n  }\n  players(sort: "name") {\n    ...PlayerItem\n  }\n  media {\n    id\n    url\n    type\n  }\n}':
    types.EventDocument,
  'query Events($page: Int!, $pageSize: Int!, $status: String, $location: String, $country: String) {\n  events_connection(\n    sort: "start:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {status: {eqi: $status}, location: {slug: {eqi: $location}, country: {eqi: $country}}}\n  ) {\n    nodes {\n      ...EventItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nquery UpcomingEvents($today: DateTime!) {\n  events(sort: "start:asc", filters: {end: {gte: $today}}) {\n    ...EventItem\n  }\n}\n\nfragment EventItem on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n  }\n}':
    types.EventsDocument,
  "query Hosting {\n  hosting {\n    content\n  }\n}": types.HostingDocument,
  'query Markers {\n  events(\n    sort: "start:asc"\n    filters: {status: {ne: "Cancelled"}, venue: {location: {ne: {}}}}\n    pagination: {limit: 5000}\n  ) {\n    documentId\n    slug\n    name\n    start\n    end\n    timezone\n    status\n    registration {\n      link\n    }\n    venue {\n      name\n      website\n      location\n    }\n  }\n}':
    types.MarkersDocument,
  'query EventNav {\n  events(sort: "start:desc", pagination: {limit: 5000}) {\n    slug\n    name\n    start\n    status\n    location {\n      slug\n      name\n      country\n    }\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}':
    types.EventNavDocument,
  "query EventSlugs($today: DateTime!) {\n  events(filters: {end: {lt: $today}}, pagination: {limit: 5000}) {\n    slug\n  }\n}":
    types.EventSlugsDocument,
  "query Testimonials {\n  testimonials(pagination: {limit: 5000}) {\n    documentId\n    content\n    url\n    audio {\n      name\n      url\n    }\n    author {\n      name\n      slug\n      tagline\n      avatar {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n}":
    types.TestimonialsDocument,
  "query Game($slug: String!) {\n  games(filters: {slug: {eq: $slug}}) {\n    ...GameDetails\n  }\n}\n\nfragment GameDetails on Game {\n  documentId\n  slug\n  name\n  category\n  scale\n  timebox\n  summary\n  credits\n  description\n  publishedAt\n  tags {\n    id\n    value\n  }\n  materials {\n    id\n    value\n  }\n  preparationSteps {\n    id\n    value\n  }\n  safety {\n    id\n    key\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  resources {\n    name\n    url\n  }\n  firstPlayedAt {\n    name\n    slug\n  }\n  documentedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  ratings {\n    energy\n    connection\n    silliness\n  }\n}":
    types.GameDocument,
  'query Games($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  games_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...GameItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment GameItem on Game {\n  documentId\n  slug\n  name\n  summary\n  timebox\n  scale\n  category\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n}':
    types.GamesDocument,
  'query GameNav {\n  games(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}':
    types.GameNavDocument,
  "query GameSlugs {\n  games(pagination: {limit: 5000}) {\n    slug\n  }\n}":
    types.GameSlugsDocument,
  "query Expectations($type: String!) {\n  expectations(filters: {type: {eq: $type}}) {\n    title\n    type\n    icon\n    content\n  }\n}":
    types.ExpectationsDocument,
  "query Home {\n  home {\n    images {\n      name\n      url\n      width\n      height\n      hash\n      mime\n      provider\n      size\n    }\n  }\n}":
    types.HomeDocument,
  'query Player($slug: String!) {\n  players(filters: {slug: {eq: $slug}}) {\n    ...PlayerDetails\n  }\n}\n\nfragment PlayerDetails on Player {\n  documentId\n  slug\n  name\n  position\n  company\n  tagline\n  bio\n  website\n  location\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n  attended(sort: "start:desc") {\n    ...EventItem\n  }\n  hosted(sort: "start:desc") {\n    ...EventItem\n  }\n  mentored(sort: "start:desc") {\n    ...EventItem\n  }\n}':
    types.PlayerDocument,
  'query Players($page: Int!, $pageSize: Int!, $position: String) {\n  players_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {position: {eqi: $position}}\n  ) {\n    nodes {\n      ...PlayerItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment PlayerItem on Player {\n  documentId\n  slug\n  name\n  position\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n}':
    types.PlayersDocument,
  'query PlayerNav {\n  players(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    position\n    updatedAt\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}':
    types.PlayerNavDocument,
  "query PlayerSlugs {\n  players(pagination: {limit: 5000}) {\n    slug\n  }\n}":
    types.PlayerSlugsDocument,
  "query Search($input: String!) {\n  search(query: $input) {\n    events(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        start\n        end\n        timezone\n        status\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        location {\n          name\n          country\n        }\n      }\n    }\n    articles(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        title\n        summary\n        category\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        author {\n          slug\n          name\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    games(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        summary\n        timebox\n        scale\n        category\n        publishedAt\n        proposedBy {\n          name\n          slug\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n    players(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        position\n        publishedAt\n        avatar {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n  }\n}":
    types.SearchDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Format {\n  format {\n    openspace\n    lawOfTwoFeet\n    butterfly\n    bumblebee\n    schedule\n  }\n}",
): (typeof documents)["query Format {\n  format {\n    openspace\n    lawOfTwoFeet\n    butterfly\n    bumblebee\n    schedule\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Story {\n  history {\n    founders\n    keyMoments\n    intro\n    items {\n      id\n      date\n      dateFormat\n      additionalText\n      title\n      description\n      image {\n        name\n        url\n      }\n    }\n  }\n  players(sort: "name:asc", filters: {position: {eq: "Founder"}}) {\n    ...PlayerItem\n  }\n}',
): (typeof documents)['query Story {\n  history {\n    founders\n    keyMoments\n    intro\n    items {\n      id\n      date\n      dateFormat\n      additionalText\n      title\n      description\n      image {\n        name\n        url\n      }\n    }\n  }\n  players(sort: "name:asc", filters: {position: {eq: "Founder"}}) {\n    ...PlayerItem\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Article($slug: String!) {\n  articles(filters: {slug: {eq: $slug}}) {\n    ...ArticleDetails\n  }\n}\n\nfragment ArticleDetails on Article {\n  documentId\n  slug\n  title\n  category\n  summary\n  publishedAt\n  updatedAt\n  cannonical\n  tags {\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  author {\n    name\n    slug\n    position\n    tagline\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  content\n}",
): (typeof documents)["query Article($slug: String!) {\n  articles(filters: {slug: {eq: $slug}}) {\n    ...ArticleDetails\n  }\n}\n\nfragment ArticleDetails on Article {\n  documentId\n  slug\n  title\n  category\n  summary\n  publishedAt\n  updatedAt\n  cannonical\n  tags {\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  author {\n    name\n    slug\n    position\n    tagline\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  content\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Articles($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  articles_connection(\n    sort: "publishedAt:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...ArticleItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment ArticleItem on Article {\n  documentId\n  slug\n  title\n  summary\n  category\n  publishedAt\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  author {\n    slug\n    name\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}',
): (typeof documents)['query Articles($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  articles_connection(\n    sort: "publishedAt:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...ArticleItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment ArticleItem on Article {\n  documentId\n  slug\n  title\n  summary\n  category\n  publishedAt\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  author {\n    slug\n    name\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ArticleNav {\n  articles(sort: "publishedAt:desc", pagination: {limit: 5000}) {\n    slug\n    title\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}',
): (typeof documents)['query ArticleNav {\n  articles(sort: "publishedAt:desc", pagination: {limit: 5000}) {\n    slug\n    title\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ArticleSidebar {\n  latest: articles_connection(sort: "publishedAt:desc", pagination: {limit: 3}) {\n    nodes {\n      documentId\n      slug\n      title\n      publishedAt\n      defaultImage {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n  categories: articles {\n    category\n  }\n  tags: articles {\n    tags {\n      value\n    }\n  }\n}',
): (typeof documents)['query ArticleSidebar {\n  latest: articles_connection(sort: "publishedAt:desc", pagination: {limit: 3}) {\n    nodes {\n      documentId\n      slug\n      title\n      publishedAt\n      defaultImage {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n  categories: articles {\n    category\n  }\n  tags: articles {\n    tags {\n      value\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query ArticleSlugs {\n  articles(pagination: {limit: 5000}) {\n    slug\n  }\n}",
): (typeof documents)["query ArticleSlugs {\n  articles(pagination: {limit: 5000}) {\n    slug\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EventCalendar {\n  events(sort: "start:desc") {\n    slug\n    name\n    start\n    end\n    status\n    venue {\n      name\n    }\n  }\n}',
): (typeof documents)['query EventCalendar {\n  events(sort: "start:desc") {\n    slug\n    name\n    start\n    end\n    status\n    venue {\n      name\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Event($slug: String!) {\n  events(filters: {slug: {eq: $slug}}) {\n    ...EventDetails\n  }\n}\n\nfragment EventDetails on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  description\n  contactEmail\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n    location\n  }\n  venue {\n    name\n    website\n    location\n    addressDetails\n  }\n  timetable {\n    id\n    day\n    description\n    timeslots {\n      id\n      time\n      description\n    }\n  }\n  registration {\n    link\n    widgetCode\n  }\n  sponsorships {\n    id\n    category\n    sponsors {\n      name\n      url\n      logo {\n        name\n        url\n        width\n        height\n      }\n      socialNetworks {\n        id\n        type\n        url\n      }\n    }\n  }\n  hosts(sort: "name") {\n    ...PlayerItem\n  }\n  mentors(sort: "name") {\n    ...PlayerItem\n  }\n  players(sort: "name") {\n    ...PlayerItem\n  }\n  media {\n    id\n    url\n    type\n  }\n}',
): (typeof documents)['query Event($slug: String!) {\n  events(filters: {slug: {eq: $slug}}) {\n    ...EventDetails\n  }\n}\n\nfragment EventDetails on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  description\n  contactEmail\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n    location\n  }\n  venue {\n    name\n    website\n    location\n    addressDetails\n  }\n  timetable {\n    id\n    day\n    description\n    timeslots {\n      id\n      time\n      description\n    }\n  }\n  registration {\n    link\n    widgetCode\n  }\n  sponsorships {\n    id\n    category\n    sponsors {\n      name\n      url\n      logo {\n        name\n        url\n        width\n        height\n      }\n      socialNetworks {\n        id\n        type\n        url\n      }\n    }\n  }\n  hosts(sort: "name") {\n    ...PlayerItem\n  }\n  mentors(sort: "name") {\n    ...PlayerItem\n  }\n  players(sort: "name") {\n    ...PlayerItem\n  }\n  media {\n    id\n    url\n    type\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Events($page: Int!, $pageSize: Int!, $status: String, $location: String, $country: String) {\n  events_connection(\n    sort: "start:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {status: {eqi: $status}, location: {slug: {eqi: $location}, country: {eqi: $country}}}\n  ) {\n    nodes {\n      ...EventItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nquery UpcomingEvents($today: DateTime!) {\n  events(sort: "start:asc", filters: {end: {gte: $today}}) {\n    ...EventItem\n  }\n}\n\nfragment EventItem on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n  }\n}',
): (typeof documents)['query Events($page: Int!, $pageSize: Int!, $status: String, $location: String, $country: String) {\n  events_connection(\n    sort: "start:desc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {status: {eqi: $status}, location: {slug: {eqi: $location}, country: {eqi: $country}}}\n  ) {\n    nodes {\n      ...EventItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nquery UpcomingEvents($today: DateTime!) {\n  events(sort: "start:asc", filters: {end: {gte: $today}}) {\n    ...EventItem\n  }\n}\n\nfragment EventItem on Event {\n  documentId\n  slug\n  name\n  start\n  end\n  timezone\n  status\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  location {\n    name\n    country\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Hosting {\n  hosting {\n    content\n  }\n}",
): (typeof documents)["query Hosting {\n  hosting {\n    content\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Markers {\n  events(\n    sort: "start:asc"\n    filters: {status: {ne: "Cancelled"}, venue: {location: {ne: {}}}}\n    pagination: {limit: 5000}\n  ) {\n    documentId\n    slug\n    name\n    start\n    end\n    timezone\n    status\n    registration {\n      link\n    }\n    venue {\n      name\n      website\n      location\n    }\n  }\n}',
): (typeof documents)['query Markers {\n  events(\n    sort: "start:asc"\n    filters: {status: {ne: "Cancelled"}, venue: {location: {ne: {}}}}\n    pagination: {limit: 5000}\n  ) {\n    documentId\n    slug\n    name\n    start\n    end\n    timezone\n    status\n    registration {\n      link\n    }\n    venue {\n      name\n      website\n      location\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query EventNav {\n  events(sort: "start:desc", pagination: {limit: 5000}) {\n    slug\n    name\n    start\n    status\n    location {\n      slug\n      name\n      country\n    }\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}',
): (typeof documents)['query EventNav {\n  events(sort: "start:desc", pagination: {limit: 5000}) {\n    slug\n    name\n    start\n    status\n    location {\n      slug\n      name\n      country\n    }\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query EventSlugs($today: DateTime!) {\n  events(filters: {end: {lt: $today}}, pagination: {limit: 5000}) {\n    slug\n  }\n}",
): (typeof documents)["query EventSlugs($today: DateTime!) {\n  events(filters: {end: {lt: $today}}, pagination: {limit: 5000}) {\n    slug\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Testimonials {\n  testimonials(pagination: {limit: 5000}) {\n    documentId\n    content\n    url\n    audio {\n      name\n      url\n    }\n    author {\n      name\n      slug\n      tagline\n      avatar {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n}",
): (typeof documents)["query Testimonials {\n  testimonials(pagination: {limit: 5000}) {\n    documentId\n    content\n    url\n    audio {\n      name\n      url\n    }\n    author {\n      name\n      slug\n      tagline\n      avatar {\n        name\n        url\n        width\n        height\n      }\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Game($slug: String!) {\n  games(filters: {slug: {eq: $slug}}) {\n    ...GameDetails\n  }\n}\n\nfragment GameDetails on Game {\n  documentId\n  slug\n  name\n  category\n  scale\n  timebox\n  summary\n  credits\n  description\n  publishedAt\n  tags {\n    id\n    value\n  }\n  materials {\n    id\n    value\n  }\n  preparationSteps {\n    id\n    value\n  }\n  safety {\n    id\n    key\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  resources {\n    name\n    url\n  }\n  firstPlayedAt {\n    name\n    slug\n  }\n  documentedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  ratings {\n    energy\n    connection\n    silliness\n  }\n}",
): (typeof documents)["query Game($slug: String!) {\n  games(filters: {slug: {eq: $slug}}) {\n    ...GameDetails\n  }\n}\n\nfragment GameDetails on Game {\n  documentId\n  slug\n  name\n  category\n  scale\n  timebox\n  summary\n  credits\n  description\n  publishedAt\n  tags {\n    id\n    value\n  }\n  materials {\n    id\n    value\n  }\n  preparationSteps {\n    id\n    value\n  }\n  safety {\n    id\n    key\n    value\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n  images {\n    name\n    url\n    width\n    height\n  }\n  resources {\n    name\n    url\n  }\n  firstPlayedAt {\n    name\n    slug\n  }\n  documentedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  ratings {\n    energy\n    connection\n    silliness\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Games($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  games_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...GameItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment GameItem on Game {\n  documentId\n  slug\n  name\n  summary\n  timebox\n  scale\n  category\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n}',
): (typeof documents)['query Games($page: Int!, $pageSize: Int!, $category: String, $tag: String) {\n  games_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {eqi: $category}, tags: {value: {eqi: $tag}}}\n  ) {\n    nodes {\n      ...GameItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment GameItem on Game {\n  documentId\n  slug\n  name\n  summary\n  timebox\n  scale\n  category\n  proposedBy {\n    name\n    slug\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n  defaultImage {\n    name\n    url\n    width\n    height\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GameNav {\n  games(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}',
): (typeof documents)['query GameNav {\n  games(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    category\n    tags {\n      value\n    }\n    publishedAt\n    defaultImage {\n      name\n      url\n      width\n      height\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GameSlugs {\n  games(pagination: {limit: 5000}) {\n    slug\n  }\n}",
): (typeof documents)["query GameSlugs {\n  games(pagination: {limit: 5000}) {\n    slug\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Expectations($type: String!) {\n  expectations(filters: {type: {eq: $type}}) {\n    title\n    type\n    icon\n    content\n  }\n}",
): (typeof documents)["query Expectations($type: String!) {\n  expectations(filters: {type: {eq: $type}}) {\n    title\n    type\n    icon\n    content\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Home {\n  home {\n    images {\n      name\n      url\n      width\n      height\n      hash\n      mime\n      provider\n      size\n    }\n  }\n}",
): (typeof documents)["query Home {\n  home {\n    images {\n      name\n      url\n      width\n      height\n      hash\n      mime\n      provider\n      size\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Player($slug: String!) {\n  players(filters: {slug: {eq: $slug}}) {\n    ...PlayerDetails\n  }\n}\n\nfragment PlayerDetails on Player {\n  documentId\n  slug\n  name\n  position\n  company\n  tagline\n  bio\n  website\n  location\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n  attended(sort: "start:desc") {\n    ...EventItem\n  }\n  hosted(sort: "start:desc") {\n    ...EventItem\n  }\n  mentored(sort: "start:desc") {\n    ...EventItem\n  }\n}',
): (typeof documents)['query Player($slug: String!) {\n  players(filters: {slug: {eq: $slug}}) {\n    ...PlayerDetails\n  }\n}\n\nfragment PlayerDetails on Player {\n  documentId\n  slug\n  name\n  position\n  company\n  tagline\n  bio\n  website\n  location\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n  attended(sort: "start:desc") {\n    ...EventItem\n  }\n  hosted(sort: "start:desc") {\n    ...EventItem\n  }\n  mentored(sort: "start:desc") {\n    ...EventItem\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Players($page: Int!, $pageSize: Int!, $position: String) {\n  players_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {position: {eqi: $position}}\n  ) {\n    nodes {\n      ...PlayerItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment PlayerItem on Player {\n  documentId\n  slug\n  name\n  position\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n}',
): (typeof documents)['query Players($page: Int!, $pageSize: Int!, $position: String) {\n  players_connection(\n    sort: "name:asc"\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {position: {eqi: $position}}\n  ) {\n    nodes {\n      ...PlayerItem\n    }\n    pageInfo {\n      page\n      pageSize\n      total\n      pageCount\n    }\n  }\n}\n\nfragment PlayerItem on Player {\n  documentId\n  slug\n  name\n  position\n  avatar {\n    name\n    url\n    width\n    height\n  }\n  socialNetworks {\n    id\n    url\n    type\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PlayerNav {\n  players(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    position\n    updatedAt\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}',
): (typeof documents)['query PlayerNav {\n  players(sort: "name:asc", pagination: {limit: 5000}) {\n    slug\n    name\n    position\n    updatedAt\n    avatar {\n      name\n      url\n      width\n      height\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query PlayerSlugs {\n  players(pagination: {limit: 5000}) {\n    slug\n  }\n}",
): (typeof documents)["query PlayerSlugs {\n  players(pagination: {limit: 5000}) {\n    slug\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Search($input: String!) {\n  search(query: $input) {\n    events(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        start\n        end\n        timezone\n        status\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        location {\n          name\n          country\n        }\n      }\n    }\n    articles(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        title\n        summary\n        category\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        author {\n          slug\n          name\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    games(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        summary\n        timebox\n        scale\n        category\n        publishedAt\n        proposedBy {\n          name\n          slug\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n    players(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        position\n        publishedAt\n        avatar {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n  }\n}",
): (typeof documents)["query Search($input: String!) {\n  search(query: $input) {\n    events(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        start\n        end\n        timezone\n        status\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        location {\n          name\n          country\n        }\n      }\n    }\n    articles(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        title\n        summary\n        category\n        publishedAt\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n        author {\n          slug\n          name\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n    games(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        summary\n        timebox\n        scale\n        category\n        publishedAt\n        proposedBy {\n          name\n          slug\n          avatar {\n            name\n            url\n            width\n            height\n          }\n        }\n        defaultImage {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n    players(filters: {publishedAt: {notNull: true}}) {\n      nodes {\n        documentId\n        slug\n        name\n        position\n        publishedAt\n        avatar {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n  }\n}"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
