import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { HttpClient } from "@angular/common/http";
import { StatisticsService } from "./statistics.service";
import { Observable } from "rxjs/internal/Observable";

export interface IGame {
  id: string;
  name: string;
  locale: LocaleType;
  type: string;
}

export enum LocaleType {
  'ru', 'en'
}

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit{

  gameData: Array<IGame>;

  dataChange: ReplaySubject<any>;

  gamesURL: string = 'https://any.com/games';

  constructor(
      private http: HttpClient,
      private statistic: StatisticsService
  ) { }

  ngOnInit() {
    this.dataChange = new ReplaySubject<IGame>();
  }

  getGames() {
    this.makeResponse().subscribe(games => {
      this.handleGameData(games);
    })
  }

  makeResponse(): Observable<any> {
    return this.http.get(this.gamesURL);
  }

  handleGameData(games: Array<IGame>): void {
    this.gameData = games;
    this.doNext(games);
    this.statistic.send();
  }

  doNext(value: Array<IGame>) {
    this.dataChange.next(value);
  }
}
