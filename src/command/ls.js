/**
 * Created by xgheaven on 15/12/2.
 */

import fs from 'fs'
import path from 'path'

export default function(repl) {
    repl.mixin('ls', ls)
}

function ls(p, options) {
    // default is root
    let cwd = this.cwd || '/'
    p = path.resolve(cwd, p || '.')

    let files = fs.readdirSync(p)
    return files
}