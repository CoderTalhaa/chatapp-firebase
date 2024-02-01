import { useState } from "react";
import Auth from "./components/Auth";

import Cookies from "universal-cookie";
import { useRef } from "react";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef();

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null)
  }

  if (!isAuth) {
    return (
      <>
        <h1 className="text-4xl font-semibold font-serif tracking-wide text-center py-3 bg-cyan-950">
          Dark Hub
        </h1>

        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <label>Enter Room Name: </label>
          <input type="text" ref={roomInputRef} />
          <button
            className="btn"
            onClick={() => setRoom(roomInputRef.current.value)}
          >
            Enter Chat
          </button>
        </div>
      )}
      <div>
        <button onClick={signUserOut} >Sign Out</button>
      </div>
    </>
  );
}

export default App;
