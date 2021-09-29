import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

import accountIcon from "../../images/account-icon.svg";

import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <nav className="header__menu">
      <Switch>
        <Route exact path="/">
          <Link to="" className="header__button header__button_type_register">
            Регистрация
          </Link>
          <Link to="" className="header__button header__button_type_signin">
            Войти
          </Link>
        </Route>
        <Route path={["/movies", "/saved-movies"]}>
          <Link
            to="/movies"
            className="header__button header__button_type_movies"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__button header__button_type_saved-movies"
          >
            Сохраненные фильмы
          </Link>
          <Link to="/" className="header__button header__button_type_account">
            Аккаунт
          </Link>
          <img
            alt="Иконка аккаунта"
            className="header__account-icon"
            src={accountIcon}
          />
        </Route>
      </Switch>
    </nav>
  );
}
