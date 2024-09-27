import axios from "axios";
import "./App.css";
import Users from "./components/Users";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("https://api.github.com/users", {
          //we can also destructure using {data}
          auth: {
            username: "fawaz-exe",
            password: "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",
          },
        });
        setTimeout(() => {
          setIsLoading(false);
          setUsers(response.data);
          setOriginalUsers(response.data);
        }, 1200);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const resetUsers = () => {
    setUsers(originalUsers); // Reset users to original data
  };

  const searchUsers = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
        {
          auth: {
            username: "fawaz-exe",
            password: "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",
          },
        }
      );
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users u={users} setUsers={setUsers} resetUsers={resetUsers} searchUsers={searchUsers} loading={loading} />,
    },
    {
      path: "/profile/:username",
      element: <Profile loading={loading} searchUsers={searchUsers} resetUsers={resetUsers} setIsLoading={setIsLoading}/>,
    },
  ]);

  return (
    <div>
      <div className="appcontainer">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
