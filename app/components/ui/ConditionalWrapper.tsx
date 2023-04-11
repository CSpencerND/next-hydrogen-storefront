import { ReactNode } from "react"

type ConditionalWrapperProps = {
    condition: boolean
    wrapper: (children: ReactNode) => ReactNode
    children: ReactNode
}

export function ConditionalWrapper({
    condition,
    wrapper,
    children,
}: ConditionalWrapperProps): JSX.Element {
    return condition ? <>{wrapper(children)}</> : <>children</>
}

type ApplyWrappersProps = {
    wrappers: Array<(children: ReactNode) => ReactNode>
    children: ReactNode
}

export function ApplyWrappers({ wrappers, children }: ApplyWrappersProps) {
    wrappers.reduce((children, wrapper) => (wrapper ? wrapper(children) : children), children)
}
