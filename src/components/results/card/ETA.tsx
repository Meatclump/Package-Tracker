interface ETAProps {
    timeString: string
}

const ETA = ({ timeString }: ETAProps) => {
    return (
        <div className="flex gap-1 text-xs">
            <span>ETA:</span>
            <span className="text-end">{ timeString }</span>
        </div>
    )
}

export default ETA