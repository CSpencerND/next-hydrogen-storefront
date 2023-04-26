"use client"

import { useProductStore } from "@/lib/state"
import { useProduct } from "@shopify/hydrogen-react"

import { cn } from "@/lib/utils"

import { RadioGroup } from "@headlessui/react"

export function Size({ ...props }) {
    const options = useProductStore((s) => s.product.options)
    const sizeOptions = options!.find((option) => option!.name === "Size")!.values as string[]
    const selectedSize = useProductStore((s) => s.selectedSize)

    const setSelectedSize = useProductStore((s) => s.setSelectedSize)
    const setSelectedOption = useProduct().setSelectedOption
    const handleChange = (size: string) => {
        if (!selectedSize) return
        setSelectedSize(size)
        setSelectedOption("Size", selectedSize)
    }

    return (
        <RadioGroup
            value={selectedSize}
            onChange={handleChange}
            {...props}
        >
            <RadioGroup.Label className="sr-only"> Select a size </RadioGroup.Label>

            <span className="flex flex-wrap gap-4">
                {sizeOptions.map((size, i) => (
                    <RadioGroup.Option
                        key={i}
                        value={size}
                        className={({ active, checked }) =>
                            cn(
                                `
                                -m-0.5 grid h-7 w-7 cursor-pointer
                                place-items-center rounded-sq bg-base-100 text-xs
                                shadow-lg ring-neutral ring-offset-base-200
                                transition-all duration-200
                                hover:!bg-secondary-focus focus:outline-none
                                md:h-10 md:w-10
                            `,

                                active && checked
                                    ? "focus-visible:ring-2 focus-visible:ring-primary-content focus-visible:ring-offset-2"
                                    : "",
                                checked
                                    ? "bg-secondary text-secondary-content ring-2 ring-offset-2"
                                    : ""
                            )
                        }
                    >
                        <RadioGroup.Label className="cursor-pointer">
                            {sizeText[size]}
                        </RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}

const sizeText: { [size: string]: string } = {
    XS: "XS",
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
    "2XL": "2X",
    "3XL": "3X",
    "4XL": "4X",
    "5XL": "5X",
}
