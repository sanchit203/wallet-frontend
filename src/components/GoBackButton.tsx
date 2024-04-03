import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in history
  };
  return (
    <button
      type="button"
      className="flex items-center justify-center px-3 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg gap-x-2 hover:bg-gray-300"
      onClick={goBack}
    >
      <svg
        className="w-5 h-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      <span>Go back</span>
    </button>
  );
}
