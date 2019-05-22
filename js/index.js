// Your code goes here
const mouseoverDark = document.querySelectorAll('body, .nav-container');
mouseoverDark.forEach(element => {
    addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "black";
    })
})

const mouseoverPurple = document.querySelectorAll('.nav-container');
mouseoverPurple.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.stopPropagation();
        event.target.style.color = "purple";
        setTimeout(() => event.target.style.color = "", 2000)
    })
});

const introMouseEnter = document.querySelectorAll('.intro');
introMouseEnter.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = "green"
    })
});

const introMouseOut = document.querySelectorAll('.intro');
introMouseOut.forEach(element => {
    element.addEventListener('mouseleave', event => {
        event.target.style.color = "purple";
        setTimeout(() => event.target.style.color = "", 2000)
    })
});

const textMouseEnter = document.querySelectorAll('.text-content, .content-destination, .destination');
textMouseEnter.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = "green"
    })
});

const textMouseOut = document.querySelectorAll('.text-content, .content-destination, .destination');
textMouseOut.forEach(element => {
    element.addEventListener('mouseleave', event => {
        event.target.style.color = "purple";
        setTimeout(() => event.target.style.color = "", 2000)
    })
});



const btnClick = document.querySelectorAll('div .btn');
btnClick.forEach(element => {
    element.addEventListener('click', event2 => {
        event2.target.style.backgroundColor = "purple";
        setTimeout(() => event2.target.style.backgroundColor = "", 2000)
    })
})