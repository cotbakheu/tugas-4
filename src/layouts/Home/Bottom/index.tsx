import { Link } from "react-router";

function Bottom() {
  return (
    <section className="flex py-10 px-20 justify-between items-center bg-custom-black text-off-white">
      <div>
        <p className="text-4xl">Have something in mind?</p>
        <div className="flex items-center gap-4">
          <span>
            <img src="/myself.png" alt="MyPhoto" />
          </span>
          <p className="text-4xl">let’s build it together.</p>
        </div>
      </div>
      <div>
        <Link to="/contact">
          <button className="py-4 px-10 cursor-pointer bg-white text-custom-black rounded-full">
            Get in touch
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Bottom;
