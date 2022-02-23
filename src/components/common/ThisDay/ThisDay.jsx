import {GlobalSvgSelector} from "../../../images/GlobalSvgSelector";

export const ThisDay = () => {
  return (
    <div className="thisDay">
      <div className="thisDay__top">
        <div className="thisDay__inner">
          <div className="thisDay__value">
            20°
          </div>
          <div className="thisDay__day">
            Сегодня
          </div>
        </div>
        <div className="thisDay__img">
          <GlobalSvgSelector id="sun"/>
        </div>
      </div>
      <div className="thisDay__time">Время: 21:54</div>
      <div className="thisDay__town">Город: Санкт-Петербург</div>
    </div>
  );
};