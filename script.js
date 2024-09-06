const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Auto play
let runAutoPlay = setTimeout(function () {
    next.click();
}, 8000);

next.addEventListener("click", () => {
    initSlider("next");
});

prev.addEventListener("click", () => {
    initSlider("prev");
});

const initSlider = type => {
    const sliderItems = list.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (type === "next") {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
    } else {
        const lastItemsPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemsPosition]);
        thumbnail.prepend(thumbnailItems[lastItemsPosition]);
        slider.classList.add("prev");
    }

    setTimeout(function () {
        slider.classList.remove("next");
        slider.classList.remove("prev");
    }, 2000);
};
