console.log('start')
setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)
Promise.resolve().then(function() {
    console.log('promise3')
})
console.log('end')
// start end  p3 timer1 p1 timer2 p2
