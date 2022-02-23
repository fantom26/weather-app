import cloud from "../../../images/cloud.png"
import {ThisDayInfoList} from "../ThisDayInfoList/ThisDayInfoList";

export const ThisDayInfo = () => {
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
    <div className="thisDayInfo">
      <div className="thisDayInfo__decor">
        <img src={cloud} alt="Облако"/>
      </div>
      <ThisDayInfoList items={items}/>
    </div>
  );
};