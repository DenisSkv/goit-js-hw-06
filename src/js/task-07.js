const sizeControl = document.querySelector('input#font-size-control')
const mainText = document.querySelector('span#text')

sizeControl.addEventListener('input', a => {
    mainText.style.fontSize = `${a.target.value}px`
})