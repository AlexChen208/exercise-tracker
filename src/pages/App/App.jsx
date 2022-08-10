import "./App.css";
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import WorkoutDetail from "../WorkoutDetail/WorkoutDetail"
import * as workOutsAPI from '../../utilities/workouts-api'
export default function App() {
  const [user, setUser] = useState(getUser());
  const [workouts, setWorkOuts] = useState(null)

  useEffect(function() {
    async function getWorkout() {
        let workout = await workOutsAPI.getAllWorkouts()
        console.log(workout)
        setWorkOuts(workout)
    }
    getWorkout()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/detail" element={<WorkoutDetail user={user} setUser={setUser} workouts={workouts}/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
