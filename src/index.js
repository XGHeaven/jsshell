/**
 * Created by xgheaven on 15/12/2.
 */

import net from 'net'
import Repl from './repl'

const server = net.createServer(socket => {
    const repl = new Repl(socket)
    repl.on('error', err => console.log(err))
})

server.listen(process.env.PORT || 11060, err => {
    if (err) console.log(err)
    else console.log('listen success')
})