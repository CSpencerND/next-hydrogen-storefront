import { getFeaturedCollection, getStorefrontProps } from "./lib/storefront"

import { Statement } from "./components/home"

const getData = async () => {
    const featuredCollectionData = getFeaturedCollection("staff-picks")
    const shopData = getStorefrontProps()
    const [featured, shop] = await Promise.all([featuredCollectionData, shopData])
    return { featured, shop }
}

export default async function HomePage() {
    // const { featured, shop } = await getData()

    return (
        <>
            <section>
                <Statement heading="What we do">
                    <p>Work hard, play hard, I guess.</p>
                    <p>That's what The kids say, yeah?</p>
                </Statement>
            </section>
        </>
    )
}
