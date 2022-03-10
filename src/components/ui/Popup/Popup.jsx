// Common
import {ThisDayInfoList} from "../../common/";

// Images
import {GlobalSvgSelector} from "../../../images/GlobalSvgSelector";

export const Popup = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <div className="popup show">
      <div className="popup__wrapper">
        <div className="popup__content">
          <div className="popup__inner">
            <div className="popup__day-temp">12°</div>
            <div className="popup__day-value">Среда</div>
            <div className="popup__day-img">
              <GlobalSvgSelector id="sun"/>
            </div>
            <div className="popup__day-time">Время: 01:54</div>
            <div className="popup__day-town">Город: Санкт-Петербург</div>
          </div>
          <ThisDayInfoList items={items}/>
          <button className="popup__close" aria-label="Закрыть модальное окно">
            <GlobalSvgSelector id="close"/>
          </button>
        </div>
      </div>
    </div>
  );
};