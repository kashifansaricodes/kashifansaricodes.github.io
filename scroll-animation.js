// SCROLL ANIMATION FUNCTIONALITIES

// Import 'polyfil'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';




// 1. Top Scroll Animation
// // Obtain Object
// const scrollTracker = document.querySelector(".scroll-tracker");

// // Create Timeline
// const scrollTrackingTimeline = new ScrollTimeline({
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// // Create Animation
// scrollTracker.animate(
//     {
//         transform: ["scaleX(0)", "scaleX(1)"],
//     },
//     {
//         duration: 1,
//         timeline: scrollTrackingTimeline
//     }
// )


// 2. Hero Section
// Obtain objects with 'animation' class
const hero = document.querySelector(".hero");

const timeline = new ScrollTimeline({
    scrollOffsets: [
        { target: hero, edge: "end", threshold: "0" },
        { target: hero, edge: "start", threshold: "1" },
    ],
});

hero.animate(
    {
        opacity: ["1", "0"],
        filter: ["blur(0)", "blur(400px)"],
        scale: ["1", "10",],
    },
    {
        timeline,
    },
);



// 3. Auto Display (Section Title)
// // Obtain objects with 'animation' class
// const autoDisplays = document.querySelectorAll(".autoDisplay")

// // Create Intersection Observer
// const autoDisplayObs = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('autoDisplay-animation')
//         }
//             else {
//                 entry.target.classList.remove('autoDisplay-animation')
//             }

//     })
// },
//    { threshold: 0.2
//    });
// //
// for (let i = 0; i < autoDisplays.length; i++) {
// const elements = autoDisplays[i];

// autoDisplayObs.observe(elements);
// }


// 4. Auto Blur Animation (Cards)
// Obtain objects with 'animation' class
const autoBlurs = document.querySelectorAll(".autoBlur")

// Create Intersection Observer
const autoBlurObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('autoBlur-animation')
        }
            else {
                entry.target.classList.remove('autoBlur-animation')
            }

    })
},
   { threshold: 0.2
   });
//
for (let i = 0; i < autoBlurs.length; i++) {
const elements = autoBlurs[i];

autoBlurObs.observe(elements);
}


// 5. Fade-in Right (Project-info, Tech-exp)
const the_animation = document.querySelectorAll('.fadeInRight')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInRight-animation')
        }
            else {
                entry.target.classList.remove('fadeInRight-animation')
            }

    })
},
   { threshold: 0
   });
//
for (let i = 0; i < the_animation.length; i++) {
const elements = the_animation[i];

observer.observe(elements);
}

// 6. Fade-in Left (Project-info, Tech-exp)
const left = document.querySelectorAll('.fadeInLeft')

const leftObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft-animation')
        }
            else {
                entry.target.classList.remove('fadeInLeft-animation')
            }

    })
},
   { threshold: 0
   });
//
for (let i = 0; i < left.length; i++) {
const elements = left[i];

leftObs.observe(elements);
}
































// 4. Blur Effect Animation
// const autoBlurs = document.querySelectorAll(".autoBlur")

// // Create timeline and animation for each object using 'autoBlur'
// autoBlurs.forEach((objectBlur) => {

//     const objOffsetTop = objectBlur.offsetTop;
//     const objHeight = objectBlur.offsetHeight;

//     const autoBlurTimeline = new ScrollTimeline({
//         scrollOffsets: [
//             // { target: objectBlur, edge: "end", threshold: "0" },
//             // { target: objectBlur, edge: "start", threshold: "1" },
            
//             CSS.px(objOffsetTop + objHeight - window.innerHeight),
//             CSS.px(objOffsetTop - 200),
//         ],
//     });

//     // Create Animation
//     objectBlur.animate(
//         {
//             transform: [
//                 "perspective(1000px) rotateX(45deg)",
//                 "perspective(1000px) rotate(0)",
//             ],
//             opacity: ["0", "1"],
//         },
//         {
//             duration: 1,
//             easing: "linear",
//             timeline: autoBlurTimeline,
//         }
//     )
// })




