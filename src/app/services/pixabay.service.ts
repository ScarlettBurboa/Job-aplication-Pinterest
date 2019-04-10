import { Injectable } from '@angular/core';
import { environment  } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private words: string;
  private apiKey: string = environment.pixabay_apiKey;
  private url: string = environment.pixabay_url;
  private urlparam: string = this.url + this.apiKey + '&q=';
  private perPag: string = "&per_page=20";
  
  constructor(protected http: HttpClient) { 
    
  }
  getImages(){
    return this.http.get('https://pixabay.com/api/?key=12131281-48639571c3a0805e5360d2d9f&hits&per_page=40&orientation=vertical')
  }
  getAllImages(words){
    return this.http.get(this.urlparam + words + this.perPag).pipe(map((res: Response) => res.json()));
  }
  
}
