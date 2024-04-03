import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setLogin } from "../feature/loginSlice";
import { AUTH_TOKEN_KEY } from "../utilities/authUtils";

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSignOut = () => {
    dispatch(setLogin(false));
    localStorage.removeItem(AUTH_TOKEN_KEY);
    navigate("/");
  };

  return (
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
      onClick={handleOnSignOut}
    >
      Sign Out
    </button>
  );
}
