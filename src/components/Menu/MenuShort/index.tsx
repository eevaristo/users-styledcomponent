import { FaBars } from 'react-icons/fa';
import { MenuToggle } from '../styles';
import { MenuContainerShort } from './styles';

export const MenuShort: React.FC = () => {
  return (
    <MenuContainerShort>
      <MenuToggle>
        <FaBars size={20} />
      </MenuToggle>
    </MenuContainerShort>
  );
};
