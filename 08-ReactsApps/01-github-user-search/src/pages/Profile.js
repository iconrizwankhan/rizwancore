import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Profile({ searchUsers }) {
  const [userData, setUserdata] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    const getUserdata = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${username}`,
          {
            auth: {
              username: "iconrizwankhan",
              password: "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",
            },
          }
        );
        setUserdata(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserdata();
  }, [username]);

  return (
    <div>
      <Navbar searchUsers={searchUsers}></Navbar>
      <div className="profile-container">
        <div className="profile-header">
          <img
            className="profile-avatar"
            src={userData.avatar_url}
            alt={`${userData.name}'s avatar`}
          />
          <h2>{userData.name}</h2>
          <h3>({`${username}`})</h3>
        </div>

        <div className="profile-details">
          <div className="info-section">
            <h3>Company:</h3>
            <h6>{userData.company ? userData.company : "Self-Employed"}</h6>
          </div>
          <div className="info-section">
            <h3>Location:</h3>
            <h6>{userData.location ? userData.location : "Anonymous"}</h6>
          </div>
          <div className="info-section">
            <h3>Followers:</h3>
            <h6>{userData.followers}</h6>
          </div>
          <div className="info-section">
            <h3>Following:</h3>
            <h6>{userData.following}</h6>
          </div>
          <div className="info-section">
            <h3>Portfolio:</h3>
            <a href={userData.blog} target="_blank" rel="noreferrer">
              {userData.blog}
            </a>
          </div>
          <div className="info-section">
            <h3>Available to Hire ?:</h3>
            <h6>{userData.hireable ? "Yes" : "No"}</h6>
          </div>
          <div className="info-section">
            <h3>Repos:</h3>
            <h6>{userData.repos_url}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
