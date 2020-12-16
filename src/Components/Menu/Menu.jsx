import React, { useCallback, useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import "./Menu.css";

export function Menu() {

    return (

        <div className="header">

            <div className="nav-container">

                <div className="logo">
                    <Link to="/"><img src="favicon.png" width="40px" /></Link>
                    <Link className="link" title="На главную" to="/">MovieFinder</Link>
                </div>

                <div className="nav-warpper">

                    <ul>

                        <li>
                            <Link className="link" to="/movies">Фильмы</Link>
                        </li>
                        <li>
                            <Link className="link" to="/serials">Сериалы</Link>
                        </li>
                        <li>
                            <Link className="link" to="/people">Люди</Link>
                        </li>
                        <li>
                            <Link className="link" to="/login">Вход</Link>
                        </li>
                        <li>
                            <Link className="link" to="/signup">Регистрация</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>

    );
}
