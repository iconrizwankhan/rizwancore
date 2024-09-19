import axios from "axios";
const key = ""; //add your key before running

const loginName = [];
axios
  .get(`https://api.github.com/users`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })
  .then((res) => {
    res.data.forEach((element) => {
      loginName.push(element.login);
    });
    return loginName;
  })
  .then(() => {
    loginName.forEach((ele) => {
      axios
        .get(`https://api.github.com/users/${ele}`, {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        })
        .then((res) => {
          console.log(
            `Follower count of ${res.data.name} (${ele}) is ${res.data.followers}`
          );
        });
    });
  });
