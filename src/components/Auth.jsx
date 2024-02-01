/* eslint-disable react/prop-types */
import {auth , provider } from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth"

import Cookies from "universal-cookie"
const cookies = new Cookies()

function Auth({setIsAuth}) {

    const signInwithGoogle = async () =>{
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result)
            cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true)
            
        } catch (error) {
            console.error(error, "error");
        }
    }

  return (
    <div className="text-center mt-40">
      <p className="text-3xl " >Sign in with Google</p>
      <button
      onClick={signInwithGoogle}
      className="btn btn-primary capitalize text-xl tracking-tighter mt-24"
      >Sign in with Google</button>
    </div>
  )
}

export default Auth
