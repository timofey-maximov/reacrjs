import { FilmsRoute, HomeRoute, LoginRoute, PeopleRoute, SerialsRoute, SignupRoute } from "./Routes";

export const MainMenu = [{
    title: "MovieFinder",
    url: HomeRoute,
    showInMenu: true,
},
{
    title: "Фильмы",
    url: FilmsRoute,
    showInMenu: true,
},
{
    title: "Сериалы",
    url: SerialsRoute,
    showInMenu: true,
},
{
    title: "Люди",
    url: PeopleRoute,
    showInMenu: true,
},
{
    title: "Вход",
    url: LoginRoute,
    showInMenu: true,
},
{
    title: "Регистрация",
    url: SignupRoute,
    showInMenu: true,
},
];