import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private dataService: DataService) { }

  async login(email: string, password: string) {
    const response = await this.dataService.create('token', { email, password });
    
    return response
  }
}
