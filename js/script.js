const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";

// Question 2
const headings = document.querySelectorAll("h4");

for(let i = 0; i < headings.length; i++) {
    headings[i].style.marginBottom = "-20px";
}

// Question 3
headings[1].style.backgroundColor = "red";

// Question 4
const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";
