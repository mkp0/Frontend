import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import { GlobalStyles } from "./Assets/styles/GlobalStyles";
import Footer from "./Components/Footer/Footer";
import client from "./utils/Connection";

function App() {
  useEffect(() => {
    client
      .get("/")
      .then((val) => {
        console.log(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {Routes.map((item) => (
            <Route
              key={item.id}
              exact={item.exact}
              path={item.path}
              component={item.component}
            ></Route>
          ))}
        </Switch>
      </Router>
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
