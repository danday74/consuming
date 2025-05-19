import { initFederation } from '@angular-architects/native-federation'

initFederation({
  'mfe-exposing-remote': 'http://localhost:2222/remoteEntry.json',
})
  .catch(err => console.error(err))
  .then((/* _ */) => import('./bootstrap'))
  .catch(err => console.error(err))
