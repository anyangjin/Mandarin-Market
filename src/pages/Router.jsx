import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./MainPage/MainPage";
import StartPage from "./StartPage/StartPage";
import LoginPage from "./LoginPage/LoginPage";
// import SignUpPage from "./LoginAndSignUpPage/SignUpPage";
// import ErrorPage from "./LoginAndSignUpPage/Error404Page";
// // import FirstScreenPage from './LoginAndSignUpPage/IntroScreen';
// import ChatPage from "./ChatPage/ChatPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
