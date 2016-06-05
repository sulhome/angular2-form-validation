/// <reference path="./../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Datastore} from './services/datastore';
import {Logger} from './services/logger'

import {AppComponent} from './app.component'

bootstrap(AppComponent, [ROUTER_PROVIDERS, Datastore, Logger])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));