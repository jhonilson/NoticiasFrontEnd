import { Noticia } from "./noticia";

export interface ResponseFavorito {
  content: Noticia[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
 // data: { page: T };
}
