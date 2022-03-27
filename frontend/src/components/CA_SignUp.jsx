import React, { useState } from "react";
function CA_SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setUserInfo((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  }

  const postData = async () => {
    const { name, email } = userInfo;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    const data = res.json();
    console.log(data);
  };

  function handleClick(event) {
    postData();
    setUserInfo({
      name: "",
      email: "",
    });
    event.preventDefault();
  }
  return (
    <form method="POST">
      <p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={userInfo.name}
        />
      </p>
      <p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={userInfo.email}
        />
      </p>
      <button onClick={handleClick}>SignUp</button>
    </form>
  );
}

export default CA_SignUp;
