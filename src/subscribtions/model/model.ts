export type SubData = {
  title: string;
  description: string;
  price: string;
  customClass?: string;
};

export type ESubItem = SubData & {
  type: string;
};
