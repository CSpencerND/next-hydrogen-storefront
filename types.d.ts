import { ReactNode } from "react"

export default interface Children {
    children?: ReactNode
}

export type GalleryImageData = {
    src: StaticImageData
    alt: string
}
