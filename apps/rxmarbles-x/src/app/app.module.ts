import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxmarblesUiModule } from '@rxmarbles-x/rxmarbles-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RxmarblesUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
