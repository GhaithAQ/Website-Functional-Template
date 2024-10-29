// Select Landing Page Element
let landingPage = document.querySelector(".Landing-page");

// Get Array Of Images
let imagesArray = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

let randomNumber;
let changImgActive;

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

yes.addEventListener("click", () => {
    no.classList.remove("active");
    yes.classList.add("active");
    localStorage.setItem("autoChange", true);
    changImgActive = setInterval(() => {



        // Get Random Number
        randomNumber = Math.floor(Math.random() * imagesArray.length);

        // Changing Background Image Url
        landingPage.style.backgroundImage = `url('images/${imagesArray[randomNumber]}')`;
    }, 4000); // chaning image every 4 seconds
});

no.addEventListener("click", () => {
    yes.classList.remove("active");
    no.classList.add("active");
    localStorage.setItem("autoChange", false);

    localStorage.setItem("backgroundImage", landingPage.style.backgroundImage);


    // Stop changing background image
    clearInterval(changImgActive);
});










// Toggle-setting
document.querySelector(".bi-gear-fill").onclick = function () {
    this.classList.toggle("spin");
    document.querySelector(".setting-box").classList.toggle("open");
};

// select two type of option-box
const option = document.querySelector(".option-box");

// Switch Colors for overlayer
const colorsLi1 = document.querySelectorAll(".colors-list1 li");
const overlayer = document.querySelector(".overlay");
const optionh1 = document.querySelector(".one h1");
colorsLi1.forEach(colorLi => {

    // Add event listener for color selection
    colorLi.addEventListener("click", function (e) {
        // check if the colorLi contains "active" class
        colorsLi1.forEach(li => li.classList.remove("active"));
        // Change background color
        overlayer.style.backgroundColor = this.dataset.color;
        // Add active class to selected color
        this.classList.add("active");
        optionh1.style.color = this.dataset.color;
        // console.log(e.target.dataset.color);
        // console.log(this.dataset.color); 
        localStorage.setItem("backgroundColor", this.dataset.color);
    });


});



// Change Background Color on page load
let storedColor = localStorage.getItem("backgroundColor");
if (storedColor) {
    overlayer.style.backgroundColor = storedColor;
    optionh1.style.color = storedColor;
}


// change "creative" word color
const creativeword = document.querySelector(".introduction-text h1 span");
const colorsLi2 = document.querySelectorAll(".colors-list2 li");
const optionh2 = document.querySelector(".two h1");
colorsLi2.forEach(colorLi => {
    colorLi.addEventListener("click", function (e) {
        colorsLi2.forEach(li => li.classList.remove("active"));


        optionh2.style.color = this.dataset.color;

        // console.log(e.target.dataset.color);
        // Add active class to selected color
        this.classList.add("active");
        // set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("creativeWordColor", e.target.dataset.color);
    });
})


if (localStorage.getItem("creativeWordColor") != null) {
    let storedColor = localStorage.getItem("creativeWordColor");
    console.log(storedColor);
    optionh2.style.color = storedColor;
}

/*

// progress percentage
const skillsprogress = document.querySelectorAll('.skill-progress span');

skillsprogress.forEach(progress => {
    const progressWidth = progress.getAttribute('data-progress');
    progress.style.width = `${progressWidth}`;
});
*/



window.onload = () => {

    const autoChangeValue = localStorage.getItem("autoChange");
    if (autoChangeValue === 'false') {
        const storedBackground = localStorage.getItem("backgroundImage");
        landingPage.style.backgroundImage = storedBackground;
        no.classList.add("active");
    } else {
        yes.click();
    }


    // get the color of the "creative" word
    const creativeWordColor = localStorage.getItem("creativeWordColor");
    document.documentElement.style.setProperty("--main-color", creativeWordColor);

};


// Create Popup With Image
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {
        // Create Overlay Element
        let overlay = document.createElement('div');

        // Add Class To overlay
        overlay.className = "popup-overlay";

        // Append Overlay To the body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement('div');

        // Add Class To Popup box
        popupBox.className = "popup-box";

        if (img.alt !== null) {
            // Create Heading
            let imgHeading = document.createElement('h3');

            // Create text For Heading
            let imgtext = document.createTextNode(img.alt);

            // Append the text to the Heading
            imgHeading.appendChild(imgtext)

            // Append the Heading to the Popup Box
            popupBox.appendChild(imgHeading);
        }


        // Create the image
        let popupImage = document.createElement('img');

        // Set the source of the image
        popupImage.src = img.src;

        // Add Image To popup box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Add this setTimeout to trigger the transition
        setTimeout(() => {
            popupBox.style.opacity = '1';
            popupBox.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);


        // Create The Close Span
        let closeButton = document.createElement('button');

        // create the close button text
        let CloseButtonText = document.createTextNode("x");

        // Append the close button text to the Close Span
        closeButton.appendChild(CloseButtonText);

        // Add Class To Close Button
        closeButton.className = "close-button";

        // Add close button to the popup box
        popupBox.appendChild(closeButton);

        closeButton.addEventListener("click", () => {
            popupBox.remove();
            overlay.remove();
        });
    })



})





/*

let skills = document.querySelectorAll('.skills');
window.onscroll = function () {
    let skillsoffsetTop = skills[0].offsetTop;
    let skillsouterHeight = skills[0].offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    console.log(skillsoffsetTop + skillsouterHeight - windowHeight - 100);
    // Add a small threshold (e.g., 100px) to trigger animation earlier
    if (scrollTop > (skillsoffsetTop + skillsouterHeight - windowHeight - 100)) {
        let allskills = document.querySelectorAll('.skill-progress span');
        allskills.forEach(skillSpan => {
            skillSpan.style.width = skillSpan.dataset.progress;
        });
    } else {
        let allskills = document.querySelectorAll('.skill-progress span');
        allskills.forEach(skillSpan => {
            skillSpan.style.width = '0';
        });
    }
};
*/

const skills = document.querySelectorAll('.skills');
const allSkills = document.querySelectorAll('.skill-progress span');

const handleScroll = () => {
    const { offsetTop, offsetHeight } = skills[0];
    const { innerHeight, pageYOffset } = window;
    const scrollTop = pageYOffset || document.documentElement.scrollTop;
    const threshold = 100;
    /*
        console.log(scrollTop);
        console.log(offsetTop + offsetHeight - innerHeight - threshold);*/

    const isInView = scrollTop > (offsetTop + offsetHeight - innerHeight - threshold);

    allSkills.forEach(skillSpan => {
        skillSpan.style.width = isInView ? skillSpan.dataset.progress : '0';
    });
};

window.addEventListener('scroll', handleScroll);

const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();