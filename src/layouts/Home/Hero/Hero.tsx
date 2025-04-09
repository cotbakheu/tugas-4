import classNames from "classnames";
import style from "./heroStyle.module.css";

function Hero() {
  return (
    <section className="min-h-[90vh] bg-light-gray relative">
      <div
        className={classNames(
          "absolute text-4xl right-0 top-[40vh] rounded-full bg-custom-black text-off-white p-4 pr-14 flex gap-4 justify-between",
          style["greeting"]
        )}
      >
        <div className={classNames(style["greeting-hand"])}>👋 </div>
        <p>Hi, I'm Ayush</p>
      </div>
      <div className="flex justify-center">
        <img src="/hero-image.png" alt="hero image" className="w-[40vw]" />
      </div>
      <div className="absolute bottom-20">
        <div className={"overflow-hidden"}>
          <div
            className={classNames(
              "text-[150px] font-bold text-white flex pl-10 gap-10 items-center",
              style["marquee-text"]
            )}
          >
            <p> Webflow Developer </p>
            <span className="border-t-[20px] w-20 h-2 border-white"></span>
            <p> UI/UX Designer </p>
            <span className="border-t-[20px] w-20 h-2 border-white"></span>
            <p> Webflow Developer </p>
            <span className="border-t-[20px] w-20 h-2 border-white"></span>
            <p> UI/UX Designer </p>
            <span className="border-t-[20px] w-20 h-2 border-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
