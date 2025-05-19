import { Injectable } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'

@Injectable({ providedIn: 'root' })
export class RemoteService {
  async getFromMySharedLib(key: string) {
    const module = await this.getRemoteModule('mfe-exposing-remote', './MySharedLib')
    return module[key]
  }

  private async getRemoteModule(remoteName: string, exposedModule: string) {
    return await loadRemoteModule({ remoteName, exposedModule })
  }
}
