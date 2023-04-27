"use client"

import type Children from "types"

import { ScreenOverlay } from "@/components/ui"
import { Popover } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"

function Modal({ children }: Children) {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="fixed inset-0 z-40 grid place-items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Popover.Panel className="relative">{children}</Popover.Panel>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <ScreenOverlay open={open} />
                </>
            )}
        </Popover>
    )
}

type CloseButtonProps = {
    icon?: "arrowLeft" | "x"
}

function CloseButton({ icon = "x" }: CloseButtonProps) {
    return (
        <Popover.Button className="btn-primary btn-square btn-sm btn">
            {icon === "arrowLeft" ? <ArrowLeft /> : <X />}
        </Popover.Button>
    )
}

Modal.CloseButton = CloseButton

export { Modal }
