import { cn } from "@/lib/utils"

import { ProductProvider } from "@/lib/state"

import type { Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { Children, ClassName } from "types"

type LayoutProps = Children &
    ClassName & {
        product: Product
    }

function Layout({ product, className, children }: LayoutProps) {
    return (
        <section
            className={cn(
                `
                bg-blur-200 card mx-auto max-w-lg gap-6 rounded-3xl p-6
                lg:card-side md:gap-9 md:p-9 lg:max-w-7xl lg:gap-12 lg:p-12 [&>*]:basis-1/2
            `,
                className
            )}
        >
            <ProductProvider
                product={product}
                key={product.id}
            >
                {children}
            </ProductProvider>
        </section>
    )
}

function Body({ children, className }: Children & ClassName) {
    return <div className={cn("card-body gap-6 p-0", className)}>{children}</div>
}

Layout.Body = Body

export { Layout }
