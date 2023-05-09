export function Backdrop() {
    return (
        <span
            aria-hidden={true}
            className="absolute inset-0 -z-10 h-full w-full rounded-b-3xl bg-transparent backdrop-blur-[10px] backdrop-saturate-[1.8]"
        />
    )
}
