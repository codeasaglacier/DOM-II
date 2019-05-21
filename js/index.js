// Your code goes here
const mouseoverPurple = document.querySelectorAll('.nav a');
mouseoverPurple.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.stopPropagation();
        event.target.style.color = "purple";
        setTimeout(function () {
            event.target.style.color = "";

        }, 2000)
    }, false)
});

const btnClick = document.querySelectorAll('div .btn');
btnClick.forEach(element => {
    element.addEventListener('click', event2 => {
        event2.target.style.backgroundColor = "purple";
    })
})