import { getCollections, getProductsByCollection } from "@/lib/storefront"

import Collection from "@/components/collection"

// import type { ProductProviderProps } from "@/lib/ProductStore"

export async function generateStaticParams() {
    const collections = await getCollections()

    return collections.map((collection) => ({
        collection: collection.handle,
    }))
}

type SegmentParams = {
    params: { collection: string }
}

export default async function CollectionDynamicSegment({ params }: SegmentParams) {
    const data = await getProductsByCollection(params.collection)
    const { collectionTitle, collectionDescription, products } = data

    return (
        <Collection.Section>
            <article className="prose mt-4 max-w-prose-narrow">
                <Collection.Title title={collectionTitle} />
                <Collection.Description descriptionHtml={collectionDescription} />
            </article>
            <Collection.Grid>
                {/* {products.map((product) => { */}
                {/*     if(!product) throw new Error("No product found!") */}
                {/*     const hexCodes = JSON.parse(product.metafield!.value) as string[] */}
                {/*     if(!hexCodes) throw new Error("No hex codes found!") */}

                {/*     const initProviderProps: ProductProviderProps = { */}
                {/*         product: product, */}
                {/*         currentImage: product.images.nodes[0], */}
                {/*         isModalOpen: false, */}
                {/*         images: product.images.nodes, */}
                {/*         hexCodes: hexCodes, */}
                {/*     } */}
                {/*     return <Product {...initProviderProps} key={product.id} /> */}
                {/* })} */}

                {/* {products.map((product) => { */}
                {/*     if (!product) throw new Error("No product found!") */}

                {/*     return ( */}
                {/*         <li key={id}> */}
                {/*             <Link */}
                {/*                 href={href} */}
                {/*                 className={` */}
                {/*                  card relative h-full overflow-hidden rounded-2xl */}
                {/*                  text-primary-content transition-all */}
                {/*                  hover:scale-105 hover:brightness-105 */}
                {/*                  active:scale-95 */}
                {/*              `} */}
                {/*             > */}
                {/*                 {image && ( */}
                {/*                     <ProductImage */}
                {/*                         image={image} */}
                {/*                         title={title} */}
                {/*                     /> */}
                {/*                 )} */}
                {/*                 <div */}
                {/*                     className={` */}
                {/*                      bg-blur-300 card-body absolute */}
                {/*                      bottom-0 w-full border-t */}
                {/*                      border-base-100 p-1 */}
                {/*                      sm:p-2 */}
                {/*                  `} */}
                {/*                 > */}
                {/*                     <h2 className="card-title mx-auto whitespace-nowrap text-sm"> */}
                {/*                         {title} */}
                {/*                     </h2> */}
                {/*                 </div> */}
                {/*             </Link> */}
                {/*         </li> */}
                {/*     ) */}
                {/* })} */}
            </Collection.Grid>
        </Collection.Section>
    )
}
// return (
//     <section className="mx-auto max-w-2xl space-y-8">
//         <PageTitle title="Collections Directory" />

//         <ProductGrid>
//             {collections.map(({ id, title, href, image }) => {
//                 return (
//                     <li key={id}>
//                         <Link
//                             href={href}
//                             className={`
//                                 card relative h-full overflow-hidden rounded-2xl
//                                 text-primary-content transition-all
//                                 hover:scale-105 hover:brightness-105
//                                 active:scale-95
//                             `}
//                         >
//                             {image && (
//                                 <ProductImage
//                                     image={image}
//                                     title={title}
//                                 />
//                             )}
//                             <div
//                                 className={`
//                                     bg-blur-300 card-body absolute
//                                     bottom-0 w-full border-t
//                                     border-base-100 p-1
//                                     sm:p-2
//                                 `}
//                             >
//                                 <h2 className="card-title mx-auto whitespace-nowrap text-sm">
//                                     {title}
//                                 </h2>
//                             </div>
//                         </Link>
//                     </li>
//                 )
//             })}
//         </ProductGrid>
//     </section>
// )

// import type { ProductProviderProps } from "@/lib/ProductStore"

// export default async function CollectionPage({ params }: { params: { collection: string } }) {
//     const { collectionTitle, products } = await getProductsByCollection(params.collection)

//     return (
//         <section className="mx-auto max-w-2xl space-y-8">
//             <h1 className="text-center text-xl font-bold text-accent-content">
//                 {collectionTitle}
//             </h1>

//             <ul className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
//                 <BlobScene />

//                 {products.map((product) => {
//                     if(!product) throw new Error("No product found!")
//                     const hexCodes = JSON.parse(product.metafield!.value) as string[]
//                     if(!hexCodes) throw new Error("No hex codes found!")

//                     const initProviderProps: ProductProviderProps = {
//                         product: product,
//                         currentImage: product.images.nodes[0],
//                         isModalOpen: false,
//                         images: product.images.nodes,
//                         hexCodes: hexCodes,
//                     }
//                     return <Product {...initProviderProps} key={product.id} />
//                 })}
//             </ul>
//         </section>
//     )
// }
