import Hr from "../HomePage/Hr/Hr";
import s from "./Basket.module.scss";

import basket from "../../image/basket/basket.svg";
import { NavLink } from "react-router-dom";
import BascketCard from "./BascketCard";
import { useState } from "react";

const Basket = ({ addBascketLocal }) => {

  const [bascket, setBascket] = useState(JSON.parse(localStorage.getItem('bascket')))
  
  

  return (
    <div className="container">
      <Hr title="Корзина" />
      {bascket.length == 0 ? (
        <main className={s.basket_empty}>
          <img src={basket} alt="image" />
          <p className={s.basket_empty_title}>Ваша корзина пуста</p>
          <NavLink to="/katalogsKiys" className={s.basket_empty_link}>
            Каталог
          </NavLink>
        </main>
      ) : (
        bascket
          .filter((item) => item.is_in_shopping_cart == true)
          .map((card) => (
            <div className={s.card}>
              <BascketCard addBascketLocal={addBascketLocal} {...card} />
            </div>
          ))
      )}
    </div>
  );
};

export default Basket;
