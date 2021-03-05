import startManager  from './manager.js'
import context       from './context.js'
import loadPlugins   from './loader.js'

import { bot, startListeners as startClientListeners } from './client.js'

loadPlugins(context)

const manager = startManager()

/* add references to the shard manager and client to context */
context.shardManager = manager
context.client       = bot

startClientListeners(context)