Angular Decorators

1. Class Decorators
------------------
	
import { NgModule, Component,Input,HostListener } from '@angular/core';

ex1
@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>',
})
export class ExampleComponent {
  constructor() {
    console.log('Hey I am a component!');
  }
}

ex2
@NgModule({
  imports: [],
  declarations: [],
})
export class ExampleModule {
  constructor() {
    console.log('Hey I am a module!');
  }
}


2. Property Decorators
@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>'
})
export class ExampleComponent {
  @Input()
  itemName: string;
}

3. Method Decorators
	
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'example-component',
  template: 'Woo a component!'
})
export class ExampleComponent {
  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    // clicked, `event` available
  }
}


4. Parameter Decorators
	
import { MyService } from './my-service';

@Component({
  selector: 'example-component',
  template: 'Woo a component!'
})
export class ExampleComponent {
  constructor(myService: MyService) {
    console.log(myService); // MyService
  }
}
	