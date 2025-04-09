import { Link } from "react-router";

function Bio() {
  return (
    <section className="w-1/2">
      <div className="w-[200px]">
        <img src="/myself-2.png" alt="myself" className="w-full" />
      </div>
      <div className="mt-10">
        <p className="text-sm">Contact Details</p>
        <div className="text-lg">
          <Link to={"mailto:ayush.barnwal@brightscout.com"}>
            ayush.barnwal@brightscout.com
          </Link>
          <br />
          <Link to={"tel:+918651447521"}>+91 8651447521</Link>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm">Social</p>
        <ul className="text-lg flex flex-col gap-2">
          <li>
            <Link to={"https://www.linkedin.com/"}>Linkedin</Link>
          </li>
          <li>
            <Link to={"https://twitter.com/"}>Twitter</Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/"}>Instagram</Link>
          </li>
          <li>
            <Link to={"https://www.webflow.com/"}>Webflow</Link>
          </li>
          <li>
            <Link to={"https://www.figma.com/"}>Figma</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Bio;
