
// ----------------------------------------------------------- NAV SECTION -----------------------------------------------------

const firstPart = document.querySelector ('.firstPart');
const exploreMoreButton = document.querySelector ('.exploreMoreButton');
const firstSection = document.querySelector ('.firstSecion');

exploreMoreFunction = () => {

    window.scrollTo ({
        left: 0,
        top: firstSection.offsetTop - firstPart.getBoundingClientRect().height,
    });

}

exploreMoreButton.addEventListener ('click', exploreMoreFunction);

// ----------------------------------------------------------- SECOND SECTION -----------------------------------------------------

const secondSection = document.querySelector('.secondSection');

const secondLeft = document.createElement('div');
const secondRight = document.createElement('div');
const imageSecondSection = document.createElement('img');
const titleSecond = document.createElement('h3');
const textSecond = document.createElement('p');

secondSection.appendChild(secondLeft);
secondSection.appendChild(secondRight);
secondLeft.appendChild(imageSecondSection);
secondRight.appendChild(titleSecond);
secondRight.appendChild(textSecond);

secondLeft.classList.add('secondLeft');
secondRight.classList.add('secondRight');
imageSecondSection.classList.add('imageSecondSection');
titleSecond.classList.add('titleSecond');
textSecond.classList.add('textSecond');

imageSecondSection.src = 'media/plane.png';

titleSecond.innerHTML = `What are the benefits of traveling?`;
textSecond.innerHTML = `Travel makes you happier. <br>According to a study says that “waiting for experiences tends to be more positive than waiting for possessions.” And, it goes on to say that “people derive more happiness from the anticipation of experiential purchases and that waiting for an experience tends to be more pleasurable and exciting than waiting to receive a material good”.`;

// ----------------------------------------------------------- THIRD SECTION -----------------------------------------------------

const thirdSection = document.querySelector('.thirdSection');

const thirdDiv = document.createElement('div');
const thirdTitle = document.createElement('h3');
const thirdButton = document.createElement('button');

thirdSection.appendChild(thirdDiv);
thirdDiv.appendChild(thirdTitle);
thirdDiv.appendChild(thirdButton);

thirdDiv.classList.add('thirdDiv');
thirdTitle.classList.add('thirdTitle');
thirdButton.classList.add('thirdButton');

thirdTitle.innerHTML = `Do you have questions or doubts about how can you start travelling?`;
thirdButton.innerHTML = `Show more.`;

const fourthSection = document.querySelector('.fourthSection');

showQuestionsSection = () => {

    window.scrollTo ({
        left: 0,
        top: fourthSection.offsetTop - firstPart.getBoundingClientRect().height,
    });

}

thirdButton.addEventListener('click', showQuestionsSection);

// ----------------------------------------------------------- FOURTH SECTION -----------------------------------------------------

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {

    const questionButton = question.querySelector('.questionButton');

    questionButton.addEventListener('click', function() {

        questions.forEach(function(newQuestion) {

            if (question !== newQuestion) {
                newQuestion.classList.remove('showAll');
            }
        });
        question.classList.toggle("showAll");
    });
});

// ----------------------------------------------------------- FIFTH SECTION -----------------------------------------------------

const members = [
    {
        name: 'Susana Smith.',
        image: 'media/Maria.jpg',
        id: 'SS10HR-02',
        position: 'HR Manager.',
        email: 'susana-smith@travel-agency.com',
        description: ' Hello, I am Susana Smith and I am in charge of HR department.'
    },
    {
        name: 'Mark Howard.',
        image: 'media/Mario.jpg',
        id: 'MH12MK-02',
        position: 'Marketing Manager.',
        email: 'mark-howard@travel-agency.com',
        description: ' Hello, I am Mark Howard and I am in charge of Marketing department.'
    },
    {
        name: 'Tracy Jones.',
        image: 'media/Sarah.jpg',
        id: 'TJ15SA-02',
        position: 'Sales Manager.',
        email: 'tracy-jones@travel-agency.com',
        description: ' Hello, I am Tracy Jones and I am in charge of Sales department.'
    },
    {
        name: 'Joseph Phillips.',
        image: 'media/Joseph.jpg',
        id: 'JP15WV-22',
        position: 'Sales Engineer.',
        email: 'joseph-phillips@travel-agency.com',
        description: ' Hello, I am Tracy Jones and I am in charge of Sales department.'
    }
];

