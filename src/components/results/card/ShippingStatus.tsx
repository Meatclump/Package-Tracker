import { FaBuildingFlag, FaClipboard, FaFlagCheckered, FaTruckFast } from "react-icons/fa6";

interface ShippingStatusProps {
    status: string
    locationName: string
}

const ShippingStatus = ({ status, locationName }: ShippingStatusProps) => {
    let statusMessage = ""
    let statusIcon = null;

    switch (status) {
        case "order-info-received":
            statusMessage = "Order info received!"
            statusIcon = <FaClipboard />
            break
        case "on-the-way":
            statusMessage = "Package is on the way!"
            statusIcon = <FaTruckFast />
            break
        case "ready-for-pickup":
            statusMessage = `Ready for pickup at location: ${locationName}`
            statusIcon = <FaBuildingFlag />
            break
        case "delivered":
            statusMessage = `Package has been delivered to: ${locationName}`
            statusIcon = <FaFlagCheckered />
            break
        default:
            statusMessage = status
    }

    return (
        <div className="text-center">
            <span className="font-semibold">Shipping Status:</span>
            <p className="flex gap-1 items-center text-center text-lg">
                {statusIcon && statusIcon}
                {statusMessage}
            </p>
        </div>
    )
}

export default ShippingStatus