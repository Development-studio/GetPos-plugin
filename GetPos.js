mc.regConsoleCmd("pos","get pos",function(args){
    let pl = mc.getPlayer(args[0])
    if(pl == null){
        log('Unable to get player!')
    }else{
        let ppos = pl.pos
        let x = ppos.x
        let y = ppos.y
        let z = ppos.z
        let dimid = ppos.dimid
        log('Player ' + args[0] + ' is at X:' + x + ', Y:' + y + ', Z:' + z + ', in dimid: ' + dimid)
    }
})
