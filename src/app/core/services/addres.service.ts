import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) { }

  getAddressByCEP(CEP: string) {
    const url = `https://viacep.com.br/ws/${CEP}/json/`;
    return this.http.get<Address>(url)
  }

  getAllStates(): Observable<string[]> {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    return this.http.get<any[]>(url).pipe(
        map(states => states.map(state => state.sigla)
      )
    );
  }

  getCitiesByState(state: string): Observable<string[]> {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;
    return this.http.get<any[]>(url).pipe(
        map(cities => cities.map(city => city.nome)
      )
    );
  }
}
