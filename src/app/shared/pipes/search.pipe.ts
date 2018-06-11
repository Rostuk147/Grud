import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(posts, value: string) {
    if (!posts || value === '' ) {
      return posts;
    }
      return posts.filter(post => {
        return post.name.toLowerCase().includes(value.toLowerCase() );
      });
  }
}
