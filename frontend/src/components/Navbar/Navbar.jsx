import s from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import SignUp from "../../image/Group 1.svg";
import Modal from "../Modal/Modal";
import axios from "axios";

import { useState, useEffect } from "react";
import useModal from "../../useModal";
import { useDispatch, useSelector } from "react-redux";
import { loginState, logoutState } from "../../redux/slices/autorisation";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isShowingModal, setIsShowing, toggleModal] = useModal();
  const dispatch = useDispatch();
  const { autorisation, token } = useSelector(
    (state) => state.autorisationReducer
  );
  const [userName, setUserName] = useState('');
  const [Header, setNavbar] = useState(false);

  useEffect(() => {
    token.length > 0 && axios.get('https://frantsuz-shop.ru/api/users/', {
      headers: {
        "Content-Type": "application/json",
        'authorization': `Token ${token}`
      },
    })
      .then(res => {
        localStorage.setItem('name', res.data[0].first_name)
        setUserName(res.data[0].first_name);
      })

  }, [autorisation])

  const logOut = () => {
    dispatch(logoutState());
  };



  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  }, []);

  

  return (
    <nav className={Header ? `${s.header} ${s.header_active}` : `${s.header}`}>
      <div className="container">
        <div className={s.navbar}>
          <NavbarMenu />

          <div className={s.login}>
            <Modal
              setIsShowing={setIsShowing}
              isShowingModal={isShowingModal}
              onCloseButtonClick={toggleModal}
            />
            <button className={s.login__item}>
              <img className={s.image} src={SignUp} alt="image" />
            </button>
            {autorisation ? (
              <>
                <p className={s.userName}>{userName}</p>
                <NavLink className={s.pokupki} to="#">Мои покупки</NavLink>
                <NavLink to="/" onClick={logOut} className={s.login__item}>
                  Выйти
                </NavLink>
              </>
            ) : (
              <NavLink to="/modal" onClick={toggleModal} className={s.login__item}>
                Войти
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
