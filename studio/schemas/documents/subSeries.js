export default {
  name: 'subSeries',
  type: 'document',
  title: 'Sub-series',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'seriesStart',
      type: 'datetime',
      title: 'Series Start Date',
      description: 'The date when the series started.'
    },
    {
      name: 'seriesEnd',
      type: 'datetime',
      title: 'Series End Date',
      description: 'The date when the series ended.'
    },
    {
      name: 'venue',
      type: 'array',
      title: 'Venue',
      of: [
        {
          type: 'venueReference'
        }
      ]
    }
  ]
}
