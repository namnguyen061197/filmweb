
import { useContext } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import LoginModal from "./components/common/LoginModal";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import DetailItem from "./pages/DetailItem";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import TvSeries from "./pages/TvSeries";
import { ThemeContext } from "./store/contexts/themeContext";

function App() {
  const {themeMode} = useContext(ThemeContext);
  return (
    <div className={`app ${themeMode.name}`}>
      <Router>
        <Header />
        <div className="main_content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/movie">
              <Movies />
            </Route>
            <Route exact path="/tv">
              <TvSeries />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/:category/:id" component = {DetailItem} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
 