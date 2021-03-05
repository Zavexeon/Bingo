export default function(context) {
    this.name = 'Dummy Plugin'
    this.description = "A dummmy plugin that isn't even loaded"
    
    /* do whatever you want here for when the plugin is loaded */
    context.botOn('message', message => {

    })

    this.commands = {
        'my-command': {
            aliases: ['mc', 'my-cmd']
            , arguments: { 
                names: ['arg1', 'arg2'] 
                , min: 1
                , max: 2
            }
            , callback: (message, arguments) => {
                message.channel.send(arguments['arg1'])
            }
        }
    }
}