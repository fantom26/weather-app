import Select from 'react-select'

// UI
import {Container} from "../../ui/";

// Images
import {GlobalSvgSelector} from "../../../images/GlobalSvgSelector";

// Theme
import {Theme} from '../../../context/ThemeContext';
import {useTheme} from '../../../hooks/useTheme';

export const Header = () => {
  const theme = useTheme();

  const options = [
    {value: 'city-1', label: 'Киев'},
    {value: 'city-2', label: 'Мадрид'},
    {value: 'city-3', label: 'Харьков'}
  ]

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '195px',
      height: '35px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    menuList: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      padding: '2px 8px',
      height: '35px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      cursor: 'pointer'
    }),
    placeholder: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#7a7a7a' : 'rgba(71, 147, 255, 0.2)',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__left">
            <div className="header__logo">
              <GlobalSvgSelector id="logo"/>
            </div>
            <div className="header__title">React weather</div>
          </div>
          <div className="header__right">
            <button className="header__btn" onClick={changeTheme}>
              <GlobalSvgSelector id="theme-change"/>
            </button>
            <div className="header__select">
              <Select defaultValue={options[0]} options={options} styles={colourStyles} components={{
                IndicatorSeparator: () => null
              }}/>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
