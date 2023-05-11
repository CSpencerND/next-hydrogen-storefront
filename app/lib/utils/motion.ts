"use client"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import Link from "next/link"

export const MotionDiv = motion.div
export const MotionLink = motion(Link)

export { AnimatePresence, MotionConfig, motion }

export type { Transition, Variants } from "framer-motion"
