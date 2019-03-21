import {NgModule} from "@angular/core";
import {UpgradeModule} from "@angular/upgrade/static";
import {BrowserModule} from "@angular/platform-browser";
import {PhoneNameComponent} from "./phone-name.component";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [PhoneNameComponent],
    entryComponents: [PhoneNameComponent]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['phonecatApp'])
    }
}
