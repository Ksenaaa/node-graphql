/// <reference types="react-scripts" />

// eslint-disable-next-line
import { CSSProperties, FunctionComponent, SVGProps } from 'react';

import '@mui/material';

declare module '*.svg' {
    const content: FunctionComponent<SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.graphql' {
    import { DocumentNode } from 'graphql'
    const Schema: DocumentNode
    export = Schema
}

declare module '@mui/material/styles' {
    interface Palette {
        colors: CustomColorOptions
    }

    interface PaletteOptions {
        colors: CustomColorOptions
    }

    interface CustomColorOptions {
        grey: string,
        greyLight: string,
        red: string,
        green: string,
        black: string,
        white: string,
    }
}
