import { Movie } from "__generated__/graphql";

export interface DescriptionMovie {
    id: string,
    title: string,
    format?: (value: Movie[keyof Movie]) => void
}
