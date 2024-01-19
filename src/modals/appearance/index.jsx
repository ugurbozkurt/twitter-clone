import { Link } from "react-router-dom";
import Button from "../../components/button";
import { removeModal } from '../../store/modal/actions';
import { setBackgroundColor, setColor } from '../../store/appearance/actions';
import { useAppearance } from "../../store/appearance/hooks";
import classNames from "classnames";

export default function AppearanceModal() {

  const appearance = useAppearance();
  const colors = appearance.colorsArray;
  const bgName = appearance.backgroundColor.name;
  const colorName = appearance.colors.primary;



  function closeModal() {
    removeModal(false)
    document.body.style.overflow = 'auto'
  }
  return (
    <div className="w-[600px] h-[625px] bg-[color:var(--background-primary)] rounded-2xl" >
      <h6 className="text-[23px] text-[color:var(--font-color-primary)] font-bold text-center mt-[32px] mb-1">Customize your view</h6>
      <div className="px-8">
        <p className="text-center text-[#71767b] mb-5">These settings affect all the X accounts on this browser.</p>
        <div className="w-[470px] ml-auto mr-auto h-[106px] border border-[#2f3336] rounded-2xl items-center ">
          <div className="w-[440px] h-[108px] px-4 py-3 flex">
            <div className="flex">
              <img className="w-[40px] h-[40px] relative rounded-full" draggable="true" src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg"></img>
              <div className="w-full ml-3 flex flex-col">
                <div className="flex items-center">
                  <p className="font-bold text-[15px] text-[color:var(--font-color-primary)] ">X</p>
                  <svg viewBox="0 0 22 22" width={18.75} height={18.75} className="text-[#1d9bf0] mr-1 mt-[1px] ml-[2px] ">
                    <path fill="currentColor" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                  </svg>
                  <p className="text-[#71767b]">@X ·</p>
                  <p className="text-[#71767b] ml-1">27m</p>
                </div>
                <p className="w-[380px] leading-5 text-[color:var(--font-color-primary)] break-words text-[15px]">At the heart of X are short messages called posts — just like this one — which can include photos, videos, links, text, hashtags, and mentions like <Link to="/x" className="text-[color:var(--color-primary)] hover:underline">@X.</Link> </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-[#71767b] font-bold mt-5 mb-1">Font size</p>
        <div className="w-full h-[56px] rounded-2xl bg-[color:var(--section-color-primary)]"></div>
        <p className="text-[13px] text-[#71767b] font-bold mt-4 mb-1">Color</p>
        <div className="w-full h-[56px] rounded-2xl bg-[color:var(--section-color-primary)] gap-[55px] flex items-center justify-center">

          {colors.map((item, index) => (
            <svg key={index} onClick={() => setColor({ primary: item })} width={36} height={36} className="rounded-full flex items-center cursor-pointer">
              <g>
                <circle r="100" fill={item}></circle>
                {(colorName === item) && (
                  <g transform="translate(6, 6)">
                    <path fill="#fff" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                  </g>
                )}
              </g>
            </svg>
          ))}

        </div>
        <p className="text-[13px] text-[#71767b] font-bold mt-4 mb-1">Background</p>
        <div className="w-full h-[80px] rounded-2xl bg-[color:var(--section-color-primary)] gap-3 flex items-center justify-center">
          <button
            onClick={() => setBackgroundColor({ name: 'default', color: '#FFF', fontColor: '#0f1419',sectionColor:'#f7f9f9',hvColor : '#e7e7e8' , boxShadow : '#00000033 0px 0px 15px, #00000026 0px 0px 3px 1px' })}
            type="button"
            className={classNames("w-[160px] h-[60px] border border-[#333639]  rounded-[4px] items-center justify-center bg-white font-bold text-[#0f1419] ",
              {
                "!border-2 border-[color:var(--color-primary)]": bgName === "default"
              }
            )}>Default</button>
          <button
            onClick={() => setBackgroundColor({ name: 'dim', color: '#15202b', fontColor: '#f7f9f9',sectionColor : '#1e2732' , hvColor :'#2c3640',boxShadow : '#ffffff33 0px 0px 15px, #ffffff26 0px 0px 3px 1px' })}
            type="button"
            className={classNames("w-[160px] h-[60px] border border-[#333639] rounded-[4px] items-center text-white bg-[#15202b] justify-center font-bold",
              {
                "!border-2 border-[color:var(--color-primary)]": bgName === "dim"
              })}>Dim</button>
          <button
            onClick={() => setBackgroundColor({ name: 'lights out', color: '#000', fontColor: '#e7e9ea',sectionColor:'#16181c' , hvColor :'#181818',boxShadow : '#ffffff33 0px 0px 15px, #ffffff26 0px 0px 3px 1px' })}
            type="button"
            className={classNames("w-[160px] h-[60px] border border-[#333639] rounded-[4px] bg-[#000] text-white items-center justify-center font-bold ",
              {
                "!border-2 border-[color:var(--color-primary)]": bgName === "lights out"
              })}>Lights out</button>
        </div>

        <Button className="ml-auto mr-auto mt-5" onClick={() => (closeModal())}>Done</Button>
      </div>
    </div>
  );
}
