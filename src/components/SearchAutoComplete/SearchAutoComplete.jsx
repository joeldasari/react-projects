import { useEffect, useState } from "react";
import { TfiArrowTopLeft } from "react-icons/tfi";

const SearchAutoComplete = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=100");
    const jsonData = await response.json();
    setUsers(jsonData.users.map((user) => user.firstName.toLowerCase()));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
    const tempInput = e.target.value;
    if (tempInput) {
      const filteredData = users.filter((user) => user.indexOf(tempInput) > -1);
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers([]);
    }
  };

  const handleClick = (user) => {
    setInput(user);
    setFilteredUsers([]);
  };

  return (
    <div
      id="10"
      onClick={() => setFilteredUsers([])}
      className="relative flex h-max min-h-screen justify-center border border-b-gray-300 py-24"
    >
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        10. Search Auto Complete
      </h1>
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-max w-[600px] text-sm max-sm:w-[300px]"
      >
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Search a name..."
          className={` w-full rounded-md ${filteredUsers.length > 0 ? "rounded-b-none" : ""} border border-gray-300 px-4 py-3 outline-none transition-shadow hover:shadow-md`}
        />
        {filteredUsers.length > 0 && (
          <ul className="rounded-b-md border bg-white shadow-lg">
            {filteredUsers.map((user, index) => (
              <li
                onClick={() => handleClick(user)}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
                key={index}
              >
                <TfiArrowTopLeft />
                {user}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
