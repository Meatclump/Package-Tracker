interface SenderProps {
    name: string
}

const Sender = ({ name }: SenderProps) => {
    return (
        <div className="flex gap-1 text-sm">
            <span className="font-semibold">Sender:</span>
            <span>{name}</span>
        </div>
    )
}

export default Sender