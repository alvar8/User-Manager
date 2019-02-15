import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Response } from '../models/response';
import { User } from '../models/User';




@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private httpClient: HttpClient, private log: LoggerService) { this.log.setFileName('remote-data.service.ts'); }

  private URL = 'https://reqres.in/api/users?page=';

  getUserData(contador: number, cantidad: number) {
    this.log.log('Iniciando petición http');
    console.log(contador, cantidad);
    return this.httpClient.get<Response>(this.URL + contador + '&per_page=' + cantidad);
  }
}
