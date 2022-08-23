/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]],
  // eslint-disable-next-line global-require
  plugins: [
    [process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'), {}].filter(Boolean),
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@Applications': ['./src/Applications'],
        '@Domains': ['./src/Domains'],
        '@Infrastructures': ['./src/Infrastructures'],
        '@Commons': ['./src/Commons'],
        '@Interfaces': ['./src/Interfaces'],
      },
    },
    ],
  ],
};
