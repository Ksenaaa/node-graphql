import { DescriptionMovie } from "models/descriptionMovie";
import { dateFull } from "utils/helpers/formatDate";


export const titleDescription: DescriptionMovie[] = [
    {
        id: 'year',
        title: 'Year:'
    },
    {
        id: 'type',
        title: 'Type:'
    },
    {
        id: 'released',
        title: 'Release date:',
        format: (value) => dateFull(value)
    },
    {
        id: 'countries',
        title: 'Country:',
        format: (value) => value?.join(', ')
    },
    {
        id: 'directors',
        title: 'Director:',
        format: (value) => value?.join(', ')
    },
    {
        id: 'genres',
        title: 'Genre:',
        format: (value) => value?.join(', ')
    },
    {
        id: 'languages',
        title: 'Language:',
        format: (value) => value?.join(', ')
    },
    {
        id: 'runtime',
        title: 'Time:'
    },
    {
        id: 'cast',
        title: 'Cast:',
        format: (value) => value?.join(', ')
    },
]
