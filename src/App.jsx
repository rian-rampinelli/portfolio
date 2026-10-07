import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
             <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
         <Analytics />
        </>    
    )
}

export default App;