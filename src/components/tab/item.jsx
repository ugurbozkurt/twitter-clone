import { useTab } from "./context"

import PropTypes from "prop-types"
import classNames from "classnames"

export default function Item({ children, id }) {

    const { active, setActive } = useTab()
    return (
        <button
            type="button"
            onClick={() => setActive(id)}
            className={classNames("flex-auto text-[#71767b] text-center text-[color:var(--font-color-primary)] hover:bg-[color:var(--hv-color-primary)] transition-colors ", {
                "font-bold": active === id
            })}
        >
            <div className="h-[3.313rem] relative inline-flex items-center">
                {children}
                {active === id && (
                    <div className="h-[4px] absolute bottom-0 left-0 rounded-full w-full bg-[color:var(--color-primary)]"></div>
                )}
            </div>

        </button>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}