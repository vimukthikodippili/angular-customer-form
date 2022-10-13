import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  newCustomer(id: string, name: string, address: string, salary: number) {
    return this.http.post<any>(this.baseUrl + '',
      {
        id: id,
        name: name,
        address: address,
        salary: salary,
      }
    );
  }

  updateCustomer(id: string, name: string, address: string, salary: number) {
    return this.http.put<any>(this.baseUrl + ''+id,//+id kiyanne quary params
      {
        name: name,
        address: address,
        salary: salary,
      }
    );
  }

  deleteCustomer(id: string) {
    return this.http.delete<any>(this.baseUrl + ''+id)
  }

  getAllCustomer() {
    return this.http.get<any>(this.baseUrl + '')
  }
}
