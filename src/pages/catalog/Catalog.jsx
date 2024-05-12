import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Equipment from 'components/equipment/Equipment';
import CatalogCart from 'components/catalogcart/Catalogcart';
import Loader from 'components/loader/Loader';
import {
  CatalogSection,
  CatalogListAll,
  Redbutton,
  Loadmore,
  Subtitle,
  Towninput,
  CatalogSide,
  Options,
} from './CatalogStyled';
import { fetchVans } from '../../store/creator';

const Catalog = () => {
  const dispatch = useDispatch();
  const { vans } = useSelector(state => state.vans);
  const [visibleVans, setVisibleVans] = useState([]);
  const [selectedCity, setSelectedCity] = useState(''); // Выбранный город
  const [cities, setCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

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
  // const handleLoadMore = () => {
  //   const currentIndex = visibleVans.length;
  //   const nextIndex = currentIndex + 4;
  //   const newVisibleVans = [
  //     ...visibleVans,
  //     ...filteredVans.slice(currentIndex, nextIndex),
  //   ];
  //   console.log('Visible vans after load more:', newVisibleVans);
  //   setVisibleVans(newVisibleVans);
  // };
  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextIndex = currentIndex + 4;
    const newVisibleVans = [
      ...visibleVans,
      ...filteredVans.slice(currentIndex, nextIndex),
    ];
    console.log('Visible vans after load more:', newVisibleVans);
    setVisibleVans(newVisibleVans);
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

  const handleSearch = () => {
    // Проверяем, есть ли выбранные категории
    if (selectedCategories.length === 0) {
      // Если нет, просто возвращаем все товары
      setVisibleVans(vans);
      return;
    }

    // Фильтрация товаров на основе выбранных категорий
    const filteredVans = vans.filter(van => {
      // Проверка каждой категории и соответствующая фильтрация
      const acFilter =
        selectedCategories.includes('AC') && van.details.airConditioner !== '';
      console.log('AC filter:', acFilter);

      const automaticFilter =
        selectedCategories.includes('Automatic') && van.engine !== '';
      console.log('Automatic filter:', automaticFilter);

      const kitchenFilter =
        selectedCategories.includes('Kitchen') && van.details.kitchen !== '';
      console.log('Kitchen filter:', kitchenFilter);

      const tvFilter =
        selectedCategories.includes('TV') && van.details.tv !== '';
      console.log('TV filter:', tvFilter);

      const showerWCFilter =
        selectedCategories.includes('Shower/WC') &&
        van.details.shower !== '' &&
        van.details.toilet !== '';

      return (
        acFilter ||
        automaticFilter ||
        kitchenFilter ||
        tvFilter ||
        showerWCFilter
      );
    });

    // Обновление списка видимых товаров
    console.log('Visible vans after search:', filteredVans);
    setVisibleVans(filteredVans);
  };

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
            <Equipment handleFilters={setSelectedCategories} />
            <Redbutton onClick={handleSearch}>Search</Redbutton>
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
