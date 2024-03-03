import { Noticia } from "./noticia";

export interface Page {
  content: Noticia[];
  totalElements: number;
  totalPages: number;
  size: number;
}
