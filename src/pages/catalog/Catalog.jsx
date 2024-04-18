import React, { useEffect, useState } from 'react';

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
} from './CatalogStyled';
import { fetchAllVans } from '../../store/api';

const Catalog = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllVans();
        setVans(data);
      } catch (error) {
        console.error('Failed to fetch vans:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CatalogSection>
        <aside>
          <Subtitle>Location</Subtitle>
          <Towninput
            type="text"
            placeholder="City"
            // value={filter} onChange={onChangeFilter}
          />
          <Subtitle>Filters</Subtitle>
          <Equipment />
          <Vehicletype />
          <Redbutton>Search</Redbutton>
        </aside>
        <CatalogListAll>
          {vans.map(van => (
            <CatalogCart key={van.id} van={van} />
          ))}
          <Loadmore>Load more</Loadmore>
        </CatalogListAll>
      </CatalogSection>
    </>
  );
};

export default Catalog;
