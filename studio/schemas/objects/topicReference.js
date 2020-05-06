export default {
  name: 'topicReference',
  type: 'object',
  title: 'Topic reference',
  fields: [
    {
      name: 'topic',
      type: 'reference',
      to: [
        {
          type: 'topic'
        }
      ]
    }
  ]
}