import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { app } from "./firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LaunchScreen from "./pages/LaunchScreen";
import SeolyuMouse from "./components/SeolyuMouse/SeolyuMouse";
import SeolyuClock from "./components/common/SeolyuClock";
import { AuthContextProvider } from "./components/context/AuthContext";
import { ProjectProvider } from "./components/context/ProjectContext";
import { ArtworkProvider } from "./components/context/ArtworkContext";
import { AboutmeProvider } from "./components/context/AboutmeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Desk from "./layouts/Desk";
import Paper4 from "./components/Diary/Papers/Paper4";
import Write from "./components/Diary/Papers/Write";
import DiaryPostDetail from "./components/Diary/Papers/DiaryPostDetail";

function App() {
  const auth = getAuth(app);
  const [check, setCheck] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setCheck(true);
    });
  }, [auth]);

  useEffect(() => {
    setTimeout(() => {
      setShowLaunchScreen(false);
    }, 30);
  }, []);

  return (
    <AuthContextProvider>
      <ProjectProvider>
        <ArtworkProvider>
          <AboutmeProvider>
            <div className="App">
              {showLaunchScreen ? (
                <LaunchScreen />
              ) : (
                <>
                  <SeolyuMouse />
                  <SeolyuClock />
                  <BrowserRouter>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Desk
                            isAuthenticated={isAuthenticated}
                            check={check}
                          />
                        }
                      />
                      <Route
                        path="/diary/:selectedPaper"
                        element={
                          <Desk
                            isAuthenticated={isAuthenticated}
                            check={check}
                          />
                        }
                      >
                        <Route index element={<Paper4 />} />
                        <Route path="write" element={<Write />} />
                        <Route path=":postId" element={<DiaryPostDetail />} />
                        <Route path="edit/:id" element={<Write />} />
                      </Route>
                    </Routes>
                  </BrowserRouter>
                </>
              )}
            </div>
          </AboutmeProvider>
        </ArtworkProvider>
      </ProjectProvider>
    </AuthContextProvider>
  );
}

export default App;
