import { setCurrentAccount } from "../../../../../store/auth/actions"
import { useAccounts, useAccount } from "../../../../../store/auth/hooks"
import classNames from "classnames"

export default function More({ close }) {
    const currentAccount = useAccount()
    const accounts = useAccounts()
    return (
        <>
            {accounts.map((item, index) =>

                <button
                    type="button"
                    disabled={item.username === currentAccount.username}
                    onClick={() => {
                        setCurrentAccount(item)
                        close()
                    }
                    }
                    key={index}
                    className={classNames("h-[66px] px-4 py-2 flex items-center w-full transition-colors text-left outline-none "
                        , {
                            "hover:bg-[#EFF3F41A] cursor-pointer": item.username !== currentAccount.username
                        })}>
                    <img src={item.avatar} className="w-10 h-10 rounded-full"></img>
                    <div className="mx-5 text-[15px] ml-3">
                        <div className=" w-full h-5 flex ">
                            <h6 className="font-bold text-[color:var(--font-color-primary)]">{item.fullName}</h6>
                            {item.isLocked &&
                                (
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="my-0.5 ml-0.5">
                                        <path fill="var(--font-color-primary)" d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path>
                                    </svg>
                                )
                            }
                        </div>
                        <div className="text-[#71767b]">
                            @{item.username}</div>

                    </div>
                    {item.username === currentAccount.username && (
                        <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="absolute right-6" >
                            <path fill="#00ba7c" d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                        </svg>

                    )}
                    {item.notification > 0 && item.username !== currentAccount.username && (
                        <span className="px-1.5 text-[13px] bg-[color:var(--color-primary)] rounded-full font-bold flex justify-center items-center absolute right-5">
                            {item.notification}
                        </span>
                    )}

                </button>

            )}
            <div className="w-[100%] h-px bg-[#2f3336] mb-3 mt-3 mx-auto" />
            <button className="h-[44px] w-full flex items-center text-[color:var(--font-color-primary)] transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                Add an existing account
            </button>
            <button className="h-[44px] w-full flex items-center text-[color:var(--font-color-primary)] transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                Manage accounts
            </button>
            <button className="h-[44px] w-full flex items-center text-[color:var(--font-color-primary)] transition-colors justify-between px-4 font-bold hover:bg-[#EFF3F41A]">
                Log out @{currentAccount.username}
            </button>
        </>
    )
}