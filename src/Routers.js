import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./component/componentA";
import Je from "./component/je";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
          
                <Route path="/je" element={<Je/>}/>



            </Routes>
        </BrowserRouter>
    )
}
export default Routers
