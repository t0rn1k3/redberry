const start = document.getElementById('start');
const firstPage = document.getElementById('firstPage');
const lastPage = document.querySelector('.last-page');
const thanks = document.getElementById('thanks');
const popUpApp = document.getElementById('displayApplication');
const hideUp = document.getElementById('hideUp');

const submittedApplications = document.querySelector('.submitted-applications');
const closeSub = document.getElementById('closeSub')
const applications = document.getElementById('applications');
const form = document.getElementById('form');
const pageProgress = document.getElementById('pageProgress');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');
const tel = document.getElementById('tel');

const textError = document.getElementById('textError');
const skills = document.getElementById('skill');
const addSkill = document.getElementById('addSkill');
const experience = document.getElementById('experience');
const expBox = document.querySelector('.skill-container');
const skillName = document.getElementById('skillName');
const yearExperience = document.getElementById('yearExperience');
const svgSpan = document.getElementById('svgSpan');

const slider = document.querySelector('.carousel-slide');
const slideContent = document.querySelectorAll('.content');

const submit = document.getElementById('submit');
const goBack = document.getElementById('goBack');


//get radio elements by name

const work = document.getElementsByName('work');
const covidcont = document.getElementsByName('covidContact');
const covidVacc = document.getElementsByName('vaccinated');
const dev = document.getElementsByName('devtalks');


// covid page 

const covidPos = document.getElementById('covidPos');
const covidNEg = document.getElementById('covidNeg');
const covidContact = document.querySelector('.covid-contact');
const vaccPos = document.getElementById('vaccPos');
const vaccNeg =document.getElementById('vaccNeg');
const vaccinated = document.querySelector('.vaccinated');
const devtalksYes = document.getElementById('devtalksYes');
const devtalksNo = document.getElementById('devtalksNo');
const textarea = document.getElementById('textarea1');
const devtalksP = document.querySelector('.display');
const something = document.getElementById('something');
const contactDate = document.getElementById('contactDate')
const vaccineDate = document.getElementById('vaccineDate');



// move to submitted application page

applications.addEventListener('click', ()=> {
    submittedApplications.style.display = 'flex';
})


//close submitted page 

closeSub.addEventListener('click', ()=> {
    submittedApplications.style.display = 'none';
    firstPage.style.display = 'block';
})

// popup submitted form

popUpApp.addEventListener('click', ()=> {
    if (hideUp.style.overflow == 'visible') {
        popUpApp.style.transform = 'rotate(90deg)';
        hideUp.style.transform = 'translateY(-100%)';
        hideUp.style.overflow = 'hidden';
    }else {
        popUpApp.style.transform = 'rotate(-90deg)';
        hideUp.style.transform = 'translateY(0)';
        hideUp.style.overflow = 'visible';
    }
})


// show from on click

start.addEventListener('click', ()=> {
    firstPage.style.display = 'none';
    form.style.display = "block";
    pageProgress.style.display = 'flex';
});

// see all submited aplication page 

// aplications.addEventListener('')


// progress on click 
let currentActive = 1;


next.addEventListener('click', ()=> {
    currentActive++;
    
    if (currentActive >= circles.length) {
        currentActive = circles.length
    }
   
    update();
    
    moveToNext();

});


prev.addEventListener('click', ()=> {
    currentActive--;
    
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
    moveToPrev();


});

// click on go back button //  last page


goBack.addEventListener('click', ()=> {
    pageProgress.style.display = 'flex';
    currentActive--;
    
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
    moveToPrev();
    
})

// update progress


function update() {
    // personal info form validation //

    const minCharacter = 2;
    const GeoNumber = '+9955';
    const emailFormat = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/


    // check if form first name last name email and phone is valid
    if (firstName.value.length < minCharacter ) {
        textError.innerHTML = "Please enter at least two characters.<br>";
        slidePosition = -1;
        progress.style.width = 0;
        prev.disabled = true;
        currentActive = 1;
    }else if (lastName.value.length < minCharacter) {
        textError.innerHTML = "Please enter at least two characters.<br>";
        slidePosition = -1;
        progress.style.width = 0;
        currentActive = 1;
    }else if (email.value.length === 0){
        textError.innerHTML = "please enter valid email address!<br>";
        slidePosition = -1;
        progress.style.width = 0;
        currentActive = 1;
    }else if(!tel.value.includes(GeoNumber)) {
        textError.innerHTML = "enter phone with georgian format<br>";
        slidePosition = -1;
        progress.style.width = 0;
        currentActive = 1;
    }else {
        circles.forEach((circle, idx) => {
            if (idx < currentActive) {
                circle.classList.add('active');
            }else {
                circle.classList.remove('active');
            }
        });
    }
       
    

    const active = document.querySelectorAll('.active');

    progress.style.width = (active.length -1)  / (circles.length - 1) * 100 + '%';


    // manage next and previous button's status

    if (currentActive === 1) {
        prev.disabled = true;
    }else if(currentActive === circles.length) {
        pageProgress.style.display = 'none';
    }else {
        prev.disabled = false; 
        next.disabled = false;
    }
}




// slider

let slidePosition = 0;
const totalSlides = slideContent.length;


function newSlidePosition() {
    for (let slide of slideContent) {
        slide.classList.remove('content-visible');
        slide.classList.add('content-hidden');
    }
    slideContent[slidePosition].classList.add('content-visible');
}

