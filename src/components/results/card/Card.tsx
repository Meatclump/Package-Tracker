import { type Package } from "../../../sample"
import VerificationRequired from "./VerificationRequired"
import ParcelId from "./ParcelId"
import Sender from "./Sender"
import CurrentLocation from "./CurrentLocation"
import Notes from "./Notes"
import LastUpdated from "./LastUpdated"
import ETA from "./ETA"
import ShippingStatus from "./ShippingStatus"

interface ResultEntryProps {
    pkg: Package
}

const Card = ({ pkg }: ResultEntryProps) => {
    const last_updated = new Date(pkg.last_updated)
    const eta = new Date(pkg.eta)
    const deliveredStatus = [
        "delivered",
        "ready-for-pickup"
    ]

    return (
        <div className="flex flex-col bg-white shadow p-3">
            <div className="flex justify-between">
                <ParcelId id={pkg.parcel_id} />
                {pkg.verification_required && <VerificationRequired />}
            </div>
            <div className="flex justify-between">
                <Sender name={pkg.sender} />
            </div>
            {!deliveredStatus.includes(pkg.status) && // Render if not delivered
                <div className="flex justify-between">
                    <CurrentLocation name={pkg.location_name} />
                </div>
            }
            {pkg.notes && <Notes text={pkg.notes} />}
            <div className="flex flex-col items-center gap-1 text-sm border p-3 my-3">
                <ShippingStatus status={pkg.status} locationName={pkg.location_name} />
                {!deliveredStatus.includes(pkg.status) && <ETA timeString={eta.toLocaleString()} />}
            </div>
            <div className="flex justify-end">
                <LastUpdated timeString={last_updated.toLocaleString()} />
            </div>
        </div>
    )
}

export default Card