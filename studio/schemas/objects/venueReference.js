export default {
  name: 'venueReference',
  type: 'object',
  title: 'Venue reference',
  fields: [
    {
      name: 'venue',
      type: 'reference',
      to: [
        {
          type: 'venue'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'venue.name',
      media: 'venue.image.asset'
    }
  }
}
