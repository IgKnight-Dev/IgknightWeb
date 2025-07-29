// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-url')({
      url: (asset) => {
        if (asset.url.includes('codicon.ttf')) {
          return '/assets/codicon/codicon.ttf';
        }
        return asset.url;
      },
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
