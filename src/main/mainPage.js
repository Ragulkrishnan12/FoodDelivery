import React from "react";

function MainPage() {
  const handler = (r) => {
    console.log(r);
  };

  return (
    <div>
      <label>Name</label> <input placeholder=" Enter name "></input>
      <label>password</label> <input placeholder=" Enter Password "></input>
      <button onClick={handler}>submit</button>
    </div>
  );
}
export default MainPage;
