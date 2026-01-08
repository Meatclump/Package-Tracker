interface LastUpdatedProps {
    timeString: string
}

const LastUpdated = ({ timeString }: LastUpdatedProps) => {
    return (
        <div className="flex gap-1 text-xs">
            <span>Last Updated:</span>
            <span className="w-32 text-end">{ timeString }</span>
        </div>
    )
}

export default LastUpdated