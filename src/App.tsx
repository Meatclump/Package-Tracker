import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { type Package, data as sampleData } from './sample'
import SearchContainer from './components/search/SearchContainer'
import ResultsContainer from './components/results/ResultsContainer'
import ResultEntry from './components/results/ResultEntry'
import Header from './components/Header'

export interface ISearchContext {
	packages: Package[]
	searchQuery: string
	setSearchQuery: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<ISearchContext | null>(null)

function App() {
	const [packages, setPackages] = useState(sampleData.packages)
	const [searchQuery, setSearchQuery] = useState("")

	const fetchData = async () => {
		const url = "https://my.api.mockaroo.com/orders.json?key=e49e6840"
		let result = [] as Package[]
		try {
			const response = await fetch(url)
			if (!response.ok) {
				console.log("Response not ok:",response)
				setPackages(result)
			}
			result = await response.json()
			console.log("Fetch successful",result)
			setPackages(result)
		} catch (err) {
			console.log("fetch error:",err)
			setPackages(result)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<div className='flex flex-col min-h-screen items-center py-6 md:py-12'>
				<div className="flex flex-col w-200 max-w-[calc(100%-2rem)] shadow">
					<Header />
					<SearchContext value={{packages, searchQuery, setSearchQuery}}>
						<div className="px-6 pt-3 pb-6 md:px-12 md:pt-6 mb:pb-12 w-full bg-primary">
							<div className="flex justify-end gap-1 w-full text-sm">
								<span className='font-semibold'>User:</span>
								<span>{packages?.length >= 1 && packages[0].user_name}</span>
							</div>
							<SearchContainer />
						</div>
						{packages?.length >= 1 &&
							<ResultsContainer>
								{packages // If a query is set, only display results with a matching parcel id
									.filter(p => searchQuery !== "" ? p.parcel_id === searchQuery : p)
									.map(pkg => <ResultEntry key={pkg.id} pkg={pkg} />
								)}
							</ResultsContainer>
						}
					</SearchContext>
				</div>
			</div>
		</>
	)
}

export default App
