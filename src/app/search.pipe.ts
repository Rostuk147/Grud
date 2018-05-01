import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts, value: string) {
    return posts.filter(post => {
      return post.name.includes(value || value.toUpperCase());
    })
  }

}
