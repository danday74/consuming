import { Injectable } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'

@Injectable({ providedIn: 'root' })
export class RemoteService {
  async getFromMySharedLib(key: string) {
    const remoteName = 'mfe-exposing-remote-2222'
    const exposedModule = './MySharedLib'
    let module

    try {
      module = await this.getRemoteModule(remoteName, exposedModule)
    } catch (err) {
      console.warn(err)
      return null
    }

    const exposed = module[key]

    if (exposed == null) {
      console.warn(`Unable to get: ${remoteName} > ${exposedModule} > ${key}`)
      return null
    }

    return module[key]
  }

  private async getRemoteModule(remoteName: string, exposedModule: string) {
    return await loadRemoteModule({ remoteName, exposedModule })
  }
}
