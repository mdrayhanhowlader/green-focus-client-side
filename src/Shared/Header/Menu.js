import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold text-green-700 dark:text-white">
            Green Focus
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
                  img={user?.photoURL}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/reviews">My Review</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/addservice">Add Service</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <></>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/services">Services</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/reviews">Reviews</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/blogs">Blogs</Link>
          </Navbar.Link>
          {user?.uid ? (
            <>
              <Navbar.Link>
                <Link onClick={handleSignOut}>Sign Out</Link>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to="/login">Login</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/register">Register</Link>
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
