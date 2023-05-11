import piramida from "../../image/filterImage/piramida.png";
import pul from "../../image/filterImage/pul.png";
import snuker from "../../image/filterImage/snuker.png";
import ecsclusive from "../../image/filterImage/ecsclusive.png";
import s from "./KatalogKiy.module.scss";

import KatalogCard from "./KatalogKiyCard";
import { dataKiyFilter } from "../data/dataKatalogCard/dataKiyKatalog";

import { Link } from "react-router-dom";

const KatalogKiy = ({ cards, setCards }) => {
  console.log(cards);

  function filterMini(category) {
    setCards([...dataKiyFilter].filter((item) => item.play === category));
  }

  return (
    <div className={s.katalogKiy}>
      <div className={s.katalog_kiy_container}>
        <Link
          onClick={() => filterMini("Пирамида")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={piramida} alt="image" />
          <p>Пирамида</p>
        </Link>
        <Link
          onClick={() => filterMini("Пул")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={pul} alt="image" />
          <p>Пул</p>
        </Link>
        <Link
          onClick={() => filterMini("Снукер")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={snuker} alt="image" />
          <p>Снукер</p>
        </Link>
        <Link
          onClick={() => filterMini("Эксклюзив")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={ecsclusive} alt="image" />
          <p>Эксклюзив</p>
        </Link>
      </div>

      <div className={s.card_container}>
        {cards.map((item) => (
          <KatalogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default KatalogKiy;
