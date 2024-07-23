import { Injectable } from '@angular/core';
import header from '../models/header.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private token: string | undefined | null;
  header: header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  constructor() {
    const tokenAtStorage = localStorage.getItem('token')

    if (tokenAtStorage != null) {
      this.token = localStorage.getItem('token')
      this.addAuthorizationToHeader()
    }

  }

  addAuthorizationToHeader(): undefined {
    this.header.Authorization = `Bearer ${this.token}`
  }

  async get(route: string, id: number | string | null) {
    try {
      this.addAuthorizationToHeader()
      const response = await fetch(`http://localhost/bloggy-api/public/api/${route}/${id}`,
        {
          headers: this.header,
          method: "GET"
        })
      const data = await response.json()
      return data
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log("An uknown error occured")
      }
    }

  }

  async getAll(route: string) {
    this.addAuthorizationToHeader()
    const response = await fetch(`http://localhost/bloggy-api/public/api/${route}`,
      {
        headers: this.header,
        method: "GET"
      })
    const data = await response.json()
    return data
  }

  async update(route: string, id: number | string | null, payload: {}) {
    this.addAuthorizationToHeader()
    const response = await fetch(`http://localhost/bloggy-api/public/api/${route}/${id}`,
      {
        headers: this.header,
        method: "PUT",
        body: JSON.stringify(payload)
      })
    const data = await response.json()
    return data
  }

  async create(route: string, payload: {}) {
    try {
      this.addAuthorizationToHeader()
      const response = await fetch(`http://localhost/bloggy-api/public/api/${route}`,
        {
          headers: this.header,
          method: "POST",
          body: JSON.stringify(payload)
        })
      const data = await response.json()
      return data
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err.message
      }
    }
  }

  async delete(route: string, id: number | string | undefined) {
    this.addAuthorizationToHeader()
    const response = await fetch(`http://localhost/bloggy-api/public/api/${route}/${id}`,
      {
        headers: this.header,
        method: "DELETE"
      })
    const data = await response.json()
    return data
  }
}
