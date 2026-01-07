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
		<form action={handleSubmit}>
			<FilterPackageInput
				value={trackingNumber}
				onChange={(e) => setTrackingNumber(e.target.value)}
			/>
		</form>
	)
}

export default SearchContainer