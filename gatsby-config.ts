import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cats-st-g`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-vercel',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/__common/assets/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
