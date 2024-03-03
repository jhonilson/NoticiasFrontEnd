import { Noticia } from "./noticia";

export class NewsResponse {
  count?: number;
  next?: string;
  previous?: string;
  results?: Noticia[];
}

