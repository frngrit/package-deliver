import React from "react";

function Home() {
  return (
    <>
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.REACT_APP_NOT_SECRET_CODE}</h1>
    </>
  );
}

export default Home;
