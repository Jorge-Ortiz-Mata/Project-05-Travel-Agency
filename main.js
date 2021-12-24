

// ----------------------------------------------------------- SECOND SECTION -----------------------------------------------------

const secondSection = document.querySelector ('.secondSection');

const secondLeft = document.createElement ('div');
const secondRight = document.createElement ('div');
const imageSecondSection = document.createElement ('img');
const titleSecond = document.createElement ('h3');
const textSecond = document.createElement ('p');

secondSection.appendChild (secondLeft);
secondSection.appendChild (secondRight);
secondLeft.appendChild (imageSecondSection);
secondRight.appendChild (titleSecond);
secondRight.appendChild (textSecond);

secondLeft.classList.add ('secondLeft');
secondRight.classList.add ('secondRight');
imageSecondSection.classList.add ('imageSecondSection');
titleSecond.classList.add ('titleSecond');
textSecond.classList.add ('textSecond');

imageSecondSection.src = 'media/plane.jpg';

titleSecond.innerHTML = `What are the benefits of traveling?`;
textSecond.innerHTML = `Travel makes you happier. <br>According to a study says that “waiting for experiences tends to be more positive than waiting for possessions.” And, it goes on to say that “people derive more happiness from the anticipation of experiential purchases and that waiting for an experience tends to be more pleasurable and exciting than waiting to receive a material good”.`;

// ----------------------------------------------------------- THIRD SECTION -----------------------------------------------------

const thirdSection = document.querySelector ('.thirdSection');

const thirdDiv = document.createElement ('div');
const thirdTitle = document.createElement ('h3');
const thirdButton = document.createElement ('button');

thirdSection.appendChild (thirdDiv);
thirdDiv.appendChild (thirdTitle);
thirdDiv.appendChild (thirdButton);

thirdDiv.classList.add ('thirdDiv');
thirdTitle.classList.add ('thirdTitle');
thirdButton.classList.add ('thirdButton');