import { GalleryImageData } from "types"

import { getFeaturedCollection, getStorefrontProps } from "./lib/storefront"

/** NOTE: import your hero image from @/static
  *
  * import { hero } from "@/static"
  */

/** NOTE: import your font from next/font/google or from @/static with next/font/local
  *
  * import localFont from "next/font/local"
  * const graffiti = localFont({
  *     src: "../../static/font/don_graffiti/DonGraffiti.otf",
  * })
  */

/** NOTE: import your gallery image data from @/static
  *
  * import { galleryImageData } from "@/static"
  */

import { Featured, Gallery, Hero } from "./components/home"

export default async function HomePage() {
    const featured = await getFeaturedCollection("staff-picks")
    const { shop } = await getStorefrontProps()
    const brandData = shop.brand

    return (
        <>
            {/* <Hero */}
            {/*     data={brandData} */}
            {/*     image={hero} */}
            {/* /> */}

            <Featured featured={featured} />

            <article className="prose relative max-w-none space-y-6">
                <h3 className="text-accent-content md:text-lg">Why we love what we do</h3>
                <p>
                    {/*Place your About Us here*/}
                    Work hard play harder
                </p>
            </article>

            {/* <Gallery galleryImageData={} /> */}
        </>
    )
}
