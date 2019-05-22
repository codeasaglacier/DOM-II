// Your code goes here
const mouseoverPurple = document.querySelectorAll('.nav a');
mouseoverPurple.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.stopPropagation();
        event.target.style.color = "purple";
        setTimeout(()=> event.target.style.color = "", 2000)
    })
});

const introMouseEnter = document.querySelectorAll('.intro');
introMouseEnter.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = "green"})});

const introMouseOut = document.querySelectorAll('.intro');
introMouseOut.forEach(element => {
    element.addEventListener('mouseleave', event => {
        event.target.style.color = "purple";
        setTimeout(()=> event.target.style.color = "", 2000)
    })});

const btnClick = document.querySelectorAll('div .btn');
btnClick.forEach(element => {
    element.addEventListener('click', event2 => {
        event2.target.style.backgroundColor = "purple";
        setTimeout(()=> event2.target.style.backgroundColor = ""
        , 2000)
    })
})