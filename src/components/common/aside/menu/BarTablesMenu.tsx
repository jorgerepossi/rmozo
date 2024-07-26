import MenuItem from '@/components/common/aside/menu/MenuItem'

import type {MenuSectionProps} from '@/types/menu'

const BarTablesMenu = ({ items }: MenuSectionProps) => (
  <section>
    <h2>Bar Tables</h2>
    <ul>
      {items.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  </section>
);

export default BarTablesMenu;