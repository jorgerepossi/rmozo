import type {MenuItemProps} from '@/types/menu'

const MenuItem = ({ label, icon: Icon, additionalClasses = '' }: MenuItemProps) => (
  <li className={`flex gap-2 items-center ${additionalClasses}`}>
    {Icon && <span><Icon /></span>}
    <p>{label}</p>
  </li>
);

export default MenuItem;