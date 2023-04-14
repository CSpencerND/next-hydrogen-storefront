type HeadingProps = {
    collectionTitle: string
    collectionDescription?: string
}

export function Heading({ collectionTitle, collectionDescription }: HeadingProps) {
    return (
        <article className="prose mt-4 max-w-prose-narrow prose-headings:mb-4">
            <h1 className="text-accent-content">{collectionTitle}</h1>

            {collectionDescription && (
                <aside
                    dangerouslySetInnerHTML={{
                        __html: collectionDescription,
                    }}
                />
            )}
        </article>
    )
}
