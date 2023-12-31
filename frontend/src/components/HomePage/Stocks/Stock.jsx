import { useDispatch } from "react-redux";
import { addToCart, increment } from "../../../redux/slices/bascketSlice";
import s from "./Stock.module.css";
import { initfavoriteIn } from "../../../redux/slices/favoritedSlice";
import favorite from "../../../api/FavoriteApi/Favorite";
import basketApi from "../../../api/basketApi/basket";
import { useEffect, useState } from 'react';


const Stock = ({ id, description, price, images, sale }) => {
  const [isAdded, setIsadded] = useState(false)
  
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const allItemsCount = localStorage.getItem('allItemsCount');

  const addToBasket = () => {
    basketApi.post(token, id).then(data => {
      dispatch(addToCart({ ...data }))
      dispatch(increment());

      allItemsCount
        ?
        localStorage.setItem('allItemsCount', JSON.stringify([...JSON.parse(allItemsCount), { ...data, itemCount: 1 }]))
        :
        localStorage.setItem('allItemsCount', JSON.stringify([{ ...data, itemCount: 1 }]))

      console.log(JSON.parse(localStorage.getItem('allItemsCount')));
    })
    setIsadded(true)
  }
  const addFavorite = async () => {
    favorite.post(token, id).then(data => {

      dispatch(initfavoriteIn({ data }))
    });
    await favorite.get(token, id).then(data => dispatch(initfavoriteIn(data)))
  }
  return (
    <div className={s.card} key={id}>
      <div className={s.imageHit_container}>
        <img className={s.imageHit} src={images[0] || null} alt="image" />
      </div>
      <div className={s.iconHit}>
        <svg
          width="28"
          height="30"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.68 6.6C0.68 4.78667 1.22667 3.34667 2.32 2.28C3.41333 1.18666 4.81333 0.639998 6.52 0.639998C8.22667 0.639998 9.62667 1.18666 10.72 2.28C11.8133 3.34667 12.36 4.78667 12.36 6.6C12.36 8.44 11.8133 9.90667 10.72 11C9.62667 12.0667 8.22667 12.6 6.52 12.6C4.81333 12.6 3.41333 12.0667 2.32 11C1.22667 9.90667 0.68 8.44 0.68 6.6ZM24.04 1.08L7.84 29H4.24L20.44 1.08H24.04ZM6.52 2.88C5.61333 2.88 4.89333 3.2 4.36 3.84C3.85333 4.45333 3.6 5.37333 3.6 6.6C3.6 7.82667 3.85333 8.76 4.36 9.4C4.89333 10.04 5.61333 10.36 6.52 10.36C7.42667 10.36 8.14667 10.04 8.68 9.4C9.21333 8.73333 9.48 7.8 9.48 6.6C9.48 5.37333 9.21333 4.45333 8.68 3.84C8.14667 3.2 7.42667 2.88 6.52 2.88ZM16 23.48C16 21.64 16.5467 20.1867 17.64 19.12C18.7333 18.0267 20.1333 17.48 21.84 17.48C23.5467 17.48 24.9333 18.0267 26 19.12C27.0933 20.1867 27.64 21.64 27.64 23.48C27.64 25.2933 27.0933 26.7467 26 27.84C24.9333 28.9333 23.5467 29.48 21.84 29.48C20.1333 29.48 18.7333 28.9467 17.64 27.88C16.5467 26.7867 16 25.32 16 23.48ZM21.8 19.76C20.8933 19.76 20.1733 20.08 19.64 20.72C19.1067 21.3333 18.84 22.2533 18.84 23.48C18.84 24.68 19.1067 25.6 19.64 26.24C20.1733 26.8533 20.8933 27.16 21.8 27.16C22.7067 27.16 23.4267 26.8533 23.96 26.24C24.4933 25.6 24.76 24.68 24.76 23.48C24.76 22.2533 24.4933 21.3333 23.96 20.72C23.4267 20.08 22.7067 19.76 21.8 19.76Z"
            fill="#0A8B6A"
          />
        </svg>
      </div>
      <div className={s.heart}>
        <svg
          onClick={addFavorite}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_934_13599)">
            <path
              d="M11.5781 4.48928L12 5.24686L12.4218 4.48928C13.475 2.59781 15.3337 1.3877 17.4545 1.3877C20.7784 1.3877 23.5 4.49808 23.5 8.29678C23.5 9.99499 22.8162 11.7467 21.7218 13.4524C20.6311 15.1522 19.166 16.7539 17.6833 18.1403C16.2032 19.5243 14.7205 20.6798 13.6065 21.49C13.05 21.8948 12.5867 22.2124 12.2633 22.4284C12.1614 22.4965 12.0735 22.5543 12.0009 22.6018C11.9282 22.554 11.8401 22.4955 11.738 22.4268C11.4145 22.2092 10.9511 21.8893 10.3945 21.4821C9.28043 20.667 7.79754 19.5054 6.31715 18.1173C4.83427 16.7269 3.36886 15.1229 2.27797 13.4256C1.18298 11.7221 0.5 9.97846 0.5 8.29678C0.5 4.49808 3.2216 1.3877 6.54546 1.3877C8.66629 1.3877 10.5249 2.59781 11.5781 4.48928Z"
              stroke="#93847F"
            />
          </g>
          <defs>
            <clipPath id="clip0_934_13599">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className={s.description}>{description}</p>
      <div className={s.sales}>
      <p className={s.price}>{price} РУБ</p>
      <p className={s.sale}>{sale} РУБ</p>
      </div>
      <div className={s.buttons}>
        <div className={s.buttons_item}>
          <button className={s.button_one}>Подробнее</button>
          {isAdded ? <div className={s.div_two}>уже добавлено в корзину</div> :
            <button className={s.button_two} onClick={addToBasket}>Добавить в корзину</button>}
        </div>
        <div className={s.buttonOneClick_container}>
          <button className={s.buttonOneClick}>Купить в один клик</button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
