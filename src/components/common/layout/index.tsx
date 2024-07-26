import {type ReactNode} from 'react'

interface LayoutProps{
  children: ReactNode

}
const Layout = ({children}: LayoutProps) => {
  return(
    <main className="flex min-h-screen flex-col  ">
    <div className={'flex h-full min-h-[100dvh]'}>
      <aside className={'grid grid-rows-[auto_1fr_auto]  px-2 py-4 border-r-[1px]'}>
        <div className={'flex flex-col '}>
          <div>logo</div>
        </div>
        <div>menu</div>
        <div>logout</div>
      </aside>
      <div className={'flex flex-col w-full'}>
        <header className={'flex justify-between px-4'}>
          <nav> nav </nav>
          <div> user </div>
        </header>
        {children}
      </div>
    </div>
    </main>
  )
}
export default Layout