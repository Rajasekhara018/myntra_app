import { Pipe, PipeTransform } from '@angular/core';
import { CategoryData, DataserviceService } from './services/dataservice.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value:any,args:any):any {
  //   if(!value)return null;
  //   if(!args)return value;
  //   args=args.toLowerCase();
  //   return value.filter((item:any)=>{
  //     return JSON.stringify(item).toLocaleLowerCase().includes(args);
  //   })
  constructor(private dservice: DataserviceService){}
  transform(items: any[], searchText: string): any[] {
    let errormesg="Record not found";
    searchText = searchText.toLowerCase();

    let rValue:any = [];
    if (!searchText) {
      return items;
    } else {
      items.filter((it: any) => {
        if(JSON.stringify(it).toLowerCase().toString().includes(searchText)){
          rValue.push(it);
        }else{
          console.log('Record not found');
          errormesg;
          // alert('Record not found');
        }

      });
      this.dservice.searchPipe = rValue;
      return rValue;
    }

  }

}
