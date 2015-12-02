/**
 * Created by xgheaven on 15/12/2.
 */

export default function(repl) {
    repl.mixin('cwd', {
        writable: true,
        value: '/'
    })
}
