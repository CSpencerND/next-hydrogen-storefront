"use client"

import type { GalleryImageData } from "types"

import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export function Gallery({ galleryImageData }: { galleryImageData: GalleryImageData[] }) {
    const galleryImages = galleryImageData.map(({ src, alt }, i) => {
        return (
            <Image
                src={src}
                alt={alt}
                key={i}
                className="rounded-2xl shadow-box"
            />
        )
    })

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 360: 2, 1024: 3 }}>
            <Masonry gutter="1rem">{galleryImages}</Masonry>
        </ResponsiveMasonry>
    )
}
