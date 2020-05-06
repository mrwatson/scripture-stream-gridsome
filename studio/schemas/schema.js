// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import series from './documents/series'
import subSeries from './documents/subSeries'
import format from './documents/format'
import speaker from './documents/speaker'
import venue from './documents/venue'
import topic from './documents/topic'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import descriptionPortableText from './objects/descriptionPortableText'
import locationPortableText from './objects/locationPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import speakerReference from './objects/speakerReference'
import venueReference from './objects/venueReference'
import audio from './objects/audio'
import topicReference from './objects/topicReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    speakerReference,
    venueReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    descriptionPortableText,
    locationPortableText,
    series,
    subSeries,
    format,
    speaker,
    venue,
    audio,
    topic,
    topicReference

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
