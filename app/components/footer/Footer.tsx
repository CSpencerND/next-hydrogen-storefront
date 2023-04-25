import { cn } from "@/lib/utils"

import { Facebook, Instagram, Twitter } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export default function Footer({ logo }: { logo: StaticImageData }) {
    return (
        <footer className="container mx-auto space-y-6">
            <section className="footer px-6 max-md:footer-center">
                <div className="form-control text-sm">
                    <label className="label">
                        <span className="text-sm font-bold text-base-content/80">
                            Sign Up To Our Newsletter!
                        </span>
                    </label>
                    <div className="relative isolate">
                        <div
                            aria-hidden
                            className={cn(
                                "absolute -inset-x-0.5 -top-1 bottom-1 -z-10",
                                "bg-gradient-to-bl from-accent-content/40 to-primary-content/30",
                                "rounded-xl blur-md"
                            )}
                        />
                        <input
                            type="email"
                            inputMode="email"
                            placeholder="username@site.com"
                            className="input mb-2 w-full bg-base-300"
                        />
                        <button className="btn-secondary btn absolute right-0 top-0 rounded-l-none">
                            Sub
                        </button>
                    </div>
                </div>
                <div className="md:place-self-center md:self-end md:justify-self-end">
                    <ul className="grid grid-flow-col">
                        <li>
                            <Link
                                href="https://www.instagram.com/word_play4lyfe/"
                                className="btn-ghost btn-square btn"
                            >
                                <Instagram />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="btn-ghost btn-square btn"
                            >
                                <Twitter />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="btn-ghost btn-square btn"
                            >
                                <Facebook />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className={cn(
                    "footer",
                    "border-t border-base-200 px-2 py-6",
                    "max-md:footer-center"
                )}
            >
                <div className="grid-flow-col items-center">
                    <Link
                        href="/"
                        className="btn-link btn hover:opacity-80"
                    >
                        <Image
                            src={logo}
                            alt="WordPlay4Lyfe"
                            className="h-full w-auto"
                        />
                    </Link>
                    <p>Copyright © 2022 - All right reserved wordplay4lyfe</p>
                </div>
            </section>
        </footer>
    )
}
