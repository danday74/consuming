import { Injectable } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'

@Injectable({ providedIn: 'root' })
export class RemoteService {
  async getFromMySharedLib(remoteName: string, exposedModule: string, name: string) {
    let module

    try {
      module = await this.getRemoteModule(remoteName, exposedModule)
    } catch (err) {
      console.warn(err)
      return null
    }

    const exposed = module[name]

    if (exposed == null) {
      console.warn(`Unable to get: ${remoteName} > ${exposedModule} > ${name}`)
      return null
    }

    return module[name]
  }

  private async getRemoteModule(remoteName: string, exposedModule: string) {
    return await loadRemoteModule({ remoteName, exposedModule })
  }
}
