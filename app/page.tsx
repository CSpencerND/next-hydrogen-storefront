import { getFeaturedCollection, getStorefrontProps } from "./lib/storefront"

import { Featured, Hero, Statement } from "./components/home"
import Footer from "./components/footer/Footer"

// import hero from "@/static/hero.webp"
import logo from "@/static/wp4l-square.webp"

const getData = async () => {
    const featuredCollectionData = getFeaturedCollection("staff-picks")
    const shopData = getStorefrontProps()
    const [featured, shop] = await Promise.all([featuredCollectionData, shopData])
    return { featured, shop }
}

export default async function HomePage() {
    const { featured, shop } = await getData()

    return (
        <>
            <h1 className="text-center text-2xl">{shop.name}</h1>
            {/* <Hero image={hero} rounded /> */}
            {/* <Featured featured={featured} /> */}
            <Statement heading="What we do">
                <p>Work hard, play hard, I guess.</p>
                <p>That is what The kids say, yeah?</p>
            </Statement>
            <Footer logo={logo} />
        </>
    )
}
