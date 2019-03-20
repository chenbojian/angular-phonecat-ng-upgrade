import './polyfills';

import '../app/lib/jquery/dist/jquery.js'
import '../app/lib/angular/angular.js'
import '../app/lib/angular-animate/angular-animate.js'
import '../app/lib/angular-resource/angular-resource.js'
import '../app/lib/angular-route/angular-route.js'
import '../app/app.module.js'
import '../app/app.config.js'
import '../app/app.animations.js'
import '../app/core/core.module.js'
import '../app/core/checkmark/checkmark.filter.js'
import '../app/core/phone/phone.module.js'
import '../app/core/phone/phone.service.js'
import '../app/phone-list/phone-list.module.js'
import '../app/phone-list/phone-list.component.js'
import '../app/phone-detail/phone-detail.module.js'
import '../app/phone-detail/phone-detail.component.js'

import { AppModule } from './app.module';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => {
        console.log({
            error
        });
    });

