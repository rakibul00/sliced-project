// const productImg = [...document.querySelectorAll("#card")];
// const nextBtn = [...document.querySelectorAll(".next-btn")];
// const perBtn = [...document.querySelectorAll(".per-btn")];

// productImg.forEach((item, i)=>{
//     let containerDimension = item.getBoundingClientRect();
//     let conatinerWidth = containerDimension.width;

//     nextBtn[i].addEventListener('click', ()=>{
//         item.scrollLeft += conatinerWidth;

//     });

//     perBtn[i].addEventListener('click', ()=>{
//         item.scrollLeft -= conatinerWidth;

//     });


// });

const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcon.forEach(icon =>{
    icon.addEventListener("click", () =>{
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

    });
});
const dragStart = (e) =>{
     isDragStart = true;
     prevPageX = e.pageX;
     prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positonDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positonDiff;
}

const dragstop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);