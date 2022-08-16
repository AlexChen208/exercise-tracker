import "./App.css";
import { useState} from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import WorkoutDetail from "../WorkoutDetail/WorkoutDetail"
import AuthPage from "../AuthPage/AuthPage"
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
    <main>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<WorkoutDetail user={user} setUser={setUser}/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
    </>
  );
}
