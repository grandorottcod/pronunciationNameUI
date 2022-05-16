import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './global-types.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PronunciationAPIService {

  constructor(private httpClient: HttpClient) { }

  pronounceUrl: string = 'http://localhost:8080/pronunce';
  saveEmployeeUrl: string = 'http://localhost:8080/saveemployee';

  pronounceName(employee: Employee): Observable<Array<Employee>> {
        return this.httpClient.post<Array<Employee>>(this.pronounceUrl, employee);
  }

  saveEmployeeName(employee: Employee): Observable<any>{
    return this.httpClient.post(this.saveEmployeeUrl, employee);
  }

  saveEmployeeNameAlternate(formData: any) : Observable<any>{
    return this.httpClient.post(this.saveEmployeeUrl, formData);
  }
}
