import React, { useState, useEffect } from 'react';
import {
  Title,
  List,
  Item,
  ButtonText,
  Buttonstyled,
  FirstStyledsvg,
} from './VehicletypeStyled';
import svg from '../../img/icons.svg';

const Vehicletype = ({ handleFilters }) => {
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
      <Title>Vehicle type</Title>
      <List>
        <Item>
          <Buttonstyled
            className={selectedCategories.includes('Van') ? 'selected' : ''}
            onClick={() => toggleCategory('Van')}
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van3`}></use>
            </FirstStyledsvg>
            <ButtonText>Van</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled
            className={
              selectedCategories.includes('Fully Integrated') ? 'selected' : ''
            }
            onClick={() => toggleCategory('Fully Integrated')}
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van1`}></use>
            </FirstStyledsvg>
            <ButtonText>Fully Integrated</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled
            className={selectedCategories.includes('Alcove') ? 'selected' : ''}
            onClick={() => toggleCategory('Alcove')}
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van2`}></use>
            </FirstStyledsvg>
            <ButtonText>Alcove</ButtonText>
          </Buttonstyled>
        </Item>
      </List>
    </>
  );
};

export default Vehicletype;
