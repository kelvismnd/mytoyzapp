import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  exports: [SharedModule],
  entryComponents: [],
  imports: [CoreModule, AppRoutingModule],

  bootstrap: [AppComponent]
})
export class AppModule {}
