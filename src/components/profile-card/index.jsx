import { useState } from "react";
import Button from "../button"

export default function ProfileCard({ user}) {
    const [following, setFollowing] = useState(false);
    return (
        <div className="w-full h-[65px] px-3 cursor-pointer py-4 flex items-center hover:bg-white/[0.03] transition-colors">
            <img src={user.avatar} className="w-10 h-10 rounded-full"></img>
            <div className="flex-1 flex flex-col text-left ml-3">
                <div className="font-bold text-[15px]  text-[color:var(--font-color-primary)]">{user.fullname}</div>
                <div className="font-weight text-[15px] text-[#71767B] leading-5">@{user.username}</div>
            </div>
            <div>

                {following ? (
                    <Button variant="white-outline" onClick={() => setFollowing(!following)} size="small" className="group" >
                        <div className="flex group-hover:hidden">Following</div>
                        <div className="hidden group-hover:flex ">Unfollow</div>
                    </Button>
                )
                    : (<Button variant="white" onClick={() => setFollowing(!following)} size="small" >Follow</Button>)}

            </div>
        </div>
    )
}