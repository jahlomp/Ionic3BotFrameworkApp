import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url = "https://webchat.botframework.com/embed/ionic3botframework?s=ovl4Nzi8Tfk.cwA.B9M.zn5RK6BkP8wvRPHeGB5OfG6TwhDLjro8-vt26kiKKT4";

  constructor(public domSanitizer: DomSanitizer) {

  }

  openChat(url){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
