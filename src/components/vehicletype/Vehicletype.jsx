import React, { useState, useEffect } from 'react';
import {
  Title,
  List,
  Item,
  ButtonText,
  Buttonstyled,
  FirstStyledsvg,
} from './VehicletypeStyled'; // Импорт стилей и компонентов
import svg from '../../img/icons.svg'; // Импорт иконок

const Vehicletype = ({ handleFilters }) => {
  // Локальное состояние для хранения выбранных категорий
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Функция для добавления или удаления категории из выбранных
  const toggleCategory = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        // Если категория уже выбрана, удаляем ее из списка
        return prevCategories.filter(item => item !== category);
      } else {
        // Если категория не выбрана, добавляем ее в список
        return [...prevCategories, category];
      }
    });
  };

  // Эффект для передачи выбранных категорий в родительский компонент при их изменении
  useEffect(() => {
    handleFilters(selectedCategories);
  }, [selectedCategories, handleFilters]);

  return (
    <>
      <Title>Vehicle type</Title> {/* Заголовок секции */}
      <List>
        {' '}
        {/* Список категорий */}
        <Item>
          <Buttonstyled
            className={selectedCategories.includes('Van') ? 'selected' : ''} // Применение класса 'selected' если категория выбрана
            onClick={() => toggleCategory('Van')} // Обработчик клика для выбора/отмены категории
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van3`}></use> {/* Иконка */}
            </FirstStyledsvg>
            <ButtonText>Van</ButtonText> {/* Текст кнопки */}
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled
            className={
              selectedCategories.includes('Fully Integrated') ? 'selected' : ''
            } // Применение класса 'selected' если категория выбрана
            onClick={() => toggleCategory('Fully Integrated')} // Обработчик клика для выбора/отмены категории
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van1`}></use> {/* Иконка */}
            </FirstStyledsvg>
            <ButtonText>Fully Integrated</ButtonText> {/* Текст кнопки */}
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled
            className={selectedCategories.includes('Alcove') ? 'selected' : ''} // Применение класса 'selected' если категория выбрана
            onClick={() => toggleCategory('Alcove')} // Обработчик клика для выбора/отмены категории
          >
            <FirstStyledsvg>
              <use href={`${svg}#icon-van2`}></use> {/* Иконка */}
            </FirstStyledsvg>
            <ButtonText>Alcove</ButtonText> {/* Текст кнопки */}
          </Buttonstyled>
        </Item>
      </List>
    </>
  );
};

export default Vehicletype;
