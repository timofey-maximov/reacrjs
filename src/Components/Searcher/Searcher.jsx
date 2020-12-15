import React from "react";
import "./Searcher.css";

export const Searcher = () => {
    return (

        <div className="main-header">

            <div className="text">

                <h1>
                    Добро пожаловать.
            </h1>

                <h2>
                    Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
            </h2>

            </div>

            <input type="search" class="poisk" placeholder="Поиск..."></input>

        </div>

    );
}