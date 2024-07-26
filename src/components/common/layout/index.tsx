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
        <div>
          <div>
            <ul>
              <li> Mesas Activas</li>
              <li> Mesas Atendidas</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Menú</li>
              <li> Logo</li>
              <li> Datos del WIFI</li>
              <li> Mensajes predefinidos</li>
              <li> Estadísticas</li>
              <li> Ajustes</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Generar QR</li>
              <li> Soporte Online</li>
              <li> Datos del WIFI</li>
              <li> Servicios</li>

            </ul>
          </div>
        </div>
        <div>Logout</div>
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