
import { Route, Routes } from "react-router-dom";
// import Home from "./components/pages/Home/Home";
// import Weathers from "./components/pages/Weathers/Weathers";

import Layout from "./components/Layout/Layout";
import Homepage from "pages/Homepage/Homepage";
import Weather from "pages/Weathers/Weather";


function App(){
  return <Layout>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/weathers" element={<Weather />} />
    <Route path="*" element="Page Not Found!!!" />
  </Routes>
  </Layout>
}

export default App
