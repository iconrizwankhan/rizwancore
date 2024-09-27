import axios from "axios";
import "./App.css";
import Users from "./components/Users";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users", 
          
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const searchUsers = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
       
      );
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users u={users} searchUsers={searchUsers}/>,
    },
    {
      path: "/profile/:username",
      // element: <Profile userData={userData} setUserdata={setUserdata} />,
      element: <Profile/>,

    },
  ]);

  return (
    <div className="appcontainer">
      {/* <RouterProvider router={router}> */}
        <RouterProvider router={router} />
      {/* </RouterProvider> */}
    </div>
  );
}

export default App;
