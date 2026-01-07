import { useContext, useId } from "react"
import { SearchContext } from "../../App"

interface SearchPackageInputProps {
	value: string,
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const FilterPackageInput = ({value, onChange}: SearchPackageInputProps) => {
	const searchContext = useContext(SearchContext)
	const id = useId()
	console.log(searchContext?.packages)
	return (
		<div className='flex flex-col gap-1'>
			<label
				htmlFor={id}
				className='text-slate-700 font-semibold'
			>
				Filter by Parcel ID
			</label>
			<input
				id={id}
				list={`${id}-list`}
				type="text"
				className='bg-stone-100 hover:bg-white px-2 py-1'
				placeholder='Parcel ID'
				value={value}
				onChange={onChange}
				autoComplete="off"
			/>
			<datalist id={`${id}-list`}>
				{searchContext?.packages.map(pkg => 
					<option key={pkg.id} value={pkg.parcel_id}>{pkg.parcel_id}</option>
				)}
			</datalist>
		</div>
	)
}

export default FilterPackageInput