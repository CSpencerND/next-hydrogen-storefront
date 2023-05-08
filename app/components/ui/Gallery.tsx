"use client"

import { galleryImages } from "@/static"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export function Gallery() {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 360: 2, 1024: 3 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((g, i) => (
                    <Image
                        src={g}
                        alt=""
                        key={i}
                        placeholder="blur"
                        className="rounded-2xl shadow-lg"
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}
