import { signInAction } from "./actions";
import { push } from "connected-react-router";
import { Dispatch } from "react";
import { auth, db, FirebaseTimestamp } from "../../firebase";

export type SignInAction = {
  type: string,
  payload: {
    isSignedIn: boolean,
    uid: string,
    username: string
  }
};

export const listenAuthState = () => {
  return async (dispatch: Dispatch<any>) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;

        db.collection("users").doc(uid).get()
          .then(snapshot => {
            const data = snapshot.data();
              
            if (data) {
              dispatch(signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username
              }));
              dispatch(push("/"));
            }
          })
      } else {
        dispatch(push("/signIn"));
      }
    })
  }
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: Dispatch<any>) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;

        if (user) {
          const uid = user.uid;

          db.collection("users").doc(uid).get()
            .then(snapshot => {
              const data = snapshot.data();
              
              if (data) {
                dispatch(signInAction({
                  isSignedIn: true,
                  role: data.role,
                  uid: uid,
                  username: data.username
                }));

                dispatch(push("/"));
              }
            });
        }
    })
  };
};

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
  return async (dispatch: Dispatch<any>) => {
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください");
      return false;
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username
          };

          db.collection("users").doc(uid).set(userInitialData)
            .then(() => {
              dispatch(push("/"))
            });
        }
    })
  };
};
