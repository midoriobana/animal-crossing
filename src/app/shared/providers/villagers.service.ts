import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillagersService {

  constructor(private http: HttpClient) { }

  getAllVillagers(): Promise<any> {
    return firstValueFrom(this.http.get(`${environment.API_URL}/villagers`))
  }

  getVillagers(id?: string): Promise<any> {
    return firstValueFrom(this.http.get(`${environment.API_URL}/villagers/${id}`))
  }

}
