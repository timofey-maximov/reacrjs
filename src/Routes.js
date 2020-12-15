import { Home } from "./Pages/Home/Home";
import { Films } from "./Pages/Films/Films";
import { Serials } from "./Pages/Serials/Serials";
import { People } from "./Pages/People/People";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";

export const HomeUrl = "/";
export const FilmsUrl = "/movies";
export const SerialsUrl = "/serials";
export const PeopleUrl = "/people";
export const LoginUrl = "/login";
export const SignupUrl = "/signup";

export const Routes = [
    {
        title: "MovieFinder",
        url: HomeUrl,
        component: Home,
    },
    {
        title: "Фильмы",
        url: FilmsUrl,
        component: Films,
    },
    {
        title: "Сериалы",
        url: SerialsUrl,
        component: Serials,
    },
    {
        title: "Люди",
        url: PeopleUrl,
        component: People,
    },
    {
        title: "Вход",
        url: LoginUrl,
        component: Login,
    },
    {
        title: "Регистрация",
        url: SignupUrl,
        component: Signup,
    }
];