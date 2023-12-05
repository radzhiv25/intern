import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="h-screen bg-black p-10">
        <div className="md:w-1/2 mx-auto rounded p-5 bg-slate-600">
          <h1 className="text-center md:text-3xl text-xl text-white">
            Password Generator
          </h1>
          <div className="flex py-5">
            <input
              type="text"
              value={password}
              placeholder="password"
              className="w-full outline-none p-2 bg-white rounded-l" 
              ref={passwordRef}
              readOnly
            />
            <button className="font-semibold text-white p-2 rounded-r bg-blue-600 w-1/4 outline-none shrink-0" onClick={copyPassword}>
              Copy
            </button>
          </div>
          <div className="flex md:space-x-10 md:flex-row flex-col">
            <div className="flex space-x-3">
              <input
                type="range"
                min={8}
                max={30}
                className="cursor-pointer"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="" className="text-white">
                length: {length}
              </label>
            </div>
            <div className="flex text-white space-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="NumberInput">Numbers</label>
            </div>
            <div className="flex text-white space-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="CharacterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
