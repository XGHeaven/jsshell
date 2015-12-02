/**
 * Created by xgheaven on 15/12/2.
 */

import path from 'path'
import fs from 'fs'

export default function(repl) {
    repl.mixin('cd', cd)
}

function cd(p = '.') {
    p = path.resolve(this.cwd, p)

    try{
        let stats = fs.statSync(p)
        if (!stats.isDirectory()) {
            throw new Error('not a directory')
        }
        return this.cwd = p
    } catch(e) {
        return 'No such directory'
    }
}