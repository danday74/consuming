import { Component } from '@angular/core'
import { ExampleSimpleComponent } from './components/example-simple/example-simple.component'
import { ExampleEnhancedComponent } from './components/example-enhanced/example-enhanced.component'

@Component({
  selector: 'app-root',
  imports: [ExampleSimpleComponent, ExampleEnhancedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
