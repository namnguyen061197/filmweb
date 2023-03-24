
import { useContext } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import LoginModal from "./components/common/LoginModal";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import TvSeries from "./pages/TvSeries";
import { ThemeContext } from "./store/contexts/themeContext";

function App() {
  const {themeMode , toggleThemeMode} = useContext(ThemeContext);
  return (
    <div className={`app ${themeMode}`}>
      <Router>
        <Header />
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv">
            <TvSeries />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
 