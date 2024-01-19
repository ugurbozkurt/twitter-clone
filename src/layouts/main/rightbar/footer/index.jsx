import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <div className="w-[350px] h-[60px] mt-5 px-4 mb-5 leading-1 relative">
                <Link to="https://www.linkedin.com/in/ugur-bozkurt-5147551b4/" className=" text-[13px] text-[#71767b] hover:underline transition-color mr-4">© 2023 ugurbozkurt.</Link>
            </div>
        </>
    )
}