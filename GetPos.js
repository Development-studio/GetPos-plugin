mc.regConsoleCmd("pos","get pos",function(args){
    pl = mc.getPlayer(args[0])
    pos = pl.pos
    log(pos)
})