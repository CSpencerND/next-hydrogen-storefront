import Link from "next/link"

type BreadcrumbProps = {
    root?: string
    segments: string[]
}

export function Breadcrumbs({ root = "collections", segments }: BreadcrumbProps) {
    return (
        <section className="breadcrumbs mx-auto text-sm lg:max-w-7xl">
            <ul className="bg-blur-200 w-fit rounded-2xl p-4 shadow-box [&_a]:text-primary-content">
                <li>
                    <Link href={`/${root}`}>{root}</Link>
                </li>
                {segments.map((segment, i) => {
                    const path = `/${root}/${segments.slice(0, i + 1).join("/")}`
                    if (i !== segments.length - 1) {
                        return (
                            <li>
                                <Link href={path}>{segment}</Link>
                            </li>
                        )
                    }
                    return (
                        <li>
                            <span className="text-accent-content">{segment}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
