// Your code goes here
const peekABoo = document.querySelectorAll("img")
    peekABoo.forEach(element => {
        element.addEventListener("mouseover", event => {
         event.target.style.display = "none"
         setTimeout(() => event.target.style.display = "", 500)
    })
})

const respect = document.querySelector("body")
    respect.addEventListener("keydown", event => {
     if(event.keyCode === 70){
        alert("Respect")
    }
})

const redWheel = document.querySelector("body")
    redWheel.addEventListener("wheel", event => {
        event.target.style.backgroundColor = "red"
        setTimeout(() => event.target.style.backgroundColor = "", 500)
})

const btnClick = document.querySelectorAll('.btn')
    btnClick.forEach(element => {
        element.addEventListener("dblclick", event => {
         alert("DOUBLE CLICK!!!"+event.target)
    })
})

window.addEventListener('scroll', () => {
    const navScroll = document.querySelector('header')
        navScroll.style.backgroundColor = 'green'
        setTimeout(() => navScroll.style.backgroundColor = "", 500)
})

window.addEventListener('resize', () => {
    alert('Dude, the walls are moving!')
})

const copy = document.querySelector('body')

const click = document.querySelectorAll('.btn')







































































// const mouseoverDark = document.querySelectorAll('.nav-container, body,  .footer');
// mouseoverDark.forEach(element => {
//     element.addEventListener('mouseover', event => {
//         event.target.style.backgroundColor = "black";
//     })
// })

// const mouseoverPurple = document.querySelectorAll('.nav-container');
// mouseoverPurple.forEach(element => {
//     element.addEventListener('mouseover', event => {
//         event.stopPropagation();
//         event.target.style.color = "purple";
//         setTimeout(() => event.target.style.color = "", 2000)
//     })
// });

// const introMouseEnter = document.querySelectorAll('.intro, .text-content, .content-destination');
// introMouseEnter.forEach(element => {
//     element.addEventListener('mouseenter', event => {
//         event.target.style.color = "green"
//         console.log(event);
//     })
// });

// const introMouseOut = document.querySelectorAll('.intro, .text-content, .content-destination');
// introMouseOut.forEach(element => {
//     element.addEventListener('mouseleave', event => {
//         event.target.style.color = "purple";
//         setTimeout(() => event.target.style.color = "", 2000)
//     })
// });

// const footerMouseEnter = document.querySelectorAll('.footer p, .destination');
// footerMouseEnter.forEach(element => {
//     element.addEventListener('mouseenter', event => {
//         event.target.style.color = "green"
//         console.log(event);
//     })
// });

// const footerMouseOut = document.querySelectorAll('.footer p, .destination');
// footerMouseOut.forEach(element => {
//     element.addEventListener('mouseleave', event => {
//         event.target.style.color = "purple";
//         setTimeout(() => event.target.style.color = "", 2000)
//     })
// });


// const btnClick = document.querySelectorAll('div .btn');
// btnClick.forEach(element => {
//     element.addEventListener('click', event2 => {
//         event2.target.style.backgroundColor = "purple";
//         setTimeout(() => event2.target.style.backgroundColor = "", 2000)
//     })
// })