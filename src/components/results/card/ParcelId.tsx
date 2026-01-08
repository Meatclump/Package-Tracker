interface ParcelIdProps {
    id: string
}

const ParcelId = ({ id }: ParcelIdProps) => {
    return (
        <div className="flex gap-1 text-sm">
            <span className="font-semibold">Parcel ID:</span>
            <span>{ id }</span>
        </div>
    )
}

export default ParcelId