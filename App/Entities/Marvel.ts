// Interfaces taken from Marvel API Documentation

export interface CharacterDataWrapper {
  code?: number
  status?: string
  copyright?: string
  attributionText?: string
  attributionHTML?: string
  data?: CharacterDataContainer
  etag?: string
}

export interface CharacterDataContainer {
  offset?: number
  limit?: number
  total?: number
  count?: number
  results?: Character[]
}

export interface Character {
  id?: number
  name?: string
  description?: string
  modified?: Date
  resourceURI?: string
  urls?: Url[]
  thumbnail?: Image
  comics?: ComicList
  stories?: StoryList
  events?: EventList
  series?: SeriesList
}

export interface Url {
  type?: string
  url?: string
}

export interface Image {
  path?: string
  extension?: string
}

export interface List<T> {
  available?: number
  returned?: number
  collectionURI?: string
  items?: T[]
}

export interface Summary {
  resourceURI?: string
  name?: string
}

export type ComicList = List<ComicSummary>
export type StoryList = List<StorySummary>
export type EventList = List<EventSummary>
export type SeriesList = List<SeriesSummary>

export type SeriesSummary = Summary
export type ComicSummary = Summary
export type EventSummary = Summary
export type StorySummary = Summary & { type?: string }
