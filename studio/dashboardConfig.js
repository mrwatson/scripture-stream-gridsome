export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5e6c9be451d8abf94b1632',
                  title: 'Sanity Studio',
                  name: 'scripture-stream-gridsome-studio',
                  apiId: 'db9985d6-ce67-4a8d-9f8f-58f62813d0c8'
                },
                {
                  buildHookId: '5e5e6c9b8dc54e687314f24f',
                  title: 'Scripture Stream',
                  name: 'scripture-stream-gridsome',
                  apiId: '7bfbc0f6-54c1-4dc7-a427-3f5fc46502d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrwatson/scripture-stream-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scripture-stream-gridsome.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
