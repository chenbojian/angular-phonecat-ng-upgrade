import * as angular from 'angular'

angular.module('app', [])
    .component('appRoot', {
        template: `<div>
        this is app root of angular 1
        <home-xyz></home-xyz>
        </div>`
    })