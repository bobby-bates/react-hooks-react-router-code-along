import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Login from './Login'

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </BrowserRouter>
    )
}