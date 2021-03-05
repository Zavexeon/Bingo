import { cpus } from 'os'
import config   from '../config.js'

import { Client, ShardingManager } from 'discord.js'

const startManager = () => { 
    const manager = new ShardingManager('bot/client.js', {
        token: config.bot.TOKEN
        , totalShards: 'auto'
    })

    manager.spawn()

    manager.on('shardCreate', shard => {
        // TODO better shard creation logging
        console.log('shard created')
    })

    return manager
}

export default startManager