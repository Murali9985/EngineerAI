import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlesearch'
})
export class TitlesearchPipe implements PipeTransform {

  transform(value: any,titleValue): any {
    
    if(!titleValue){
    return value;
    }
    return value.filter(filter => {

          const data= filter.title.toLowerCase().startsWith(titleValue.toLowerCase())
          return data;
    }
      );
  }

}
