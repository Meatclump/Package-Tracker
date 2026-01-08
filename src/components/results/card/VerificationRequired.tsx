import { FaIdCard } from "react-icons/fa6"

const VerificationRequired = () => {
    return (
        <div className="flex gap-1 text-sm items-center text-red-800">
            <FaIdCard />
            <span className="font-semibold">Verification Required on pickup</span>
        </div>
    )
}

export default VerificationRequired