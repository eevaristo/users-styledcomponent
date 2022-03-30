import { MenuItem } from './styles';
import { IconBaseProps } from 'react-icons';

interface IMenuItems {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const MenuItems: React.FC<IMenuItems> = ({ name, icon: Icon }) => {
  return (
    <MenuItem>
      <Icon size={25} />
      <h3>{name}</h3>
    </MenuItem>
  );
};
