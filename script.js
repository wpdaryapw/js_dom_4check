const input = document.querySelector('input[type="range"]')
const valueView = document.querySelector('span.counter')

valueView.innerText = input.value

input.addEventListener('input', (event)=>{
    event.preventDefault()
    valueView.innerText = input.value
})
addEventListener('wheel', event=>{
    let delta = event.deltaY / 10;
    input.value = +input.value + delta
    valueView.innerText = input.value
})
input.value = 300;