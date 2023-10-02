import { Component,OnInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'portfolio';
  selectedContent = 'about'

  currentDivInView$ = this.contentService.getCurruntDiv();

  constructor(
  private contentService:ContentService
  ){}

  
    // this.contentService.getCurruntDiv().subscribe((data)=>{
    //   console.log(data);
      
    // })
  
  showContent(content: string){
     this.contentService.setContent(content)
  }

}
