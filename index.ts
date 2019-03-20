import './polyfills'
import * as angular from 'angular'
import './ng1/root.module'
import { AppModule } from './ng2/root.module'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { downgradeComponent } from '@angular/upgrade/static';
import { HomeComponent } from './ng2/home.component';

angular.module('app')
    .directive(
        'homeXyz',
        downgradeComponent({component: HomeComponent}) as angular.IDirectiveFactory
    )

platformBrowserDynamic().bootstrapModule(AppModule)

