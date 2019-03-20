import { NgModule } from '@angular/core'
import { UpgradeModule } from '@angular/upgrade/static'
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        UpgradeModule,
        BrowserModule,
    ],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent]
    
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {}

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app'])
    }

}