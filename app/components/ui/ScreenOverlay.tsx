"use client"

import { AnimatePresence, motion } from "framer-motion"

export function ScreenOverlay({ open }: { open: boolean }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="bg-blur fixed inset-0 z-30 cursor-pointer"
                    aria-hidden={true}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </AnimatePresence>
    )
}