let numberMember = 0;

const fifthSection = document.querySelector('.fifthSection');

const fifthSectionDiv = document.createElement ('div');
const fifthSectionTitle = document.createElement('h2');
const divFifthSection = document.createElement('div');
const divFifthButtons = document.createElement('div');

const nameMember = document.createElement('h3');
const imageMember = document.createElement('img');
const idMember = document.createElement('p');
const positionMember = document.createElement('p');
const emailMember = document.createElement('p')
const descriptionMember = document.createElement('p');

const fifthFirstButton = document.createElement('button');
const fifthSecondButton = document.createElement('button');
const fifthThirdButton = document.createElement('button');

fifthSection.appendChild(fifthSectionDiv);
fifthSectionDiv.appendChild(fifthSectionTitle);
fifthSectionDiv.appendChild(divFifthSection);
fifthSectionDiv.appendChild(divFifthButtons);
divFifthSection.appendChild(nameMember);
divFifthSection.appendChild(imageMember);
divFifthSection.appendChild(idMember);
divFifthSection.appendChild(positionMember);
divFifthSection.appendChild(emailMember);
divFifthSection.appendChild(descriptionMember);
divFifthButtons.appendChild(fifthSecondButton);
divFifthButtons.appendChild(fifthThirdButton);
divFifthButtons.appendChild(fifthFirstButton);

fifthSectionDiv.classList.add('fifthSectionDiv');
fifthSectionTitle.classList.add('fifthSectionTitle');
divFifthSection.classList.add('divFifthSection');
divFifthButtons.classList.add('divFifthButtons');
nameMember.classList.add('nameMember');
imageMember.classList.add('imageMember');
idMember.classList.add('idMember');
positionMember.classList.add('positionMember');
emailMember.classList.add('emailMember');
descriptionMember.classList.add('descriptionMember');
fifthFirstButton.classList.add('fifthFirstButton');
fifthSecondButton.classList.add('fifthSecondButton');
fifthThirdButton.classList.add('fifthThirdButton');

fifthSectionTitle.innerHTML = `Meet our staff.`;
fifthFirstButton.innerHTML = `Next.`;
fifthSecondButton.innerHTML = `Previous.`;
fifthThirdButton.innerHTML = `Random.`;

nameMember.innerHTML = `${members[numberMember].name}`;
imageMember.src = members[numberMember].image;
idMember.innerHTML = `${members[numberMember].id}`;
positionMember.innerHTML = `${members[numberMember].position}`;
emailMember.innerHTML = `${members[numberMember].email}`;
descriptionMember.innerHTML = `${members[numberMember].description}`;

showNextMember = () => {

    if (numberMember === (members.length-1)) {
        numberMember = 0;
    }
    else {
        numberMember++;
    }

    nameMember.innerHTML = `${members[numberMember].name}`;
    imageMember.src = members[numberMember].image;
    idMember.innerHTML = `${members[numberMember].id}`;
    positionMember.innerHTML = `${members[numberMember].position}`;
    emailMember.innerHTML = `${members[numberMember].email}`;
    descriptionMember.innerHTML = `${members[numberMember].description}`;
}

showPreviousMember = () => {

    if (numberMember == 0){
        numberMember = (members.length - 1);
    }
    else {
        numberMember--;
    }

    console.log (numberMember);

    nameMember.innerHTML = `${members[numberMember].name}`;
    imageMember.src = members[numberMember].image;
    idMember.innerHTML = `${members[numberMember].id}`;
    positionMember.innerHTML = `${members[numberMember].position}`;
    emailMember.innerHTML = `${members[numberMember].email}`;
    descriptionMember.innerHTML = `${members[numberMember].description}`;
}

