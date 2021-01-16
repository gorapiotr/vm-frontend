export interface Book {
  id: number;
  name: string;
  isbn: string;
  categories: Category[];
}

export interface Category {
  id: number,
  name: string
}

export interface BookForm {
  name: string;
  isbn: string;
  categories: number[];
}
