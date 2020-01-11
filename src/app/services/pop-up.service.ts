import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs/internal/ReplaySubject";

export interface IPPObject {
  ppEvent: ppEvent;
  component?: Object;
  options?: Object;
}

export enum ppEvent {'open', 'close'}

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  private ppDialog = new ReplaySubject<IPPObject>();

  private ppDialog$ = this.ppDialog.asObservable();

  open(component, options?: Object) {
    this.ppDialog.next({ppEvent: ppEvent.open, component: component, options: options});
  }

  close() {
    this.ppDialog.next({ppEvent: ppEvent.close});
  }

  constructor() {
  }
}