randomMember = () => {

    let x = Math.floor(Math.random() * members.length);
    numberMember = x;

    console.log (numberMember);

    nameMember.innerHTML = `${members[numberMember].name}`;
    imageMember.src = members[numberMember].image;
    idMember.innerHTML = `${members[numberMember].id}`;
    positionMember.innerHTML = `${members[numberMember].position}`;
    emailMember.innerHTML = `${members[numberMember].email}`;
    descriptionMember.innerHTML = `${members[numberMember].description}`;
}

fifthFirstButton.addEventListener ('click', showNextMember);
fifthSecondButton.addEventListener ('click', showPreviousMember);
fifthThirdButton.addEventListener ('click', randomMember);


// ----------------------------------------------------------- FIX MENU. -----------------------------------------------------

window.addEventListener ('scroll', function () {

    let scrollValue = window.pageYOffset;

    if (scrollValue > 90){
        firstPart.classList.add ('fixedMenu');
    }

    else if (scrollValue < 90) {
        firstPart.classList.remove ('fixedMenu');
    }
});

// ----------------------------------------------------------- SIXTH SECTION. -----------------------------------------------------

const sixthContinentAll = document.querySelector('.sixthContinentAll');
const sixthContinentAmerica = document.querySelector('.sixthContinentAmerica');
const sixthContinentEurope = document.querySelector('.sixthContinentEurope');
const sixthContinentAsia = document.querySelector('.sixthContinentAsia');

const CountriesAmerica = document.querySelectorAll('.sixthCountryAmerica');
const CountriesEurope = document.querySelectorAll('.sixthCountryEurope');
const CountriesAsia = document.querySelectorAll('.sixthCountryAsia');

sixthAllFunction = () => {

    CountriesAmerica.forEach(function(CountryAmerica) {
        CountryAmerica.classList.remove('hideCountry');
    });
    
    CountriesEurope.forEach(function(CountryEurope) {
        CountryEurope.classList.remove('hideCountry')
    });

    CountriesAsia.forEach(function(CountryAsia) {
        CountryAsia.classList.remove('hideCountry');
    });

}

sixthAmericaFunction = () => {

    CountriesAmerica.forEach(function(CountryAmerica) {
        CountryAmerica.classList.remove('hideCountry');
    });

    CountriesEurope.forEach(function(CountryEurope) {
        CountryEurope.classList.add('hideCountry')
    });

    CountriesAsia.forEach(function(CountryAsia) {
        CountryAsia.classList.add('hideCountry');
    });

}

sixthEuropeFunction = () => {

    CountriesEurope.forEach(function(CountryEurope) {
        CountryEurope.classList.remove('hideCountry')
    });

    CountriesAmerica.forEach(function(CountryAmerica) {
        CountryAmerica.classList.add('hideCountry');
    });

    CountriesAsia.forEach(function(CountryAsia) {
        CountryAsia.classList.add('hideCountry');
    });

}

sixthAsiaFunction = () => {

    CountriesAsia.forEach(function(CountryAsia) {
        CountryAsia.classList.remove('hideCountry');
    });

    CountriesAmerica.forEach(function(CountryAmerica) {
        CountryAmerica.classList.add('hideCountry');
    });

    CountriesEurope.forEach(function(CountryEurope) {
        CountryEurope.classList.add('hideCountry')
    });
}

sixthContinentAll.addEventListener('click', sixthAllFunction);
sixthContinentAmerica.addEventListener('click', sixthAmericaFunction);
sixthContinentEurope.addEventListener('click', sixthEuropeFunction);
sixthContinentAsia.addEventListener('click', sixthAsiaFunction);

// ----------------------------------------------------------- SIDE BAR. -----------------------------------------------------

const showSideBar = document.querySelector('.showSideBar');
const closeButtonSidebar = document.querySelector('.closeButtonSidebar');
const sideBar = document.querySelector('.sideBar');

showSideBarFunction = () => {
    sideBar.classList.add('shoWideBar');
}

closeSideBarFunction = () => {
    sideBar.classList.remove('shoWideBar');
}

showSideBar.addEventListener('click', showSideBarFunction);
closeButtonSidebar.addEventListener('click', closeSideBarFunction);
