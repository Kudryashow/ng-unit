import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs/internal/ReplaySubject";

export interface IPPObject {
  ppEvent: ppEvent;
  component?: Object;
  options?: Object;
}

export interface ppOptions {
  title?: string,
  message?: string
}

export enum ppEvent {'open', 'close'}

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  private ppDialog = new ReplaySubject<IPPObject>();

  public ppDialog$ = this.ppDialog.asObservable();

  open(component, options?: Array<ppOptions>) {
    this.ppDialog.next({ppEvent: ppEvent.open, component: component, options: options});
  }

  close() {
    this.ppDialog.next({ppEvent: ppEvent.close});
  }

  constructor() {
  }
}
