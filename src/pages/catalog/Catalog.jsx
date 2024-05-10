import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Equipment from 'components/equipment/Equipment';
import Vehicletype from 'components/vehicletype/Vehicletype';
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
  const [visibleVans, setVisibleVans] = useState([]); // Список видимих вантажівок
  const [selectedCity, setSelectedCity] = useState(''); // Обране місто
  const [cities, setCities] = useState([]); // Міста, доступні для вибору
  const [showDropdown, setShowDropdown] = useState(false); // Показати випадаючий список
  const [isLoading, setIsLoading] = useState(true); // Визначає, чи триває завантаження даних
  const dropdownRef = useRef(null); // Посилання на елемент випадаючого списку

  // Завантаження вантажівок при першому відображенні компонента або після оновлення списку
  useEffect(() => {
    if (!vans.length) {
      dispatch(fetchVans()).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, vans]);

  // Оновлення списку доступних міст при зміні списку вантажівок
  useEffect(() => {
    const uniqueCities = [...new Set(vans.map(van => van.location))];
    setCities(uniqueCities);
  }, [vans]);

  // Функція для завантаження наступної порції вантажівок при натисканні на кнопку "Завантажити ще"
  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextIndex = currentIndex + 4;
    setVisibleVans([
      ...visibleVans,
      ...filteredVans.slice(currentIndex, nextIndex),
    ]);
  };

  // Функція для вибору міста та фільтрації вантажівок за обраним містом
  const handleCitySelect = city => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  // Фільтрація вантажівок за обраним містом або відображення всіх вантажівок, якщо місто не обрано
  const filteredVans = selectedCity
    ? vans.filter(van => van.location === selectedCity)
    : vans;

  // Оновлення видимих вантажівок при зміні фільтрованих вантажівок або видимих вантажівок
  useEffect(() => {
    const newVisibleVans = filteredVans.slice(0, 4);
    if (JSON.stringify(newVisibleVans) !== JSON.stringify(visibleVans)) {
      setVisibleVans(newVisibleVans);
    }
  }, [filteredVans, visibleVans]);

  // Обробка кліків поза випадаючим списком для його закриття
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

  // Відображення завантажувача під час завантаження даних
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
            <Equipment />
            <Vehicletype />
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
