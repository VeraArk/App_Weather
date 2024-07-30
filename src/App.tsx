import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Weathers from "./components/pages/Weathers/Weathers";

import Layout from "./components/Layout/Layout";



function App(){
  return <Layout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/weathers" element={<Weathers />} />
    <Route path="*" element="Page Not Found!!!" />
  </Routes>
  </Layout>
}

export default App
