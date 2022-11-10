import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../img/footer.png";

const Bottom = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src={img}
            alt="Flowbite Logo"
            name="Green Focus"
          />
          <Footer.LinkGroup>
            <Footer.Link>
              <Link to="/services">Services</Link>
            </Footer.Link>
            <Footer.Link>
              <Link to="/blogs">Blogs</Link>Privacy Policy
            </Footer.Link>
            <Footer.Link>
              <Link to="/about">About us</Link>Licensing
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright to="/" by="Green Focus™" year={2022} />
      </div>
    </Footer>
  );
};

export default Bottom;
