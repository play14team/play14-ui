/**
 * Strapi REST API Population Configurations
 *
 * These configs mirror the field selections from GraphQL queries.
 * Each config specifies which relations to populate for a specific use case.
 */

// ============================================================================
// SHARED FIELD SELECTIONS
// ============================================================================

/**
 * Common image fields
 */
export const imageFields = ["name", "url", "width", "height"]

/**
 * Extended image fields (includes metadata)
 */
export const imageFieldsExtended = [
  "name",
  "url",
  "width",
  "height",
  "hash",
  "mime",
  "provider",
  "size",
]

// ============================================================================
// EVENTS
// ============================================================================

/**
 * EventItem fragment - used in grids and lists
 * GraphQL: events/grid.graphql
 */
export const eventItemPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  location: {
    fields: ["name", "country"],
  },
}

/**
 * EventDetails fragment - used in event detail pages
 * GraphQL: events/details.graphql
 */
export const eventDetailsPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  images: {
    fields: imageFields,
  },
  location: {
    fields: ["name", "country", "location"],
  },
  venue: {
    fields: ["name", "website", "location", "addressDetails"],
  },
  timetable: {
    populate: {
      timeslots: {
        fields: ["id", "time", "description"],
      },
    },
  },
  registration: {
    fields: ["link", "widgetCode"],
  },
  sponsorships: {
    populate: {
      sponsors: {
        populate: {
          logo: {
            fields: imageFields,
          },
          socialNetworks: {
            fields: ["id", "type", "url"],
          },
        },
      },
    },
  },
  hosts: {
    populate: {
      avatar: {
        fields: imageFields,
      },
      socialNetworks: {
        fields: ["id", "type", "url"],
      },
    },
    sort: ["name:asc"],
  },
  mentors: {
    populate: {
      avatar: {
        fields: imageFields,
      },
      socialNetworks: {
        fields: ["id", "type", "url"],
      },
    },
    sort: ["name:asc"],
  },
  players: {
    populate: {
      avatar: {
        fields: imageFields,
      },
      socialNetworks: {
        fields: ["id", "type", "url"],
      },
    },
    sort: ["name:asc"],
  },
  media: {
    fields: ["id", "url", "type"],
  },
}

/**
 * Event markers for map - GraphQL: events/markers.graphql
 */
export const eventMarkersPopulate = {
  registration: {
    fields: ["link"],
  },
  venue: {
    fields: ["documentId", "name", "website", "location"],
  },
}

/**
 * Event navigation - GraphQL: events/nav.graphql
 */
export const eventNavPopulate = {
  location: {
    fields: ["slug", "name", "country"],
  },
  defaultImage: {
    fields: imageFields,
  },
}

/**
 * Event calendar - GraphQL: events/calendar.graphql
 */
export const eventCalendarPopulate = {
  venue: {
    fields: ["name"],
  },
}

// ============================================================================
// PLAYERS
// ============================================================================

/**
 * PlayerItem fragment - used in grids and event attendee lists
 * GraphQL: players/grid.graphql
 */
export const playerItemPopulate = {
  avatar: {
    fields: imageFields,
  },
  socialNetworks: {
    fields: ["id", "url", "type"],
  },
}

/**
 * PlayerDetails fragment - used in player detail pages
 * GraphQL: players/details.graphql
 */
export const playerDetailsPopulate = {
  avatar: {
    fields: imageFields,
  },
  socialNetworks: {
    fields: ["id", "url", "type"],
  },
  attended: {
    populate: eventItemPopulate,
    sort: ["start:desc"],
  },
  hosted: {
    populate: eventItemPopulate,
    sort: ["start:desc"],
  },
  mentored: {
    populate: eventItemPopulate,
    sort: ["start:desc"],
  },
}

/**
 * Player navigation - GraphQL: players/nav.graphql
 */
export const playerNavPopulate = {
  avatar: {
    fields: imageFields,
  },
}

// ============================================================================
// GAMES
// ============================================================================

/**
 * GameItem fragment - used in grids
 * GraphQL: games/grid.graphql
 */
export const gameItemPopulate = {
  proposedBy: {
    fields: ["name", "slug"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
  defaultImage: {
    fields: imageFields,
  },
}

/**
 * GameDetails fragment - used in game detail pages
 * GraphQL: games/details.graphql
 */
export const gameDetailsPopulate = {
  tags: {
    fields: ["id", "value"],
  },
  materials: {
    fields: ["id", "value"],
  },
  preparationSteps: {
    fields: ["id", "value"],
  },
  safety: {
    fields: ["id", "key", "value"],
  },
  defaultImage: {
    fields: imageFields,
  },
  images: {
    fields: imageFields,
  },
  resources: {
    fields: ["name", "url"],
  },
  firstPlayedAt: {
    fields: ["name", "slug"],
  },
  documentedBy: {
    fields: ["name", "slug"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
  proposedBy: {
    fields: ["name", "slug"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
  ratings: {
    fields: ["energy", "connection", "silliness"],
  },
}

/**
 * Game navigation - GraphQL: games/nav.graphql
 */
export const gameNavPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  tags: {
    fields: ["value"],
  },
}

// ============================================================================
// ARTICLES
// ============================================================================

/**
 * ArticleItem fragment - used in grids
 * GraphQL: articles/grid.graphql
 */
export const articleItemPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  author: {
    fields: ["slug", "name"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
}

/**
 * ArticleDetails fragment - used in article detail pages
 * GraphQL: articles/details.graphql
 */
export const articleDetailsPopulate = {
  tags: {
    fields: ["value"],
  },
  defaultImage: {
    fields: imageFields,
  },
  images: {
    fields: imageFields,
  },
  author: {
    fields: ["name", "slug", "position", "tagline"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
}

/**
 * Article sidebar - GraphQL: articles/sidebar.graphql
 * Note: Requires 3 separate REST calls to replicate
 */
export const articleSidebarLatestPopulate = {
  defaultImage: {
    fields: imageFields,
  },
}

/**
 * Article navigation - GraphQL: articles/nav.graphql
 */
export const articleNavPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  tags: {
    fields: ["value"],
  },
}

// ============================================================================
// HOME
// ============================================================================

/**
 * Home page images - GraphQL: home/home.graphql
 */
export const homePopulate = {
  images: {
    fields: imageFieldsExtended,
  },
}

// ============================================================================
// ABOUT
// ============================================================================

/**
 * History items - GraphQL: about/story.graphql
 */
export const storyPopulate = {
  items: {
    populate: {
      image: {
        fields: ["name", "url"],
      },
    },
  },
}

// ============================================================================
// TESTIMONIALS
// ============================================================================

/**
 * Testimonials with author - GraphQL: events/testimonials.graphql
 */
export const testimonialsPopulate = {
  audio: {
    fields: ["name", "url"],
  },
  author: {
    fields: ["name", "slug", "tagline"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
}

// ============================================================================
// SEARCH
// ============================================================================

/**
 * Search results populate configs
 * GraphQL: search/search.graphql
 */
export const searchEventPopulate = {
  defaultImage: {
    fields: imageFields,
  },
  location: {
    fields: ["name", "country"],
  },
}

export const searchArticlePopulate = {
  defaultImage: {
    fields: imageFields,
  },
  author: {
    fields: ["slug", "name"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
}

export const searchGamePopulate = {
  proposedBy: {
    fields: ["name", "slug"],
    populate: {
      avatar: {
        fields: imageFields,
      },
    },
  },
  defaultImage: {
    fields: imageFields,
  },
}

export const searchPlayerPopulate = {
  avatar: {
    fields: imageFields,
  },
}
