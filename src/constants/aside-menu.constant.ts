import {
  ChartLine,
  Circle,
  HandPlatter,
  Headset,
  LayoutDashboard,
  QrCode,
  Wifi,
} from "lucide-react";

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
    { id: "1", label: "Mesas Activas", link: "/inicio" },
    { id: "2", label: "Mesas Atendida", link: "/perfil" },
  ],
  UTILITIES: [
    { id: "11", label: "General", icon: LayoutDashboard, link: "general" },
    { id: "3", label: "Datos del WIFI", icon: Wifi },
    { id: "4", label: "Estadísticas", icon: ChartLine },
  ],
  SUPPORT: [
    { id: "6", label: "Generar QR", icon: QrCode },
    { id: "7", label: "Soporte Online", icon: Headset },
    { id: "8", label: "Servicios", icon: HandPlatter },
  ],
  BAR_TABLES: [
    { id: "9", label: "Mesas Activas", icon: Circle },
    { id: "10", label: "Mesas Atendidas", icon: Circle },
  ],
};
