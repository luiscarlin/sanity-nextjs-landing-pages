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
                  buildHookId: '60049c829d0752d5fe2e9b44',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u69zvy86',
                  apiId: 'd49da2c6-a325-4f3a-bb90-a259785e903f'
                },
                {
                  buildHookId: '60049c829d0752d4e62e9c0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n4v29omh',
                  apiId: 'a85ac124-bd9a-4cff-9752-1213f396c032'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luiscarlin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n4v29omh.netlify.app', category: 'apps'}
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
