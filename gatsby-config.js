const { isNil } = require('lodash')

const mapPagesUrls = {
  index: '/',
  history: '/history',
  info: '/info',
}

module.exports = {
  siteMetadata: {
    title: 'Pathcore',
  },

  


  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            },
          }
        ]
      }
    },
    {  
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`,
      },
    },
   
  

    
   
   ],
}
