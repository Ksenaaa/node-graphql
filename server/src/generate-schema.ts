import fs from "fs";
import path from "path";
import { buildASTSchema, printSchema } from "graphql";
import { gql } from "graphql-tag";

import { userTypeDefs } from "./resolvers/userResolvers";
import { commentTypeDefs } from "./resolvers/commentResolvers";
import { movieTypeDefs } from "./resolvers/movieResolvers";
import { dateScalarTypeDefs } from "./resolvers/dateScalarResolvers";

const allTypeDefs = gql`
  ${userTypeDefs}
  ${commentTypeDefs}
  ${movieTypeDefs}
  ${dateScalarTypeDefs}
`;

const schema = buildASTSchema(allTypeDefs);
const schemaSDL = printSchema(schema);

fs.writeFileSync(path.resolve(__dirname, "../schema.graphql"), schemaSDL);
