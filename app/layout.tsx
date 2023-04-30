import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import type Children from "types"

import { cn } from "./lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"

import { RootProvider } from "./lib/state"
import { getStorefrontProps } from "./lib/storefront"

import { Navbar } from "./components/navigation"
// import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
    const shop = await getStorefrontProps()

    return {
        title: shop.name,
        description: shop.brand?.shortDescription,
        viewport: "width=device-width, initial-scale=1",
        icons: {
            icon: [
                {
                    url: "/favicon-32x32.png" ?? "",
                    sizes: "32x32" ?? "",
                    type: "image/png" ?? "",
                },
                {
                    url: "/favicon-16x16.png" ?? "",
                    sizes: "16x16" ?? "",
                    type: "image/png" ?? "",
                },
            ],
            apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
        },
        manifest: "/site.webmanifest",
        themeColor: shop.brand?.colors.primary[0].background, // ios
    }
}

export default async function RootLayout({ children }: Children) {
    return (
        <html
            className={cn(inter.className, "overflow-x-hidden")}
            data-theme="next"
            lang="en"
        >
            <body
                className={`
                    relative isolate flex min-h-screen
                    flex-col overflow-x-hidden
                    bg-base-300 text-sm
                `}
                style={{
                    paddingBottom: "env(safe-area-inset-bottom)", // ios
                }}
            >
                <RootProvider>
                    <Navbar />
                    <main className="container relative mx-auto space-y-8 px-4 py-8">
                        {children}
                    </main>
                    {/* <Footer logo={logo} /> */}
                </RootProvider>
            </body>
        </html>
    )
}
