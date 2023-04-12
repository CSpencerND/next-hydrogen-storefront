"use client"

import { useProduct } from "@/lib/state"
import { cn } from "@/lib/utils"

import { RadioGroup } from "@headlessui/react"

export function Swatch({ ...props }) {
    const selectedColor = useProduct((s) => s.selectedColor)
    const setSelectedColor = useProduct((s) => s.setSelectedColor)
    const hexCodes = useProduct((s) => s.hexCodes)
    const colorOptions = useProduct((s) => s.colorOptions)
    const setCurrentImage = useProduct((s) => s.setCurrentImage)

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
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
