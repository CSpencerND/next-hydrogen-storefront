"use client"

import { ArrowLeft, ArrowRight, X } from "lucide-react"

type CloseButtonProps = {
    onClick?: () => void
    children?: React.ReactNode
    icon?: "left" | "right" | "x"
    props?: React.HTMLAttributes<HTMLButtonElement>
}

/**
 * `CloseButton` is a customizable button component that displays an x, left arrow, or right arrow icon
 * based on the `icon` prop provided. It accepts additional `onClick` and HTML button attribute props.
 * The component also supports rendering children nodes if provided.
 *
 * @param {"left" | "right" | "x"} [props.icon="x"] - The icon to be displayed. Defaults to the x icon.
 *
 * @example
 * // Default x icon button
 * <CloseButton onClick={() => console.log("Clicked")} />
 *
 * @example
 * // Left arrow icon button
 * <CloseButton icon="left" onClick={() => console.log("Clicked")} />
 */
export function CloseButton({ icon = "x", onClick, ...props }: CloseButtonProps) {
    const Icon = () => {
        let buttonIcon: JSX.Element

        switch (icon) {
            case "left":
                buttonIcon = <ArrowLeft />
                break

            case "right":
                buttonIcon = <ArrowRight />
                break

            default:
                buttonIcon = <X />
                break
        }

        return buttonIcon
    }

    return (
        <button
            type="button"
            className="btn-primary btn-square btn-xs btn rounded-sq"
            onClick={onClick}
            {...props}
        >
            <span className="sr-only">Close the panel</span>
            <Icon />
        </button>
    )
}
