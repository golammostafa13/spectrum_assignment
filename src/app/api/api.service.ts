import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
    return this.http.post<any>(`${API_URL}/posts`, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getUser(){
    return this.http.get<any>(`${API_URL}/posts`)
    .pipe(map((res:any) => {      
      return res;
    }))
  }
  updateUser(data : any, id: number){
    return this.http.put<any>(`${API_URL}/posts/${id}`, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  deleteUser(id : number){
    return this.http.delete<any>(`${API_URL}/posts/${id}`)
    .pipe(map((res:any) => {
      return res;
    }))
  }

}
