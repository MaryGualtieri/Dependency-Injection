import {Injector} from 'angular2/core';

var injector = Injector.resolveAndCreate([
  House,
  Couch,
  Table,
  Doors
]);

var car = injector.get(House)
