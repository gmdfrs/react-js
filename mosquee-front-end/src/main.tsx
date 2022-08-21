import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/app/App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Donation from "./pages/Donation"
import Presentation from "./pages/Presentation"
import School from "./pages/School"
import Islam from "./pages/Islam"
import Error404 from "./pages/Error404"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="islam/" element={<Islam />} />
          <Route path="donation/" element={<Donation />} />
          <Route path="presentation/" element={<Presentation />} />
          <Route path="school" element={<School />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Layout>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
