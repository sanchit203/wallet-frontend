import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setLogin } from "../feature/loginSlice";
import { AUTH_TOKEN_KEY, isAdmin } from "../utilities/authUtils";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnSignOut = () => {
    dispatch(setLogin(false));
    localStorage.removeItem(AUTH_TOKEN_KEY);
    navigate("/");
  };

  return (
    <header
      className="flex w-full items-center justify-between px-4 py-4 bg-white shadow-md"
      style={{ height: 70 }}
    >
      <Link to="/">
        <img className="w-30 h-8 ml-1" src="/images/logo.png" alt="logo" />
      </Link>

      <div>
        <div className="block md:hidden">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img className="w-10 h-10 ml-8" src="/images/user.png" alt="logo" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            {isAdmin() && (
              <Link to="/admin">
                <MenuItem onClick={handleClose}>Admin</MenuItem>
              </Link>
            )}
            <Link to="/my-profile">
              <MenuItem onClick={handleClose}>My profile</MenuItem>
            </Link>
            <Link to="/bank-details">
              <MenuItem onClick={handleClose}>Bank details</MenuItem>
            </Link>
            <MenuItem onClick={handleOnSignOut}>Sign out</MenuItem>
          </Menu>
        </div>

        <div className="flex gap-x-1 text-lg font-bold">
          <div className="hidden md:block" id="profileMenu">
            <div className="flex space-x-2 mr-2">
              {isAdmin() && (
                <Link to="/admin">
                  <button
                    type="button"
                    className="text-gray-600 bg-white hover:bg-blue-100 border border-blue-400 font-medium rounded-full text-sm px-3 py-2.5"
                  >
                    ADMIN
                  </button>
                </Link>
              )}
              <Link to="/my-profile">
                <button
                  type="button"
                  className="text-gray-600 bg-white hover:bg-blue-100 border border-blue-400 font-medium rounded-full text-sm px-3 py-2.5"
                >
                  MY PROFILE
                </button>
              </Link>
              <Link to="/bank-details">
                <button
                  type="button"
                  className="text-gray-600 bg-white hover:bg-blue-100 border border-blue-400 font-medium rounded-full text-sm px-3 py-2.5"
                >
                  BANK DETAILS
                </button>
              </Link>
              <SignOutButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
