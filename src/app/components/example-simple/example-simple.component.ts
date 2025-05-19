import { AfterViewInit, Component, inject, Injector, OnInit, viewChild, ViewContainerRef } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'

@Component({
  selector: 'app-example-simple',
  imports: [],
  templateUrl: './example-simple.component.html',
  styleUrl: './example-simple.component.scss',
})
export class ExampleSimpleComponent implements OnInit, AfterViewInit {
  private vc = viewChild('vc', { read: ViewContainerRef })

  private injector: Injector = inject(Injector)

  ngOnInit() {
    this.injectRemoteService().then()
  }

  ngAfterViewInit() {
    this.createRemoteComponent().then()
  }

  private async injectRemoteService() {
    const module = await this.getRemoteModule()
    console.log(module)
    const MyRemoteService = module.MyRemoteService
    const myRemoteService = this.injector.get(MyRemoteService)
    myRemoteService.hello()
  }

  private async createRemoteComponent() {
    const module = await this.getRemoteModule()
    const MyRemoteComponent = module.MyRemoteComponent
    this.vc()!.createComponent(MyRemoteComponent, { injector: this.injector })
  }

  private async getRemoteModule() {
    return await loadRemoteModule({ remoteName: 'mfe-exposing-remote', exposedModule: './MySharedLib' })
  }
}
