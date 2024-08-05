import {
  ChartLine,
  CheckIcon,
  Circle,
  HandPlatter,
  Headset,
  LayoutDashboard,
  QrCode,
} from "lucide-react";

import { ROUTES } from "@/constants/routes";

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
    { id: "2", label: "Atendida", link: "/perfil" },
  ],
  UTILITIES: [
    {
      id: "11",
      label: "General",
      icon: LayoutDashboard,
      link: ROUTES.GENERAL,
      pathname: ROUTES.GENERAL,
    },
    {
      id: "4",
      label: "Estadísticas",
      icon: ChartLine,
      link: ROUTES.STATISTICS,
    },
  ],
  SUPPORT: [
    { id: "6", label: "Generar QR", icon: QrCode },
    { id: "7", label: "Soporte", icon: Headset },
    { id: "8", label: "Servicios", icon: HandPlatter },
  ],
  BAR_TABLES: [
    {
      id: "9",
      label: "Activas",
      icon: CheckIcon,
      link: ROUTES.ACTIVE_TABLES,
      pathname: ROUTES.ACTIVE_TABLES,
    },
    {
      id: "10",
      label: "Atendidas",
      icon: Circle,
      link: ROUTES.INACTIVE_TABLES,
      pathname: ROUTES.INACTIVE_TABLES,
    },
  ],
};
