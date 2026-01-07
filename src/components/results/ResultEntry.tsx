import type { Package } from "../../sample"
import { FaBuildingFlag, FaClipboard, FaFlagCheckered, FaTruckFast } from "react-icons/fa6"

interface ResultEntryProps {
    pkg: Package
}

const ResultEntry = ({pkg}: ResultEntryProps) => {
    const last_updated = new Date(pkg.last_updated)
    const eta = new Date(pkg.eta)
    const deliveredStatus = [
        "delivered",
        "ready-for-pickup"
    ]

    let statusMessage = ""
    let statusIcon = null

    switch (pkg.status) {
        case "order-info-received":
            statusMessage = "Order info received!"
            statusIcon = <FaClipboard />
            break
        case "on-the-way":
            statusMessage = "Package is on the way!"
            statusIcon = <FaTruckFast />
            break
        case "ready-for-pickup":
            statusMessage = `Ready for pickup at location: ${pkg.location_name}`
            statusIcon = <FaBuildingFlag />
            break
        case "delivered":
            statusMessage = `Package has been delivered to: ${pkg.location_name}`
            statusIcon = <FaFlagCheckered />
            break
        default:
            statusMessage = pkg.status
    }

    return (
        <div className="flex flex-col bg-white shadow p-3">
            <div className="flex justify-between">
                <div className="flex gap-1 text-sm">
                    <span className="font-semibold">Parcel ID:</span>
                    <span>{pkg.parcel_id}</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-1 text-sm">
                    <span className="font-semibold">Sender:</span>
                    <span>{pkg.sender}</span>
                </div>
            </div>
            {!deliveredStatus.includes(pkg.status) && // Render if not delivered
                <div className="flex justify-between">
                    <div className="flex gap-1 text-sm">
                        <span className="font-semibold">Current Location:</span>
                        <span>{pkg.location_name}</span>
                    </div>
                </div>
            }
            {pkg.notes &&
                <div className="text-sm">
                    <span className="font-semibold">Notes:</span>
                    <span>{pkg.notes}</span>
                </div>
            }
            <div className="flex flex-col items-center gap-1 text-sm border p-3 my-3">
                <span className="font-semibold">Shipping Status:</span>
                <p className="flex gap-1 items-center text-center text-lg">
                    {statusIcon && statusIcon}
                    {statusMessage}
                </p>
                {!deliveredStatus.includes(pkg.status) && // Render if not delivered
                    <div className="flex">
                        <div className="flex gap-1 text-xs">
                            <span>ETA:</span>
                            <span className="text-end">{eta.toLocaleString()}</span>
                        </div>
                    </div>
                }
            </div>
            <div className="flex justify-between">
                <div></div>
                <div className="flex gap-1 text-xs">
                    <span>Last Updated:</span>
                    <span className="w-32 text-end">{last_updated.toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}

export default ResultEntry