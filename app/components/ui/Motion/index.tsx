import { LazyMotion, domAnimation } from "@/lib"
import { Article, Div, LI, Link, Menu, UL } from "./motion"

const Motion = ({ children }: { children: React.ReactNode }) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        {children}
    </LazyMotion>
)

Motion.LI = LI
Motion.UL = UL
Motion.Menu = Menu
Motion.Div = Div
Motion.Link = Link
Motion.Article = Article

export { Motion }
