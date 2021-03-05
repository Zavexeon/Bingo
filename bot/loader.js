import {readdirSync, lstatSync } from 'fs'

const loadPlugins = context => {
    const pluginDir = context.config.bot.pluginDirectory
    
    /* get the all files/directories in plugin directory*/
    const pluginFiles = readdirSync(pluginDir)
        .filter(f => { 
            /* filter out files prefixed with _ */
            if (f[0] !== '_') return f 
        })
    

    pluginFiles.forEach(file => {
        const pluginPath = `${pluginDir}/${file}`

        if (lstatSync(pluginPath).isDirectory()) {
            /* plugin is a directory, try to find a index.js or plugin-config.json */
        } else {
            /* plugin is a file, check if it is a js file and load it */
        }
    })  
}

export default loadPlugins