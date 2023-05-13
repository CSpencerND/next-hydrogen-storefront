type HeadingProps = {
    collectionTitle: string
    collectionDescription?: string
}

import { Motion } from "@/components/ui"

export function Heading({ collectionTitle, collectionDescription }: HeadingProps) {
    return (
        <Motion.Article
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: 0 }}
            className="prose mt-4 max-w-prose-narrow prose-headings:mb-4">
            <h1 className="text-accent-content max-sm:text-3xl">{collectionTitle}</h1>

            {collectionDescription && (
                <aside
                    dangerouslySetInnerHTML={{
                        __html: collectionDescription,
                    }}
                />
            )}
        </Motion.Article>
    )
}
