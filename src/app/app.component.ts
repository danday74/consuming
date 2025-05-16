import { Component } from '@angular/core'
import { ExampleSimpleComponent } from './components/my-component/example-simple.component'

@Component({
  selector: 'app-root',
  imports: [ExampleSimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
