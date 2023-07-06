import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchPipe = new Array<any>();

  url="/assets/Data.json";
  constructor(private http1:HttpClient) { }
  public getData():Observable<Data[]>
  {
return this.http1.get<Data[]>(this.url)
  }
  
}

export class Data{
  Name:string | undefined;
  Number:string | undefined;
  MobileNo:string | undefined;;
  status:string | undefined;; 
  date:string | undefined;;

}