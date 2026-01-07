import { useContext, useState } from "react"
import FilterPackageInput from "./FilterPackageInput"
import { SearchContext } from "../../App"

const SearchContainer = () => {
	const [trackingNumber, setTrackingNumber] = useState("")
	const searchContext = useContext(SearchContext)

	const handleSubmit = () => {
		if (searchContext) {
			searchContext.setSearchQuery(trackingNumber.trim())
		}
	}

	return (
		<div className="p-6 md:p-12 w-full bg-primary">
			<form action={handleSubmit}>
				<FilterPackageInput
					value={trackingNumber}
					onChange={(e) => setTrackingNumber(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default SearchContainer