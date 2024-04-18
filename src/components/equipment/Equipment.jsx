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

const Equipment = () => {
  return (
    <>
      <Title>Vehicle equipment</Title>
      <List>
        <Item>
          <Buttonstyled>
            <FirstStyledsvg>
              <use href={`${svg}#icon-wind`}></use>
            </FirstStyledsvg>
            <ButtonText>AC</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <Styledsvg>
              <use href={`${svg}#icon-conect`}></use>
            </Styledsvg>
            <ButtonText>Automatic</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <Styledsvg>
              <use href={`${svg}#icon-fork`}></use>
            </Styledsvg>
            <ButtonText>Kitchen</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <Styledsvg>
              <use href={`${svg}#icon-tv`}></use>
            </Styledsvg>
            <ButtonText>TV</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
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
