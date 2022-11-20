export default {
  widgets: [
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
                  buildHookId: '637aada35ca7a718244bc42a',
                  title: 'Sanity Studio',
                  name: 'stephanie-honore-portfolio-website-react-sanity-studio',
                  apiId: '2da2cc63-8de1-4634-b669-e4a8f34d7d6b'
                },
                {
                  buildHookId: '637aada3ea257018a31536f9',
                  title: 'Blog Website',
                  name: 'stephanie-honore-portfolio-website-react-sanity',
                  apiId: '2f121889-b7c8-41b2-8dee-f0fa91cde925'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shonore/stephanie-honore-portfolio-website-react-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://stephanie-honore-portfolio-website-react-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
