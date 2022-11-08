import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

const Menu = () => {
  const user = "tamim";
  return (
    <div>
      <Navbar className="bg-transparent" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user?.uid ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Add Service</Dropdown.Item>
              <Dropdown.Item>My Review</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Navbar.Collapse>
              <Navbar.Link>
                <button className="btn btn-outline btn-primary rounded">
                  Login
                </button>
              </Navbar.Link>
              <Navbar.Link>
                <button className="btn btn-outline btn-primary rounded">
                  Sign Up
                </button>
              </Navbar.Link>
            </Navbar.Collapse>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/reviews">Reviews</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
