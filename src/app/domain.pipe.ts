import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(url: any, args?: any): any {
    if (url){
      let domain = '(' + url.split('/')[2] + ')';
      return domain ? domain.replace('www.', '') : ''; 
    }
  }
}
