interface NotesProps {
    text: string
}

const Notes = ({ text }: NotesProps) => {
    return (
        <div className="flex gap-1 text-sm">
            <span className="font-semibold">Notes:</span>
            <span>{ text }</span>
        </div>
    )
}

export default Notes