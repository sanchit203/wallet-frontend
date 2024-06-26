import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import GoBackButton from "./GoBackButton";
import Header from "./mainHeader";
import { profileSliceThunk } from "../feature/profileSlice";

export default function MyProfile() {
  const profileData = useAppSelector(state => state.profileSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileSliceThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <GoBackButton />
        <h1 className="text-3xl mt-4 font-semibold flex justify-center">
          My Profile
        </h1>
        <div className="flex justify-center">
          <div className="w-[400px] user mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
            <div className="p-1.5 font-semibold text-gray-500 text-center gap-y-12 w-full">
              <div className="w-full flex justify-center">
                <div className="h-[120px] w-[120px] mb-6 bg-blue-200 p-4 rounded-full">
                  <img src="/images/profile.png" />
                </div>
              </div>
              <p className="mb-4 bg-gray-200 p-2 rounded-full">{profileData.username}</p>
              <div className="mb-1 flex justify-center">
                <p>
                  Name:&nbsp;
                </p>
                <p className="font-semibold">
                  {profileData.name}
                </p>
              </div>
              <div className="mb-1 flex justify-center">
                <p>
                  Mobile No.:&nbsp;
                </p>
                <p className="font-semibold">
                  {profileData.phoneNumber}
                </p>
              </div>
              <div className="mb-1 flex justify-center">
                <p>
                  E-mail:&nbsp;
                </p>
                <p className="font-semibold">
                  {profileData.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
