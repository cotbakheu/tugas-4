import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-custom-black text-off-white flex justify-between py-4 px-20">
      <p>Build with 💖 by Brightscout & Ayush </p>
      <ul className="flex justify-end gap-10">
        <li>
          <Link to="www.linkedin.com">
            <p>Linkedin</p>
          </Link>
        </li>
        <li>
          <Link to="www.x.com">
            <p>Twitter</p>
          </Link>
        </li>
        <li>
          <Link to="www.instagram.com">
            <p>Instagram</p>
          </Link>
        </li>
        <li>
          <Link to="www.webflow.com">
            <p>Webflow</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
