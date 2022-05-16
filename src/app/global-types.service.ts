import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalTypesService {
  constructor() { }
}



export interface Employee{
  
   uid: string;
   name: string;
   email: string;
   blob: string;
   blobOutgoing: FormData | null; 
   blobByte: string;
}
