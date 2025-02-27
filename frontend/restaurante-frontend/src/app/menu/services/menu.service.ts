import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MenuItem {
  id?: number;
  nombre: string;
  nickname: string;
  descripcion: string;
  precio: number;
  alergenos: string[];
  imagen: string;
  cantidad: number;
  categoria: number;
}

export interface Categoria {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private API_URL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getPlatos(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.API_URL}platos/`);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API_URL}categorias/`);
  }

  getPlatosPorCategoria(categoriaId: number): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.API_URL}platos/categoria/${categoriaId}/`);
  }  
}
