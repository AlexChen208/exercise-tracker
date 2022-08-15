import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Routes, Route } from "react-router-dom"

export default function SignUpPage() {
    <Routes>
        <Route path="/signUp" element={<SignUpForm user={user} setUser={setUser}/>} />
    </Routes>
}