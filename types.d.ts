import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { PropsWithChildren, ReactNode } from "react"

export default interface Children {
    children?: ReactNode
}

export { Children }

export type ClassName = {
    className?: string
}

export type GalleryImageData = {
    src: StaticImageData
    alt: string
}

export type ImageProps = {
    images: Image[]
    currentImage: Image
}

export type ImageState = ImageProps & {
    setCurrentImage: (i: number) => void
}

export type ModalProps = {
    isModalOpen: boolean
}

export type ModalState = ModalProps & {
    toggleModal: () => void
}

export type SwatchProps = {
    colorOptions?: string[]
    selectedColor?: string
    hexCodes?: string[]
}

export type SwatchState = SwatchProps & {
    setSelectedColor: (color: string) => void
}

export type SizeProps = {
    sizeOptions?: string[]
    selectedSize?: string
}

export type SizeState = SizeProps & {
    setSelectedSize: (size: string) => void
}

export type ProductProps = PropsWithChildren<
    ImageProps & ModalProps & SwatchProps & SizeProps
> & {
    product: Partial<Product>
}

export type ProductState = ProductProps & ImageState & ModalState & SwatchState & SizeState

export type ProductProviderProps = PropsWithChildren<ProductProps>
