import { MenuContainer, MenuHeader, MenuItem } from './styles';
import Switch from 'react-switch';
import { MenuItems } from './MenuItems';
import { MdPeopleAlt, MdCalendarToday } from 'react-icons/md';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

export const Menu: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <MenuContainer>
        <MenuHeader>
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*FLM14KDjtxrKjGVbhSv8fA.png"
            alt="empresa"
          />
          <h3>Mobicare</h3>
        </MenuHeader>
        <MenuItem>
          <MenuItems name="Clientes" icon={MdPeopleAlt} />
          <MenuItems name="Agendados" icon={MdCalendarToday} />
        </MenuItem>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={'#495057'}
          onColor={'#CED4DA'}
        />
      </MenuContainer>
    </>
  );
};
