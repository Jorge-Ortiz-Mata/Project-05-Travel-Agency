

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

imageSecondSection.src = 'media/plane.png';

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

thirdTitle.innerHTML = `Do you have questions or doubts about how can you start travelling?`;
thirdButton.innerHTML = `Show more.`;

// ----------------------------------------------------------- FOURTH SECTION -----------------------------------------------------

const questions = document.querySelectorAll ('.question');

console.log (questions);

questions.forEach (function (question) {

    const questionButton = question.querySelector ('.questionButton');

    questionButton.addEventListener ('click', function () {

        questions.forEach (function (newQuestion) {

            if (question !== newQuestion) {
                newQuestion.classList.remove ('showAll');
            }

        });

        question.classList.toggle ("showAll");

    });

});

// ----------------------------------------------------------- FIFTH SECTION -----------------------------------------------------

const members = [
    {
        name: 'Susana Smith',
        id: 'SS10HR-02',
        position: 'HR Manager',
        email: 'susana-smith@travel-agency.com',
        description: ' Hello, I am Susana Smith and I am in charge of HR department.'
    },
    {
        name: 'Mark Howard',
        id: 'MH12MK-02',
        position: 'Marketing Manager',
        email: 'mark-howard@travel-agency.com',
        description: ' Hello, I am Mark Howard and I am in charge of Marketing department.'
    },
    {
        name: 'Tracy Jones',
        id: 'TJ15SA-02',
        position: 'Sales Manager ',
        email: 'tracy-jones@travel-agency.com',
        description: ' Hello, I am Tracy Jones and I am in charge of Sales department.'
    }
];

const fifthSection = document.querySelector ('.fifthSection');

const divFifthSection = document.createElement ('div');

const nameMember = document.createElement ('h3');
const idMember = document.createElement ('p');
const positionMember = document.createElement ('p');
const emailMember = document.createElement ('p')
const descriptionMember = document.createElement ('p');

fifthSection.appendChild (divFifthSection);
divFifthSection.appendChild (nameMember);
divFifthSection.appendChild (idMember);
divFifthSection.appendChild (positionMember);
divFifthSection.appendChild (emailMember);
divFifthSection.classList (descriptionMember);
