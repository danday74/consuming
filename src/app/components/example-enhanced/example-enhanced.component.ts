import { AfterViewInit, Component, inject, Injector, OnInit, viewChild, ViewContainerRef } from '@angular/core'
import { RemoteService } from '../../services/remote/remote.service'

@Component({
  selector: 'app-example-enhanced',
  imports: [],
  templateUrl: './example-enhanced.component.html',
  styleUrl: './example-enhanced.component.scss',
})
export class ExampleEnhancedComponent implements OnInit, AfterViewInit {
  private vc = viewChild('vc', { read: ViewContainerRef })

  private remoteService: RemoteService = inject(RemoteService)
  private injector: Injector = inject(Injector)

  ngOnInit() {
    this.injectRemoteService().then()
  }

  ngAfterViewInit() {
    this.createRemoteComponent().then()
  }

  private async injectRemoteService() {
    const MyRemoteService = await this.remoteService.getFromMySharedLib('MyRemoteService')
    const myRemoteService = this.injector.get(MyRemoteService)
    myRemoteService.hello()
  }

  private async createRemoteComponent() {
    const MyRemoteComponent = await this.remoteService.getFromMySharedLib('MyRemoteComponent')
    this.vc()!.createComponent(MyRemoteComponent, { injector: this.injector })
  }
}
