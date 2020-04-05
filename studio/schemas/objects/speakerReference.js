export default {
  name: 'speakerReference',
  type: 'object',
  title: 'Speaker reference',
  fields: [
    {
      name: 'speaker',
      type: 'reference',
      to: [
        {
          type: 'speaker'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'speaker.name',
      media: 'speaker.image.asset'
    }
  }
}
