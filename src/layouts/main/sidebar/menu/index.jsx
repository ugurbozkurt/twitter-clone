import {NavLink} from "react-router-dom"
import classNames from "classnames"
import Button from "../../../../components/button"
import {MainMenu} from '../../../../utils/const';
import More from './more';
import {useAccount} from "../../../../store/auth/hooks";

export default function Menu(){

   const account = useAccount();
   
    return (
        <nav className="mt-0.5 mb-1" key={account}>
            {MainMenu.map((item,index)=>
                        <NavLink to={typeof item.path === 'function' ? item.path() : item.path} key={index} className="py-[3px] block group">
                        {({isActive})=>(
                            <div className={classNames("p-3 rounded-full inline-flex items-center transition-colors gap-5 text-xl group-hover:bg-[color:var(--hv-color-primary)]",
                            {
                                "font-bold":isActive
                            }
                            )}>
                                <div className="w-[26.25px] h-[26.25px] relative">
                                    {item?.notification &&
                                        (
                                            <span className="w-[18px] h-[18px] absolute -top-1.5 -right-1 text-[11px] bg-[color:var(--color-primary)] text-white rounded-full flex justify-center items-center ">
                                                {account.notification}
                                            </span>
                                        )
                                    }
                                    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block"> 
                                        {isActive && item.icons.active }
                                        {!isActive && item.icons.inactive }
                                    </svg>
                                </div>
                                 <div className="text-[color:var(--font-color-primary)] text-xl pr-4" >
                                    {item.title}
                                 </div>
                            </div>
                        )}
                        </NavLink>       
            )}
        <More/>
            <div className="py-6 w-[90%]">
            <Button size="large">
               Post
            </Button>
            </div>
        </nav>
    )
}