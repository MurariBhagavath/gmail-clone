import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <EmailList />
    },
    {
      path: '/mail',
      element: <Mail />
    }
  ])
  return (

    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <RouterProvider router={router} />
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </>

  );
}

export default App;
