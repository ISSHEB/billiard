import React from "react";
import { Link } from "react-router-dom";

import f from "./Footer.module.scss";

import Logo from "../../image/logo.png";
import Logo2 from "../../image/logo2.svg";
import Logo3 from '../../image/logo (1).png'
import tel from "../../image/tel.svg";
import Mail from "../../image/mail.svg";
import Geol from "../../image/bi_geo-alt-fill.svg";
import icon_time from "../../image/icon_time.svg";

import img1 from "../../image/footer__img1.png";
import img2 from "../../image/footer__img2.png";
import img3 from "../../image/footer__img3.png";
import img4 from "../../image/footer__img4.png";
import img5 from "../../image/footer__img5.png";
import img6 from "../../image/footer__img6.png";
import img7 from "../../image/footer__img7.png";
import img8 from "../../image/footer__img8.png";
import img9 from "../../image/footer__img9.png";
import img10 from "../../image/footer__img10.png";
import img11 from "../../image/dalikhinkali.png";
import img12 from "../../image/khleb.png";

function Footer() {
  return (
    <>
      <div className={f.section__footer} id="footer">
        <div className="container">
          <div className={f.footer}>
            <div className={f.footer__logos}>
              <img src={Logo} alt="logo" className={f.footer__logo} />
              <img src={Logo2} alt="logo" className={f.footer__logo} />
            </div>

            

              <div className={f.footer__info_port}>
                <p className={f.footer__info_item_title}>Наши проекты</p>

                <div className={f.footer__info_port_imgs}>
                  <Link to="">
                    <img
                      src={img2}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img1}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img6}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img8}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img9}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img5}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img4}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={Logo3}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img10}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>
                  <Link to="">
                    <img
                      src={img11}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>
                  <Link to="">
                    <img
                      src={img12}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>

                  <Link to="">
                    <img
                      src={img3}
                      alt="img"
                      className={f.footer__info_port_imgs_img}
                    />
                  </Link>
                </div>
              </div>
            <p className={f.footer__info_item_title}>Контакты</p>
            <div className={f.footer__info}>
              
              <div className={f.footer__info_item}>
                


                <p className={f.footer__info_item_text}>
                  Развлекательный комплекс “Француз”
                </p>

                <div className={f.footer__info_item_geo}>
                  <img src={Geol} alt="svg" />
                  <p className={f.footer__info_item_geo_text}>
                    г. Москва ул. Сталеваров, 14к1
                  </p>
                </div>

                <div className={f.footer__info_item_contacts}>
                  <div className={f.footer__info_item_contacts_tel}>
                    <img src={tel} alt="svg" />
                    <Link to="tel:+7(968)091-55-50">+7(968)091-55-50</Link>
                  </div>
                </div>
                <p className={f.footer__info_item_mode}>
                  <img src={icon_time} alt="icon" /> Режим работы с 11:00 до
                  23:00
                </p>
                <div className={f.footer__info_item_mail}>
                  <img src={Mail} alt="svg" />
                  <Link
                    className={f.footer__info_item_mail_text}
                    to="mailto:frantsuz-shop.ru">
                    frantsuz-shop.ru
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={f.footer__bottom}>
        <div className="container">
          <div className={f.bottom}>
            <p className={f.bottom_left}>ИП Авалян. В. Г.<br/> ИНН: 502807103555</p>

            <p className={f.bottom_right}>
              <span> Политика конфиденциальности</span>
              <span>Не является публичной офертой</span>
              <span>© Все права защищены</span>
            </p>

            <p className={f.bottom_center}>Сделано WeTop digital agency 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
