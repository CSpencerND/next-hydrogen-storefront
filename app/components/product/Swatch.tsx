"use client"

import { useProductStore } from "@/lib/state"
import { cn } from "@/lib/utils"

import { RadioGroup } from "@headlessui/react"

/** A react component for rendering a swatch of colors. Swaps the current image according to the color of the button pressed.
 *
 *  @prop {boolean | undefined} attached - Use if component is attached to a product card. Styles will be added to make the component look correct when inside a product card.
 */
export function Swatch({ attached, ...props }: { attached?: boolean }) {
    const selectedColor = useProductStore((s) => s.selectedColor)
    const setSelectedColor = useProductStore((s) => s.setSelectedColor)
    const hexCodes = useProductStore((s) => s.hexCodes)
    const colorOptions = useProductStore((s) => s.colorOptions)
    const setCurrentImage = useProductStore((s) => s.setCurrentImage)

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className={cn(
                attached
                    ? "overflow-y-hidden overflow-x-scroll bg-gradient-to-t from-base-200 to-base-100 px-4 pt-3 pb-5"
                    : ""
            )}
            {...props}
        >
            <RadioGroup.Label className="sr-only"> Select a color </RadioGroup.Label>

            <span className="flex gap-4">
                {hexCodes!.map((code, i) => (
                    <RadioGroup.Option
                        key={colorOptions![i]}
                        value={colorOptions![i]}
                        className={({ active, checked }) =>
                            cn(
                                `relative -m-0.5 flex cursor-pointer
                                items-center justify-center rounded-md
                                ring-neutral ring-offset-base-200 transition-all
                                hover:brightness-125 focus:outline-none`,

                                active && checked
                                    ? "focus-visible:ring-2 focus-visible:ring-primary-content"
                                    : "",
                                checked ? "ring-2 ring-offset-2" : ""
                            )
                        }
                        onFocus={() => setCurrentImage(i)}
                    >
                        <RadioGroup.Label
                            as="span"
                            className="sr-only"
                        >
                            {" "}
                            {colorOptions![i]}{" "}
                        </RadioGroup.Label>

                        <span
                            id="swatchColor"
                            aria-hidden="true"
                            style={{
                                backgroundColor:
                                    code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                            }}
                            className="h-6 w-6 rounded-md"
                        />
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}
