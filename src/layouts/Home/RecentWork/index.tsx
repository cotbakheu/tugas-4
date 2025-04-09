import classNames from "classnames";
import { useState } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

import style from "./recentWork.module.css";

function RecentWork() {
  const [works] = useState([
    {
      title: "Decodable.co",
      tags: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      title: "Gofirefly.io",
      tags: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      title: "Blinkops.com",
      tags: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      title: "Withkanvas.com",
      tags: ["Brand Design", "Webflow Development", "Web Design"],
    },
  ]);

  const [workImages] = useState([
    "/work-1.png",
    "/work-2.png",
    "/work-3.png",
    "/work-4.png",
  ]);

  return (
    <section id="work">
      <div className="flex py-6 px-20">
        <p className="text-4xl w-1/3">Recent Work</p>
        <div className="w-2/3 flex flex-col gap-10">
          {works.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-6xl mb-8">{item.title}</p>
                  <p className="text-base">{item.tags.join(" - ")}</p>
                </div>
                <div>
                  <Link
                    to={"/"}
                    className="rounded-full w-20 h-20 flex justify-center items-center border border-dark-gray hover:bg-dark-gray hover:text-white"
                  >
                    <MdOutlineArrowOutward className="text-4xl" />
                  </Link>
                </div>
              </div>

              {index < 3 && <hr className="border-gray-200 mt-8" />}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full overflow-hidden">
        <div
          className={classNames("flex gap-10 pl-10", style["marquee-slide-1"])}
        >
          {[...workImages, ...workImages].map((item, index) => (
            <div key={index} className="p-10 w-[30vw] bg-slime">
              <img
                key={index}
                src={item}
                alt="recent work"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="w-full overflow-hidden">
        <div
          className={classNames("flex gap-10 pr-10", style["marquee-slide-2"])}
        >
          {[...workImages, ...workImages].map((item, index) => (
            <div key={index} className="p-10 w-[30vw] bg-slime">
              <img
                key={index}
                src={item}
                alt="recent work"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
