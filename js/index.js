// Your code goes here
const mouseoverDark = document.querySelectorAll('.nav-container, body,  .footer');
mouseoverDark.forEach(element => {
    element.addEventListener('mouseover', event => {
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

const introMouseEnter = document.querySelectorAll('.intro, .text-content, .content-destination, .destination');
introMouseEnter.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = "green"
        console.log(event);
    })
});

const introMouseOut = document.querySelectorAll('.intro, .text-content, .content-destination, .destination');
introMouseOut.forEach(element => {
    element.addEventListener('mouseleave', event => {
        event.target.style.color = "purple";
        setTimeout(() => event.target.style.color = "", 2000)
    })
});

const footerMouseEnter = document.querySelectorAll('.footer p');
footerMouseEnter.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = "green"
        console.log(event);
    })
});

const footerMouseOut = document.querySelectorAll('.footer p');
footerMouseOut.forEach(element => {
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