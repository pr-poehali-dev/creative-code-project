export interface TabConfig {
  id: string;
  label: string;
  icon: string;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface FormData {
  title?: string;
  link?: string;
  type?: string;
  description?: string;
  email?: string;
  password?: string;
}
