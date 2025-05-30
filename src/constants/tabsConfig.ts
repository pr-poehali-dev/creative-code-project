import { TabConfig } from "@/types/tabs";

export const tabsConfig: TabConfig[] = [
  {
    id: "teachers",
    label: "Для педагогов",
    icon: "GraduationCap",
    colors: {
      bg: "from-purple-50 to-purple-100 border-purple-200",
      text: "text-purple-800",
      border: "border-purple-200",
    },
  },
  {
    id: "parents",
    label: "Для родителей",
    icon: "Heart",
    colors: {
      bg: "from-pink-50 to-pink-100 border-pink-200",
      text: "text-pink-800",
      border: "border-pink-200",
    },
  },
  {
    id: "games",
    label: "Игры",
    icon: "Gamepad2",
    colors: {
      bg: "from-blue-50 to-blue-100 border-blue-200",
      text: "text-blue-800",
      border: "border-blue-200",
    },
  },
];
