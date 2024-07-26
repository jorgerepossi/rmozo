import AsideMenu from '@/components/common/aside/AsideMenu'
import Logo from '@/components/common/aside/Logo'
import LogOutButton from '@/components/common/aside/LogOutButton'

const Aside = () => {
  return (
    <aside className={'grid grid-rows-[auto_1fr_auto] min-w-[200px]  px-2 py-4 border-r-[1px] border-neutral-n10'}>
      <Logo />
     <AsideMenu />
      <LogOutButton />
    </aside>
  )
}
export default Aside