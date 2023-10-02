import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent   {
  @ViewChild('aboutDiv', { static: false }) aboutDiv!: ElementRef;
  @ViewChild('educationDiv', { static: false }) educationDiv!: ElementRef;
  @ViewChild('projectsDiv', { static: false }) projectsDiv!: ElementRef;
  @ViewChild('messageDiv', { static: false }) messageDiv!: ElementRef;

  constructor(
    private contentService: ContentService,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit() {
    this.contentService.getContent().subscribe((contentId) => {
      this.scrollToContent(contentId);
    });
  }
  scrollToContent(contentId: string) {
    let element: ElementRef;
    switch (contentId) {
      case 'about':
        element = this.aboutDiv;
        break;
      case 'education':
        element = this.educationDiv;
        break;
      case 'projects':
        element = this.projectsDiv;
        break;
      case 'message':
        element = this.messageDiv;
        break;
      default:
        return;
    }

    if (element && element.nativeElement) {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
