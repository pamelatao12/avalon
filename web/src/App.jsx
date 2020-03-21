import React, { useEffect, useState } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:4001");
    socket.on("FromAPI", setData);
  }, []);

  return <div>{data ? <p>Time is {data}</p> : <p>Loading...</p>}</div>;
}

export default App;
