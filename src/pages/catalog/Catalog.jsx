import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Equipment from 'components/equipment/Equipment';
// import Vehicletype from 'components/vehicletype/Vehicletype';
import CatalogCart from 'components/catalogcart/Catalogcart'; // Компонент для отображения элементов каталога
import Loader from 'components/loader/Loader'; // Компонент для отображения индикатора загрузки
import {
  CatalogSection,
  CatalogListAll,
  Redbutton,
  Loadmore,
  Subtitle,
  Towninput,
  CatalogSide,
  Options,
} from './CatalogStyled'; // Стили и компоненты, используемые для стилизации страницы каталога
import { fetchVans } from '../../store/creator'; // Действие для загрузки товаров из хранилища

const Catalog = () => {
  const dispatch = useDispatch(); // Хук для получения функции диспетчера Redux
  const { vans } = useSelector(state => state.vans); // Хук для получения списка товаров из хранилища Redux
  const [visibleVans, setVisibleVans] = useState([]); // Список видимых товаров
  const [selectedCity, setSelectedCity] = useState(''); // Выбранный город
  const [cities, setCities] = useState([]); // Список городов, доступных для выбора
  const [showDropdown, setShowDropdown] = useState(false); // Флаг для отображения выпадающего списка
  const [isLoading, setIsLoading] = useState(true); // Флаг загрузки данных
  const dropdownRef = useRef(null); // Ссылка на элемент выпадающего списка

  // Загрузка товаров при первом отображении компонента или после обновления списка
  useEffect(() => {
    if (!vans.length) {
      dispatch(fetchVans()).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, vans]);

  // Обновление списка доступных городов при изменении списка товаров
  useEffect(() => {
    const uniqueCities = [...new Set(vans.map(van => van.location))];
    setCities(uniqueCities);
  }, [vans]);

  // Функция для загрузки следующей порции товаров при нажатии на кнопку "Загрузить еще"
  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextIndex = currentIndex + 4;
    setVisibleVans([
      ...visibleVans,
      ...filteredVans.slice(currentIndex, nextIndex),
    ]);
  };

  // Функция для выбора города и фильтрации товаров по выбранному городу
  const handleCitySelect = city => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  // Фильтрация товаров по выбранному городу или отображение всех товаров, если город не выбран
  const filteredVans = selectedCity
    ? vans.filter(van => van.location === selectedCity)
    : vans;

  // Обновление видимых товаров при изменении фильтрованных товаров или видимых товаров
  useEffect(() => {
    const newVisibleVans = filteredVans.slice(0, 4);
    if (JSON.stringify(newVisibleVans) !== JSON.stringify(visibleVans)) {
      setVisibleVans(newVisibleVans);
    }
  }, [filteredVans, visibleVans]);

  // Обработка кликов вне выпадающего списка для его закрытия
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Отображение индикатора загрузки во время загрузки данных
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CatalogSection>
        <aside>
          <div>
            <Subtitle>Location</Subtitle>
            <div ref={dropdownRef}>
              <Towninput onClick={() => setShowDropdown(!showDropdown)}>
                {selectedCity || 'All Cities'}
              </Towninput>
              {showDropdown && (
                <Options>
                  <li onClick={() => handleCitySelect('')}>All Cities</li>
                  {cities.map(city => (
                    <li key={city} onClick={() => handleCitySelect(city)}>
                      {city}
                    </li>
                  ))}
                </Options>
              )}
            </div>
          </div>
          <div>
            <Subtitle>Filters</Subtitle>
            {/* <Equipment />

            <Vehicletype /> */}
            <Redbutton>Search</Redbutton>
          </div>
        </aside>
        <CatalogSide>
          <CatalogListAll>
            {visibleVans.map(van => (
              <CatalogCart key={van._id} van={van} />
            ))}
          </CatalogListAll>
          {filteredVans.length > visibleVans.length && (
            <Loadmore onClick={handleLoadMore}>Load more</Loadmore>
          )}
        </CatalogSide>
      </CatalogSection>
    </>
  );
};

export default Catalog;
