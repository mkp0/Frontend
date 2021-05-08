import HomePage from "../../Pages/HomePage/HomePage";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/Login";
import Game1 from "../../Pages/Game1/Game1";
import Game3 from "../../Pages/Game3/Game3";
export const Routes = [
  {
    id: 1,
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    id: 2,
    component: Game1,
    path: "/game1",
    exact: true,
  },
  {
    id: 3,
    component: Game3,
    path: "/game3",
    exact: true,
  },
  {
    id: 4,
    component: SignUp,
    path: "/signup",
    exact: true,
  },
  {
    id: 5,
    component: LogIn,
    path: "/login",
    exact: true,
  },
];
