export function Description({ text }: { text: string }) {
    return (
        <aside
            className="prose [&_strong]:text-accent-content"
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}
