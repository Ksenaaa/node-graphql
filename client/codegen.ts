import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: '../server/schema.graphql',
    documents: ['src/**/*.ts'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;
