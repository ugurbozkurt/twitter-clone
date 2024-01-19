
import { Popover, Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { MoreMenu } from '../../../../../utils/const';
import { setModal } from '../../../../../store/modal/actions'

export default function More() {

    return (
        <Popover className="relative">
            <Popover.Button className="h-14 block outline-none transition-colors rounded-full hover:bg-[color:var(--hv-color-primary)]">
                <div className="p-3 rounded-full  transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--hv-color-primary)]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="var(--font-color-primary)" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl text-[color:var(--font-color-primary)]">
                        More
                    </div>
                </div>
            </Popover.Button>
            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box  rounded-xl overflow-hidden">
                <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--section-color-primary)]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="var(--font-color-primary)" d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold text-[color:var(--font-color-primary)]">
                        Monetization
                    </div>
                </button>
                <div className="w-[89%] h-px bg-[#2f3336] my-0.5 mx-auto" />
                {MoreMenu.map((item, index) =>
                    <Disclosure key={index} >
                        {({ open }) => (
                            <>
                                <Disclosure.Button key={index} className="h-[52px] w-full flex text-[color:var(--font-color-primary)] items-center transition-colors justify-between px-4 font-bold hover:bg-[color:var(--section-color-primary)]">
                                    {item.mainmenu}
                                    <svg className={classNames("transition-all", {
                                        "rotate-180 text-[color:var(--color-primary)]": open
                                    })} viewBox="0 0 24 24" width={18.75} height={18.75}  >
                                        <path fill="currentColor" d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
                                    </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="relative" >
                                    {
                                        item.submenu.map((item, index) =>
                                            <Popover.Button onClick={item.func && (() => setModal('appearance'))} type="button" key={index} className="w-full text-[color:var(--font-color-primary)] flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--section-color-primary)]">
                                                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                                    {item.icon}
                                                </svg>
                                                {item.title}
                                            </Popover.Button>

                                        )
                                    }
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                )}
            </Popover.Panel>
        </Popover>
    )
}