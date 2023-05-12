import { LoadingSpinner } from "./components/ui"

export default function LoadingPage() {
    return (
        <section className="grid h-[100svh] place-items-center">
            <LoadingSpinner />
        </section>
    )
}
