import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  images: any[];
  values: any = '';

  constructor(private imageService : PixabayService) { }

  searchImage(event: any){
    const words = event.target.value;
    console.log(words);
    return this.imageService.getAllImages(words).subscribe(
      data => console.log(data),
      error => console.log(error),
      ()=> console.log('Request Complete')
    )

   
  }
  ngOnInit() {
  }

}

