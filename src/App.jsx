import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultRoute from "./components/defaultRoute/DefaultRoute.jsx";
import PublicRoute from "./components/publicRoute/PublicRoute.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Lcabinet from "./pages/lcabinet.jsx";
import Rating from "./pages/Rating.jsx";
import Reg from "./pages/Reg.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* 
          <Route exact path="/" element={<DefaultRoute />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" exact element={ <Home /> } />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/auth" exact element={ <Auth /> } />
          </Route> */}
          <Route path="/auth" exact element={ <Auth /> } />
          <Route path="/registration" exact element={ <Reg /> } />
          <Route path="/" exact element={ <Home /> } />
          <Route path="/cabinet" exact element={ <Lcabinet /> } />
          <Route path="/rating" exact element={ <Rating /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
