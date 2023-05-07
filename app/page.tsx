import { Featured, Gallery, Hero, Statement } from "@/components/home"
import { Suspense } from "react"

import font from "next/font/local"

// const heroFont = font({
//     src: "./static/font/don_graffiti/DonGraffiti.otf"
// })

export default async function HomePage() {
    return (
        <>
            {/*@ts-expect-error Async Component*/}
            <Hero
                // font={heroFont}
                rounded
            />
            <Suspense>
                {/*@ts-expect-error Async Component*/}
                <Featured collectionHandle="staff-picks" />
            </Suspense>
            <Statement heading="What we do">
                <p>Work hard, play hard, I guess.</p>
                <p>That is what The kids say, yeah?</p>
            </Statement>
            <Suspense>
                <Gallery />
            </Suspense>
        </>
    )
}
