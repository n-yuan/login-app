export interface INavItem {
  key: string;
  name: string;
  type: string;
  icon?: string;
  link: string;
}

export interface INavSubMenu {
  key: string;
  name: string;
  type: string;
  icon?: string;
  list: NavConfigType;
}

export type NavConfigType = Array<INavItem | INavSubMenu>;
