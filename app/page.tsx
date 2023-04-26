import { Featured, Hero, Statement } from "@/components/home"

// import hero from "@/static/hero.webp"
// import logo from "@/static/wp4l-square.webp"

export default async function HomePage() {

    return (
        <>
            {/* <Hero image={hero} rounded /> */}
            {/* <Featured collectionHandle="staff-picks" /> */}
            <Statement heading="What we do">
                <p>Work hard, play hard, I guess.</p>
                <p>That is what The kids say, yeah?</p>
            </Statement>
        </>
    )
}
