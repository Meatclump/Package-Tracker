interface UserProps {
	user?: string
}

const User = ({ user }: UserProps) => {
	return (
		<div className="flex justify-end gap-1 w-full text-sm">
			<span className='font-semibold'>User:</span>
			<span>{user ? user : "Unknown"}</span>
		</div>
	)
}

export default User