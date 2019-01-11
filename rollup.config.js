/* eslint-env node */
import graphqlCompiler from 'rollup-plugin-graphql-js-client-compiler';
import baseConfig from './rollup-common.config';

baseConfig.plugins.unshift(
  graphqlCompiler({
    schema: './schema.json',
    optimize: true,
    profileDocuments: ['src/graphql/**/*.graphql']
  })
);

export default baseConfig;
