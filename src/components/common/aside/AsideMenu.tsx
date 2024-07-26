import BarTablesMenu from '@/components/common/aside/menu/BarTablesMenu'
import MainMenu from '@/components/common/aside/menu/MainMenu'
import SupportMenu from '@/components/common/aside/menu/SupportMenu'
import UtilitiesMenu from '@/components/common/aside/menu/UtilitiesMenu'

import {ASIDE_MENU} from '@/constants/aside-menu.constant'


const AsideMenu = () => {
  return (
    <aside>
      <MainMenu items={ASIDE_MENU.MAIN}/>
      <BarTablesMenu items={ASIDE_MENU.BAR_TABLES}/>
      <UtilitiesMenu items={ASIDE_MENU.UTILITIES}/>
      <SupportMenu items={ASIDE_MENU.SUPPORT}/>
    </aside>
  )
}

export default AsideMenu
