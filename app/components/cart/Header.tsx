"use client"

// import { CloseButton } from "@/components/ui/CloseButton"
import { Menu } from "@headlessui/react"
import { Fragment } from "react"

export function Header() {
    return (
        <header className="flex items-center justify-between border-b border-base-100 px-4 py-3">
            <h1 className="text-lg font-medium">In Your Cart</h1>
            {/* <Menu.Button as={Fragment}> */}
            {/*     <CloseButton */}
            {/*         icon="right" */}
            {/*     /> */}
            {/* </Menu.Button> */}
        </header>
    )
}
