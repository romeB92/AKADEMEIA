import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import {Calendar} from "./pages/calendar";
import { Courses } from "./pages/courses";
import { Login } from "./pages/login";
import { AgoraFI } from "./pages/agorafi";
import { EMail } from "./pages/email";
import { Garden } from "./pages/thegarden";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";
import { About } from "./pages/about";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                    <Route element={<Login />} path="/" />
                    <Route element={<Calendar />} path="/calendar" />
                    <Route element={<Courses />} path="/courses" />
                    <Route element={<Home />} path="/home" />
                    <Route element={<AgoraFI />} path="/agorafi" />
                    <Route element={<EMail />} path="/email" />
                    <Route element={<Garden />} path="/thegarden" />
                    <Route element={<Profile />} path="/profile" />
                    <Route element={<Settings />} path="/settings" />
                    <Route element={<About />} path="/about" />
                    <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
