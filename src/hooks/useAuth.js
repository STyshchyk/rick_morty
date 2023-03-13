import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {app, provider} from "../firebase"
import {getAuth, signInWithPopup, signOut} from "firebase/auth";
import {removeUser, setUser} from "../store/slices/userSlice";

export function useAuth() {
    const {email,  error} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const auth = getAuth(app);

    function handleLogin() {
        if (auth.currentUser) {
            signOut(auth).then(() => {
                dispatch(removeUser())
            }).catch((error) => {
                console.log("// An error happened.", error)
            });
            return;
        }
        signInWithPopup(auth, provider)
            .then((cred) => {
                dispatch(setUser({
                    email: cred.user.email,
                    token: cred.user.accessToken,
                    id: cred.user.uid
                }))
                console.log("signed")
            }).catch((error) => {
            console.log(error)
        })
    }
    React.useEffect(()=>{
         auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                dispatch(setUser({
                    email: maybeUser.email,
                    token: maybeUser.accessToken,
                    id: maybeUser.uid
                }))
            }
        })

    })

    return {isAuth: !!email, error: error, email: email, handleLogin}
}