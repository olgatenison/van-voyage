import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [selectedCity, setSelectedCity] = useState(''); // Selected city
  const [cities, setCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Load products on first render or when the list updates
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchVans());
      setIsLoading(false);
    };

    if (!vans.length) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, vans.length]);

  // Update the list of available cities when the list of products changes
  useEffect(() => {
    const uniqueCities = [...new Set(vans.map(van => van.location))];
    setCities(uniqueCities);
  }, [vans]);

  // Function to select a city and filter products by the selected city
  const handleCitySelect = city => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  // Filter products by the selected city or show all products if no city is selected
  const getFilteredVans = useCallback(() => {
    return selectedCity
      ? vans.filter(van => van.location === selectedCity)
      : vans;
  }, [selectedCity, vans]);

  const filteredVans = getFilteredVans();

  // Update the visible products when filtered products change
  useEffect(() => {
    const newVisibleVans = filteredVans.slice(0, 4);
    if (JSON.stringify(newVisibleVans) !== JSON.stringify(visibleVans)) {
      setVisibleVans(newVisibleVans);
    }
  }, [filteredVans]);

  // Handle clicks outside the dropdown to close it
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

  // Handle search functionality based on selected categories
  const handleSearch = () => {
    if (selectedCategories.length === 0) {
      setVisibleVans(filteredVans.slice(0, 4));
      return;
    }

    const newFilteredVans = vans.filter(van => {
      const acFilter =
        selectedCategories.includes('AC') && van.details.airConditioner !== '';
      const automaticFilter =
        selectedCategories.includes('Automatic') && van.engine !== '';
      const kitchenFilter =
        selectedCategories.includes('Kitchen') && van.details.kitchen !== '';
      const tvFilter =
        selectedCategories.includes('TV') && van.details.tv !== '';
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

    setVisibleVans(newFilteredVans.slice(0, 4));
  };

  // Function to load the next batch of products when "Load More" is clicked
  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextVans = filteredVans.slice(currentIndex, currentIndex + 4);
    setVisibleVans(prevVisibleVans => [...prevVisibleVans, ...nextVans]);
  };

  // Show loading indicator while data is being fetched
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
