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
} from './CatalogStyled';
import { fetchVans } from '../../store/creator';

const Catalog = () => {
  const dispatch = useDispatch();
  const { vans } = useSelector(state => state.vans);
  const [visibleVans, setVisibleVans] = useState([]);

  useEffect(() => {
    dispatch(fetchVans());
  }, [dispatch]);

  useEffect(() => {
    setVisibleVans(vans.slice(0, 4));
  }, [vans]);

  const handleLoadMore = () => {
    const currentIndex = visibleVans.length;
    const nextIndex = currentIndex + 4;
    setVisibleVans([...visibleVans, ...vans.slice(currentIndex, nextIndex)]);
  };

  return (
    <>
      <CatalogSection>
        <aside>
          <div>
            <Subtitle>Location</Subtitle>
            <Towninput type="text" placeholder="City" />
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
          {vans.length > visibleVans.length && (
            <Loadmore onClick={handleLoadMore}>Load more</Loadmore>
          )}
        </CatalogSide>
      </CatalogSection>
    </>
  );
};

export default Catalog;
