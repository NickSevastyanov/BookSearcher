export interface IBooksSliceState {
  totalItems: number;
  items: itemsInfo[];
  status: string;
}

export type itemsInfo = {
  id: string;
  volumeInfo: volumeInfo[];
};

export type volumeInfo = {
  title: string;
  authors: string[];
  categories: string[];
  imageLinks: imageLinks[];
};

export type imageLinks = {
  smallThumbnail: string;
};

export type SearchbooksParams = {
  search: string;
  category: string;
  sort: string;
};
