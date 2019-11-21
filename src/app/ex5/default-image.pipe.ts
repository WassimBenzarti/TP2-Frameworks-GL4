import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any): any {
    if(!value || value.trim().length === 0){
      return "/assets/myDefaultPicture.png";
    }
    return value;
  }

}
