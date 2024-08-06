import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";

export function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    )
}