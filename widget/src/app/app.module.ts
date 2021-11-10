import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ElementComponent } from './element/element.component';

@NgModule({
  declarations: [
    ElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ElementComponent, {
      injector: this.injector,
    });
    customElements.define('my-widget', el);
  }
}
