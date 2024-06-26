import React, { useState, useEffect } from 'react';
import {
  Title,
  List,
  Item,
  Styledsvg,
  ButtonText,
  Buttonstyled,
  FirstStyledsvg,
} from './EquipmentStyled';
import svg from '../../img/icons.svg';

const Equipment = ({ handleFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(item => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  useEffect(() => {
    handleFilters(selectedCategories);
  }, [selectedCategories, handleFilters]);

  return (
    <>
      <Title>Vehicle equipment</Title>
      <List>
        <Item className={selectedCategories.includes('AC') ? 'selected' : ''}>
          <Buttonstyled onClick={() => toggleCategory('AC')}>
            <FirstStyledsvg>
              <use href={`${svg}#icon-wind`}></use>
            </FirstStyledsvg>
            <ButtonText>AC</ButtonText>
          </Buttonstyled>
        </Item>
        <Item
          className={selectedCategories.includes('Automatic') ? 'selected' : ''}
        >
          <Buttonstyled onClick={() => toggleCategory('Automatic')}>
            <Styledsvg>
              <use href={`${svg}#icon-conect`}></use>
            </Styledsvg>
            <ButtonText>Automatic</ButtonText>
          </Buttonstyled>
        </Item>
        <Item
          className={selectedCategories.includes('Kitchen') ? 'selected' : ''}
        >
          <Buttonstyled onClick={() => toggleCategory('Kitchen')}>
            <Styledsvg>
              <use href={`${svg}#icon-fork`}></use>
            </Styledsvg>
            <ButtonText>Kitchen</ButtonText>
          </Buttonstyled>
        </Item>
        <Item className={selectedCategories.includes('TV') ? 'selected' : ''}>
          <Buttonstyled onClick={() => toggleCategory('TV')}>
            <Styledsvg>
              <use href={`${svg}#icon-tv`}></use>
            </Styledsvg>
            <ButtonText>TV</ButtonText>
          </Buttonstyled>
        </Item>
        <Item
          className={selectedCategories.includes('Shower/WC') ? 'selected' : ''}
        >
          <Buttonstyled onClick={() => toggleCategory('Shower/WC')}>
            <Styledsvg>
              <use href={`${svg}#icon-shower`}></use>
            </Styledsvg>
            <ButtonText>Shower/WC</ButtonText>
          </Buttonstyled>
        </Item>
      </List>
    </>
  );
};

export default Equipment;
