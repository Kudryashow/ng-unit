import { Component } from '@angular/core';
import { PopUpService } from "./services/pop-up.service";
import { SignInComponent } from "./components/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private popup: PopUpService) {

  }

  ngOnInit() {
    this.popup.open(SignInComponent);
  }

  title = 'unit';
}
