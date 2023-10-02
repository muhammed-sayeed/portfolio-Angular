import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  selectedContentSubject = new BehaviorSubject<string>('about')

  currentDivSubject = new BehaviorSubject<string>('')

  constructor() { }
  
  setContent(content:string){
    this.selectedContentSubject.next(content)
  }
  getContent(){
    return this.selectedContentSubject.asObservable()
  }
  setCurrentDiv(divId:string){
    this.currentDivSubject.next(divId)
  }
  getCurruntDiv(){
    return this.currentDivSubject.asObservable()
  }
}
