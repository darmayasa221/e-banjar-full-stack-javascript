/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]],
  // eslint-disable-next-line global-require
  plugins: [process.env.NODE_ENV !== 'production' && require('react-refresh/babel')].filter(Boolean),
};
