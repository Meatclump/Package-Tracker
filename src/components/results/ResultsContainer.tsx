import type { ReactNode } from "react"

interface ResultsContainerProps {
    children: ReactNode
}

const ResultsContainer = ({children}: ResultsContainerProps) => {
    return (
        <div className="flex flex-col gap-3 md:gap-6 p-3 md:p-6 bg-zinc-300">
            {children}
        </div>
    )
}

export default ResultsContainer