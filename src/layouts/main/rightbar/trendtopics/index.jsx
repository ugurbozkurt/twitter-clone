import { TrendTopicsList } from "../../../../utils/const"
import { numberFormat } from "../../../../utils/postcountformat"
import { Link } from "react-router-dom"
import { Popover, Transition } from "@headlessui/react"
import { useState } from "react";
import More from "./more"
import SidebarSection from "../../../../components/sidebarsection";

export default function TrendTopics() {

    const [trendTopics, setTrendTopics] = useState(TrendTopicsList);


    const handleRemoveTrend = (index) => {
        const updatedTopics = [...trendTopics];
        updatedTopics.splice(index, 1);
        setTrendTopics(updatedTopics);
    };

    return (
        <SidebarSection title="Trends for you" more="trends">
            {trendTopics.map((item, index) =>
                <Link to="/" key={index} className="h-[82px] w-full flex items-center hover:bg-[color:var(--hv-color-primary)] transition-colors">
                    <div className="w-full px-4 text-left  ">
                        <h1 className="text-[#71767b] text-[13px]">{item.title}</h1>
                        <h1 className="text-[15px] text-[color:var(--font-color-primary)] font-extrabold">#{item.topic.value}</h1>
                        <span className="text-[#71767b] text-[13px]">{numberFormat(item.postCount)} posts</span>
                    </div>
                    <Popover className="relative">
                        <Popover.Button
                            type="button"
                            className="w-[40px] h-[34.75px] mr-2.5 -mt-7 text-[#71767b] transition-colors rounded-full flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
                            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                            </svg>
                        </Popover.Button>

                        <Transition
                            enter="transition duration-500 ease-out"
                            enterFrom="transform opacity-0"
                            enterTo="transform opacity-100"
                            leave="transition duration-500 ease-out"
                            leaveFrom="transform opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <Popover.Panel className="absolute right-4 -top-7 z-[10]">
                                {({ close }) => (
                                    <More close={close} index={index} handleRemoveTrend={handleRemoveTrend} />
                                )}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Link>
            )}


        </SidebarSection>
    )
}