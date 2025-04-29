/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [`gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  `gatsby-plugin-anchor-links`,
`gatsby-plugin-react-helmet`,
{
  resolve: `gatsby-plugin-webfonts`,
  options: {
    fonts: {
      google: [
        {
          family: "Raleway",
          variants: ["100", "400", "700", "900"]
        },
        {
          family: "Roboto",
          variants: ["100", "400", "700", "900"]
        },
        {
          family: "Open Sans",
          variants: ["300", "400", "600", "700"]
        },
        {
          family: "Merriweather",
          variants: ["300", "400", "700", "900"]
        }
      ],
    },
    formats: ["woff2"],       
    useMinify: true,          
    usePreload: true,         
    usePreconnect: true,     
  },
},
]

}
