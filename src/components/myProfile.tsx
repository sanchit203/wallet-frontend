import GoBackButton from "./GoBackButton";
import Header from "./mainHeader";

export default function MyProfile() {
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
              <p className="mb-1">Name: John Jacobs</p>
              <p className="mb-1">Mobile No.: 9732498471</p>
              <p>E-mail: blabla@123.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
