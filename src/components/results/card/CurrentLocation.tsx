interface CurrentLocationProps {
    name: string
}

const CurrentLocation = ({ name }: CurrentLocationProps) => {
    return (
        <div className="flex gap-1 text-sm">
            <span className="font-semibold">Current Location:</span>
            <span>{ name }</span>
        </div>
    )
}

export default CurrentLocation