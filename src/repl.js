/**
 * Created by xgheaven on 15/12/2.
 */

import repl from 'repl'
import ls from './command/ls'
import cwd from './command/cwd'
import cd from './command/cd'

export default function(socket) {
    const REPLServer = repl.start({
        prompt: '$> ',
        input: socket,
        output: socket,
        ignoreUndefined: true
        //replMode: repl.REPL_MODE_STRICT
    })

    REPLServer.on('exit', () => {
        socket.end()
    })

    REPLServer.mixin = (name, desc) => {
        REPLServer.context.mixin(name, desc)
        return this
    }

    Object.defineProperty(REPLServer.context, 'mixin', {
        value: function(name, desc) {
            if (typeof desc === 'function') desc = {
                value: desc
            }

            if (typeof desc.value === 'function') {
                desc.value = desc.value.bind(REPLServer.context)
            }
            // default is freeze
            desc = Object.assign({
                writable: false,
                configurable: false,
                enumerable: false
            }, desc)

            Object.defineProperty(this, name, desc)

            return this
        },
        writable: false,
        configurable: false,
        enumerable: false
    })

    // mixin build-in function
    cwd(REPLServer)
    ls(REPLServer)
    cd(REPLServer)

    return REPLServer
}
