import { useState } from "react";

function Testimonials() {
  const [testiData] = useState([
    {
      name: "Ayush Raj",
      image: "/testi-user.png",
      designation: "VP of Marketing @ Webflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Cattoni",
      image: "/testi-user-2.png",
      designation: "Founder @ CopyPossy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  return (
    <section className="flex py-6 px-20" id="Testimonials">
      <p className="text-4xl w-1/3">Testimonials</p>
      <div className="w-2/3">
        {testiData.map((item, index) => (
          <div key={index} className="mb-20">
            <p className=" text-2xl leading-[140%]">{item.description}</p>
            <div className="flex gap-4 mt-8 items-center">
              <div>
                <img src={item.image} alt="user" />
              </div>
              <div>
                <div className="font-bold text-sm">{item.name}</div>
                <p className="text-sm">{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
