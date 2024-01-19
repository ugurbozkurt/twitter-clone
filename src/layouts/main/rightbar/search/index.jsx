import { useRef, useState } from "react"
import { useClickAway } from 'react-use';

export default function Search() {

    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)

    const [isInputFocused, setIsInputFocused] = useState(false)

    const ref = useRef()
    useClickAway(ref, () => {
        setFocus(false)
    })

    const inputRef = useRef()
    
    const handleButtonClick = () => {
        setIsInputFocused(true)
        setQuery('')
        inputRef.current.focus()
    }

    return (
        <div ref={ref} className="sticky bg-[color:var(--background-primary)] top-0 z-10 ">
            <div className="items-center h-[40px] flex rounded-full mb-3 mt-[5px] max-w[350px] bg-[color:var(--section-color-primary)] text-[#71767b] relative group focus-within:inner-border inner-border-[color:var(--color-primary)] focus-within:bg-[color:var(--section-color-primary)] ">
                <svg
                    viewBox="0 0 24 24"
                    width={44} height={18.75}
                    className="ml-[10.8px] -mt-0.5 group-focus-within:text-[color:var(--color-primary)] " >
                    <path
                        fill="currentColor"
                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
                </svg>
                <input
                    id="search"
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    className="w-[260px] h-[30px] border-transparent bg-[color:var(--section-color-primary)] rounded-2xl text-[color:var(--font-color-primary)] p-[9px] outline-none placeholder:text-[color:var(--font-color-primary)]"
                    value={query}
                    autoFocus={isInputFocused}
                    onFocus={() => setFocus(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                />

                {(query && focus) && (
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-[color:var(--section-color-primary)] absolute top-1/2 -translate-y-1/2 right-[12.3px]">
                        <svg
                            viewBox="0 0 15 15"
                            width={10} height={10} >
                            <path
                                fill="currentColor"
                                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
                        </svg>
                    </button>
                )}

            </div>
            {focus && (
                <div className="w-[350px] bg-[color:var(--section-color-primary)] absolute text-center shadow-box rounded-lg transition-colors -translate-y-[12px] max-h-[calc(80vh-53px)] text-center min-h-[100px]">
                    {!query && (
                        <p className="w-full mt-5 text-[#71767b] text-[15px]">Try searching for people, lists, or keywords</p>
                    )}

                    {query && (
                        <div className="min-h-[52px] break-words whitespace-break-spaces text-justify text-ellipsis p-5 mt-[3px] text-[15px] text-[color:var(--font-color-primary)] transition-colors hover:bg-[#71767b] hover:cursor-pointer">
                            Search for "{query}"
                        </div>

                    )}

                </div>
            )}
        </div>
    )
}