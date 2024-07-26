import { ChartLine, Settings, Wifi } from "lucide-react";

export interface BarSection {
  id: string;
  label: string;
  link: string;
  icon?: number;
}

export interface BarLayout {
  HIGH_TOPS: BarSection[];
}
export const ASIDE_MENU = {
  MAIN: [
    { id: "1", label: "Inicio", link: "/inicio" },
    { id: "2", label: "Perfil", link: "/perfil" },
  ],
  UTILITIES: [
    { id: "3", label: "Datos del WIFI", icon: Wifi },
    { id: "4", label: "Estadísticas", icon: ChartLine },
    { id: "5", label: "Ajustes", icon: Settings },
  ],
  SUPPORT: [
    { id: "6", label: "Generar QR" },
    { id: "7", label: "Soporte Online" },
    { id: "8", label: "Servicios" },
  ],
  BAR_TABLES: [
    { id: "9", label: "Mesas Activas" },
    { id: "10", label: "Mesas Atendidas" },
  ],
};
