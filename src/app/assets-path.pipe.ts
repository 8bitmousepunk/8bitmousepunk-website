import { Pipe, PipeTransform, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Pipe({
  name: 'assetsPath'
})
export class AssetsPathPipe implements PipeTransform {

  constructor( @Inject(APP_BASE_HREF) private baseHref: string) { }

  transform(value: string, ...args: unknown[]): string {
    return `${this.baseHref}/${value}`.replace(/\/{2,}/, '/');
  }

}
