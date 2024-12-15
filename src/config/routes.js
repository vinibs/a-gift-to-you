// Imports the route instance to set the App's routes
import { route } from '../../js/lira.js'

import '../components/index.js'
import '../views/index.js'

route.set('/', 'app-index')

// Wildcard route for anything not listed above
route.set('*', 'not-found')