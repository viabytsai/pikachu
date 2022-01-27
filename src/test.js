import string from './css'
const player = {
    id: undefined,
    n: 1,
    time: 100,
    events: {
        '#btnPlay': 'play',  //定义的时候不能使用player.play 等 一开始的player是一个undefined
        '#btnPause': 'pause',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    ui:{
        demo : document.querySelector("#demo"),
        demo2 : document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {
            const value = player.events[key] //用键驱除值
            document.querySelector(key).onclick = player[value] //player[value]相当于player.value
        }
    },
    run: () => {
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.n += 1
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
        //setInterval(()=>{run()},time)和setInterval(run,time)等价 除非run返回一个函数不然不能加括号
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()

