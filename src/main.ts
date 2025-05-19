import { initFederation } from '@angular-architects/native-federation'

initFederation({
  'mfe-exposing-remote-2222': 'http://localhost:2222/remoteEntry.json',
  'mfe-exposing-remote-3333': 'http://localhost:3333/remoteEntry.json',
})
  .catch(err => console.error(err))
  .then((/* _ */) => import('./bootstrap'))
  .catch(err => console.error(err))
