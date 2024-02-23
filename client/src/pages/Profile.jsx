import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto ">
      <h1 className="font-semibold text-center my-7 text-3xl">Profile</h1>
      <form className="flex flex-col p-7 gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full w-22 h-22 self-center mt-2 object-cover cursor-pointer"
        />
        <input
          placeholder="username"
          type="text"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          placeholder="email"
          type="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          placeholder="password"
          id="password"
          type="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
         <form>
          <div className="flex justify-between mt-2">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign out</span>
          </div>
         </form>

      </form>
    </div>
  );
}
