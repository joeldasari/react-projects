import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { IoSearchSharp } from "react-icons/io5";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("joeldasari");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formattedDate, setFormattedDate] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const jsonData = await response.json();
      setUserData(jsonData);
      const date = new Date(jsonData.created_at);
      const formatter = Intl.DateTimeFormat("en-us", {
        dateStyle: "full",
      });
      setFormattedDate(formatter.format(date));
      if (jsonData.message) {
        setError(jsonData.message);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchUser();
  };
  return (
    <div className="relative flex h-max min-h-screen flex-col items-center gap-12 py-24">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        9. Github Profile Finder
      </h1>
      <form onSubmit={handleSubmit} className="flex h-max items-center gap-2">
        <input
          type="text"
          className="rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
          placeholder="Enter Github username"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          <IoSearchSharp className="h-4 w-4" />
        </button>
      </form>
      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <div className="px-12 text-sm">{error}</div>
      ) : (
        userData.login && (
          <div className="grid h-[300px] w-[600px] grid-cols-2 rounded-md border border-gray-300 shadow-md max-sm:h-max max-sm:min-h-[550px] max-sm:w-[300px] max-sm:grid-cols-1 max-sm:p-2">
            <section className="flex flex-col items-center justify-center gap-2">
              <img
                className="h-[200px] w-[200px] object-cover"
                src={userData.avatar_url}
                alt={userData.name}
              />
              <a
                target="_blank"
                className="text-blue-600 hover:underline"
                href={userData.html_url}
              >
                {userData.login}
              </a>
            </section>
            <section className="flex flex-col justify-center gap-2 p-4 text-sm">
              <p>
                <strong>Name: </strong>
                {userData.name}
              </p>
              <p>
                <strong>Public Repos:</strong> {userData.public_repos}
              </p>
              <p>
                <strong>Followers:</strong> {userData.followers}
              </p>
              <p>
                <strong>Following:</strong> {userData.following}
              </p>
              <p>
                <strong>Joined on:</strong> {formattedDate}
              </p>
              <p>
                <strong>Bio:</strong> {userData?.bio}
              </p>
            </section>
          </div>
        )
      )}
    </div>
  );
};

export default GithubProfileFinder;