//move to next button

function moveToNext() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }else {
        slidePosition++;
    }

    newSlidePosition();
}

//move to prev button

function moveToPrev() {
    if (slidePosition === 0) {
        slidePosition = 0;
    }else {
        slidePosition--;
    }

    newSlidePosition();
}



// add skills
let selectedValue = skills.options[skills.selectedIndex].innerHTML;
addSkill.addEventListener('click', ()=> {
    // let as = document.forms[0].skill.value;
    let selectedValue = skills.options[skills.selectedIndex].innerHTML;
    let exp = experience.value;
    let svg = `<svg selected onClick="deletE()" width="24px" height="24px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 13C7.35817 13 7 13.3582 7 13.8V14.2C7 14.6418 7.35817 15 7.8 15H20.2C20.6418 15 21 14.6418 21 14.2V13.8C21 13.3582 20.6418 13 20.2 13H7.8Z" /><path clip-rule="evenodd" d="M14 1C6.82031 1 1 6.82031 1 14C1 21.1797 6.82031 27 14 27C21.1797 27 27 21.1797 27 14C27 6.82031 21.1797 1 14 1ZM3 14C3 7.9248 7.92578 3 14 3C20.0742 3 25 7.9248 25 14C25 20.0752 20.0742 25 14 25C7.92578 25 3 20.0752 3 14Z"fill-rule="evenodd"/></svg>`


    //show submited skill and experience 

    if (experience.value < 1 ) {
        emptyExp.innerHTML = 'please tell us about your experience!'
    }else if (skillName.textContent == selectedValue) {
        emptyExp.innerHTML = 'your skill is already taken'
    }
    else {
        emptyExp.innerHTML = "";
        expBox.innerHTML += `
        <div class="skill-exper"> 
            ${skillName.innerHTML = selectedValue}
            ${yearExperience.innerHTML = `years of experience: ${exp}`}
            ${svgSpan.innerHTML = svg}
        </div>
        `
        
    }

});


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    lastPage.style.display = 'none';
    firstPage.style.display = 'block';


    // post  request
    const asyncPostCall = async () => {
        await fetch('https://bootcamp-2022.devtest.ge/api/application',
            {
            method : 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept' : 'application/json',
               },
            body: JSON.stringify(),
        })
        .then(response => response)
        .then(data => console.log(data))
    }
    asyncPostCall();
    
    const getData = () => {
        axios.get('https://bootcamp-2022.devtest.ge/api/applications?token=21af9e1d-2eae-45ae-8264-2189ca22a824')
            .then(response => response)
    
            
    }
    getData();

    
});

//working with API








const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');
const option7 = document.getElementById('option7');
const option8 = document.getElementById('option8');


/// skills API request
const request = new XMLHttpRequest();
request.open('GET', 'https://bootcamp-2022.devtest.ge/api/skills');
request.send();

request.addEventListener('load', ()=> {
    const skillData = JSON.parse(request.responseText);

    option1.innerHTML = skillData[0].title
    option2.innerHTML = skillData[1].title
    option3.innerHTML = skillData[2].title
    option4.innerHTML = skillData[3].title
    option5.innerHTML = skillData[4].title
    option6.innerHTML = skillData[5].title
    option7.innerHTML = skillData[6].title
    option8.innerHTML = skillData[7].title

});







// delete submited skills 

//   function deletE() {
//     expBox.innerHTML = `
//     <div class="skill-exper"> 
//         ${skillName.innerHTML = ""}
//         ${yearExperience.innerHTML = ""}
//         ${svgSpan.innerHTML = ""}
//     </div>
//     `
//   }


// required if element is visible


//covid contact rquired 

covidPos.addEventListener('click', ()=> {
    contactDate.setAttribute('required', '')
});
covidNEg.addEventListener('click', ()=> {
    contactDate.removeAttribute('required', '');
});

// covid vaccine required 
vaccPos.addEventListener('click', ()=> {
    vaccineDate.setAttribute('required', '')
});

vaccPos.addEventListener('click', ()=> {
    vaccineDate.removeAttribute('required', '')
});


//devtalks textarea required
devtalksYes.addEventListener('click', ()=> {
    textarea.setAttribute('required', '')
});
devtalksNo.addEventListener('click', ()=> {
    textarea.removeAttribute('required');
})

// show date if covid contact = yes

covidPos.addEventListener('click', ()=> {
        covidContact.style.height = 'auto';
        covidContact.style.overflow = 'visible';
});

//Clear date if covid contact = no
covidNEg.addEventListener('click', ()=> {
    covidContact.style.height = 0 ;
    covidContact.style.overflow = 'hidden';
});


// show date if vaccinated
vaccPos.addEventListener('click', ()=> {
    vaccinated.style.height = 'auto';
    vaccinated.style.overflow = 'visible';
});

// clear date if not vaccinated

vaccNeg.addEventListener('click', ()=> {
    
    vaccinated.style.height = 0;
    vaccinated.style.overflow = 'hidden';
});

//show devtalks textare if answer is yes

devtalksYes.addEventListener('click', ()=> {
    textarea.style.display = 'block';
    devtalksP.style.display = 'block';
});

//clear devtalks textare if answer is no

devtalksNo.addEventListener('click', ()=> {
    textarea.style.display = 'none';
    devtalksP.style.display = 'none';
});