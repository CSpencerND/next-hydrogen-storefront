"use client"

import NextLink from "next/link"

import { LazyMotion, domAnimation, m } from "@/lib"
import { forwardRef } from "react"

import type { ComponentPropsWithoutRef } from "react"
import type { HTMLMotionProps } from "framer-motion"
import type { Variants } from "@/lib"

const staggerChildren = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.1,
        },
    },
}

const Menu = forwardRef<HTMLMenuElement, HTMLMotionProps<"menu">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.menu
            ref={ref}
            className={className}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            {...props}
        >
            {children}
        </m.menu>
    </LazyMotion>
))
Menu.displayName = "Menu"

const UL = forwardRef<HTMLUListElement, HTMLMotionProps<"ul">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.ul
            ref={ref}
            className={className}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            {...props}
        >
            {children}
        </m.ul>
    </LazyMotion>
))
UL.displayName = "UL"

const fadeInUp: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const LI = forwardRef<HTMLLIElement, HTMLMotionProps<"li">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.li
            ref={ref}
            className={className}
            variants={fadeInUp}
            {...props}
        >
            {children}
        </m.li>
    </LazyMotion>
))
LI.displayName = "LI"

const Div = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.div
            ref={ref}
            className={className}
            variants={fadeInUp}
            {...props}
        >
            {children}
        </m.div>
    </LazyMotion>
))
Div.displayName = "Div"

const MotionLink = m(NextLink)

const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof MotionLink>>(
    ({ children, className, ...props }, ref) => (
        <LazyMotion
            strict
            features={domAnimation}
        >
            <MotionLink
                ref={ref}
                className={className}
                variants={fadeInUp}
                {...props}
            >
                {children}
            </MotionLink>
        </LazyMotion>
    )
)
Link.displayName = "Link"

const Article = forwardRef<HTMLElement, HTMLMotionProps<"article">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.article
            ref={ref}
            className={className}
            {...props}
        >
            {children}
        </m.article>
    </LazyMotion>
))
Article.displayName = "Article"

export { Article, Menu, Link, Div, UL, LI }
