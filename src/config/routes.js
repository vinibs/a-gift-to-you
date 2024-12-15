// Imports the route instance to set the App's routes
import { route } from '../../js/lira.js'
import '../config/init.js'

route.set('/', 'app-index')

// Wildcard route for anything not listed above
route.set('*', 'not-found')