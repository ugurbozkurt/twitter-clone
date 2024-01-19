import { setCurrentAccount } from "../../../../../store/auth/actions"
import { useAccount } from "../../../../../store/auth/hooks"
export default function Post() {
    const account = useAccount()
    return (

        <div className="h-[116px] px-4 py-4 border-b border-[color:var(--hv-color-primary)]">
            <img src={account.avatar} className="w-10 h-10 rounded-full"></img>
        </div>
    )
}