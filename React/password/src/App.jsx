import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="h-screen bg-black p-10">
        <div className="w-1/2 mx-auto border rounded p-5">
          <h1 className="text-center text-3xl text-white">
            Password Generator
          </h1>
          <div className="flex py-5">
            <input
              type="text"
              placeholder="password"
              className="w-full outline-none p-2 bg-white rounded-l"
              readOnly
            />
            <button className="font-semibold text-white p-2 rounded-r bg-fuchsia-600 w-1/4">Copy</button>
          </div>
          <input type="range" min={8}
          max={60}
          className="cursor-pointer"/>
        </div>
      </div>
    </>
  );
}

export default App;
