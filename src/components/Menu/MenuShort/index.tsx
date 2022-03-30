import { FaBars } from 'react-icons/fa';
import { MenuToggle } from '../styles';
import { MenuContainerShort, MenuHeaderShort } from './styles';

export const MenuShort: React.FC = () => {
  return (
    <MenuContainerShort>
      <MenuHeaderShort>
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*FLM14KDjtxrKjGVbhSv8fA.png"
          alt="empresa"
        />
      </MenuHeaderShort>
    </MenuContainerShort>
  );
};
