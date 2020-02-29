module.exports = {
  siteMetadata: {
    title: 'Oliver Bains',
    author: 'Oliver Bains',
    description: 'Welcome to my page! Here you can find out about me and my projects.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/ollie.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
