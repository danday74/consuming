import { AfterViewInit, Component, inject, Injector, input, OnInit, viewChild, ViewContainerRef } from '@angular/core'
import { RemoteService } from '../../services/remote/remote.service'
import { ProjectionComponent } from '../projection/projection.component'

@Component({
  selector: 'app-example-enhanced',
  imports: [ProjectionComponent],
  templateUrl: './example-enhanced.component.html',
  styleUrl: './example-enhanced.component.scss',
})
export class ExampleEnhancedComponent implements OnInit, AfterViewInit {
  remoteName = input.required<string>()
  exposedModule = input.required<string>()
  serviceName = input.required<string>()
  componentName = input.required<string>()

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
    const Service = await this.remoteService.getFromMySharedLib(this.remoteName(), this.exposedModule(), this.serviceName())
    if (Service) {
      const service = this.injector.get(Service)
      service.hello()
    }
  }

  private async createRemoteComponent() {
    const Component = await this.remoteService.getFromMySharedLib(this.remoteName(), this.exposedModule(), this.componentName())
    if (Component) {
      this.vc()!.createComponent(Component, { injector: this.injector })
    }
  }
}
