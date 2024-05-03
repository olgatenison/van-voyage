import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Equipment from 'components/equipment/Equipment';
import Vehicletype from 'components/vehicletype/Vehicletype';
import CatalogCart from 'components/catalogcart/Catalogcart';
import {
  CatalogSection,
  CatalogListAll,
  Redbutton,
  Loadmore,
  Subtitle,
  Towninput,
  CatalogSide,
  Option,
} from './CatalogStyled';
import { fetchVans } from '../../store/creator';

const Catalog = () => {
  const dispatch = useDispatch();
  const { vans } = useSelector(state => state.vans);
  const [visibleVans, setVisibleVans] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    dispatch(fetchVans());
  }, [dispatch]);

  useEffect(() => {
    // Создаем список уникальных городов
    const uniqueCities = [...new Set(vans.map(van => van.location))];
    setCities(uniqueCities);
  }, [vans]);

  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextIndex = currentIndex + 4;
    setVisibleVans([
      ...visibleVans,
      ...filteredVans.slice(currentIndex, nextIndex),
    ]);
  };

  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  // Фильтрация машинок по городу
  const filteredVans = selectedCity
    ? vans.filter(van => van.location === selectedCity)
    : vans;

  useEffect(() => {
    setVisibleVans(filteredVans.slice(0, 4));
  }, [filteredVans]);

  return (
    <>
      <CatalogSection>
        <aside>
          <div>
            <Subtitle>Location</Subtitle>
            {/* Используем выпадающий список для выбора города */}
            <Towninput value={selectedCity} onChange={handleCityChange}>
              <Option value="">All Cities</Option>
              {cities.map(city => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Towninput>
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
            {/* Отображаем только отфильтрованные машины */}
            {visibleVans.map(van => (
              <CatalogCart key={van._id} van={van} />
            ))}
          </CatalogListAll>
          {/* Показываем кнопку "Load more", если есть больше машин для загрузки */}
          {filteredVans.length > visibleVans.length && (
            <Loadmore onClick={handleLoadMore}>Load more</Loadmore>
          )}
        </CatalogSide>
      </CatalogSection>
    </>
  );
};

export default Catalog;
