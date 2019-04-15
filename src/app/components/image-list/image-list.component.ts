import { Component, OnInit, ViewChild } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';
import { CdkVirtualScrollViewport  } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})


export class ImageListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  images: any[];

  

  constructor(private imageService : PixabayService) { }

 

  searchImage(query: any){
    return this.imageService.getAllImages(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      ()=> console.log('Request Complete')
    )
   
  }
  ngOnInit() {
    this.viewport.scrollToIndex(20)
    this.imageService.getImages().subscribe((data) => { this.images = data['hits']} );
    
  }

}
