import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
} from './CatalogStyled';
import { fetchVans } from '../../store/creator';

const Catalog = () => {
  const dispatch = useDispatch();
  const {
    vans,
    // loading, error
  } = useSelector(state => state.vans);

  useEffect(() => {
    dispatch(fetchVans());
  }, [dispatch]);

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
        <CatalogSide>
          <CatalogListAll>
            {vans.map(van => (
              <CatalogCart key={van._id} van={van} />
            ))}
          </CatalogListAll>
          <Loadmore>Load more</Loadmore>
        </CatalogSide>
      </CatalogSection>
    </>
  );
};

export default Catalog;
