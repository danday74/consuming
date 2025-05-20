import { AfterViewInit, Component, inject, Injector, OnInit, viewChild, ViewContainerRef } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'
import { ModRemoteService } from '../../interfaces-remote/mod-remote-service.model'

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
    console.log('ExampleSimpleComponent module', module)
    const MyRemoteService = module.MyRemote2222Service
    const myRemoteService: ModRemoteService = this.injector.get<ModRemoteService>(MyRemoteService)
    myRemoteService.hello('=> called from consuming host 1111 ExampleSimpleComponent')
  }

  private async createRemoteComponent() {
    const module = await this.getRemoteModule()
    const MyRemoteComponent = module.MyRemote2222Component
    this.vc()!.createComponent(MyRemoteComponent, { injector: this.injector })
  }

  private async getRemoteModule() {
    return await loadRemoteModule({ remoteName: 'mfe-exposing-remote-2222', exposedModule: 'MySharedLib2222' })
  }
}
