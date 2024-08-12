import dayjs from "dayjs"

export const dateFull = (timestamp: string | number) => {
    return dayjs(Number(timestamp)).format('DD.MM.YYYY')
}
