import Collection from "."

type HeadingProps = {
    collectionTitle: string
    collectionDescription?: string
}

export function Heading({ collectionTitle, collectionDescription }: HeadingProps) {
    return (
        <article className="prose prose-headings:mb-4 mt-4 max-w-prose-narrow">
            <Collection.Title title={collectionTitle} />
            {collectionDescription && (
                <Collection.Description descriptionHtml={collectionDescription} />
            )}
        </article>
    )
}
