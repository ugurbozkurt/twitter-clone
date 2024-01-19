import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ as, children, variant, className, size, ...props }) {
    return createElement(as, {
        tpye: 'button',
        className: classNames("cursor-pointer rounded-full flex items-center justify-center transition-colors font-bold ", {
            "px-4 h-9": size === 'normal',
            "px-4 text-[17px] h-[52px] w-full": size === 'large',
            "px-4 text-[14px] h-[32px] outline-none w-full": size === 'small',
            "bg-[color:var(--color-primary)]  text-white hover:opacity-90": variant === "primary",
            "bg-[#EFF3F4] text-[#0F1419]  hover:bg-[#d7dbdc]  ": variant === "white",
            "bg-transparent border border-[#536471]  text-[#EFF3F4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === "white-outline",
            [className]: true
        }), ...props
    }, children)
}

Button.propTypes = {
    as: PropTypes.any,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
    props: PropTypes.object,
    className: PropTypes.string
}

Button.defaultProps = {
    as: 'button',
    size: 'normal',
    variant: 'primary'
}
