import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(public dService:DataService){}

  transform(tables: any[], searchText: any): any[] {
    searchText = searchText.toLowerCase();
    let tValue:any = [];
    if (!searchText) {
      return tables;
    }
    else {
      tables.filter((it: any) => {
        if (JSON.stringify(it).toString().toLowerCase().includes(searchText)) {
          tValue.push(it);
        } else {
          console.log('REcord not found');
        }

      });
    };
    this.dService.searchPipe=tValue;
    return tValue;

  }

}
