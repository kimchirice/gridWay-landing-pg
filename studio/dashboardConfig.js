export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f43759f442f8e0c4ac9c497',
                  title: 'Sanity Studio',
                  name: 'gridway-landing-pg-studio',
                  apiId: 'd74c40f2-bb6a-4a5e-8857-a95d845c05b9'
                },
                {
                  buildHookId: '5f43759fa293b76cbf4a9cad',
                  title: 'Landing pages Website',
                  name: 'gridway-landing-pg',
                  apiId: 'acc1e911-3fb5-43a9-a48f-3b6f2feebb0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kimchirice/gridWay-landing-pg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gridway-landing-pg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
