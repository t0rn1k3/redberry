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
const expBoxes = document.querySelector('.skill-container');

const slider = document.querySelector('.carousel-slide');
const slideContent = document.querySelectorAll('.content');

const submit = document.getElementById('submit');
const goBack = document.getElementById('goBack');


//get radio elements by name

const works = document.getElementsByName('works');
const covidconts = document.getElementsByName('covidContacts');
const covidVaccs = document.getElementsByName('vaccinateds');
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



// popup submitted form

// popUpApp.addEventListener('click', ()=> {
//     if (hideUp.style.overflow == 'visible') {
//         popUpApp.style.transform = 'rotate(90deg)';
//         hideUp.style.transform = 'translateY(-100%)';
//         hideUp.style.overflow = 'hidden';
//     }else {
//         popUpApp.style.transform = 'rotate(-90deg)';
//         hideUp.style.transform = 'translateY(0)';
//         hideUp.style.overflow = 'visible';
//     }
// })


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




addSkill.addEventListener('click', ()=> {
    

    const selectedSkills = [
        {
            selectedValue: skills.options[skills.selectedIndex].innerHTML,
            yearExperience: experience.value
        }
    ]

    //show submited skill and experience 

        emptyExp.innerHTML = "";
        selectedSkills.forEach(selected => {
            const skillCont = document.createElement('div');
            const skillNameCont = document.createElement('span');
            const yearExp = document.createElement('span');
            const svg = document.createElement('svg');

            if (experience.value.length < 1) {
                emptyExp.innerText = 'you should enter your experience in years!'
            }else {
                
                skillCont.classList.add('skill-exper');
                expBoxes.appendChild(skillCont);
    
                
                skillNameCont.classList.add('skill-name');
                skillNameCont.innerText = selected.selectedValue
                skillCont.appendChild(skillNameCont);
    
                
                yearExp.classList.add('exp');
                yearExp.innerText = `epxerience in years: ${selected.yearExperience}`
                skillCont.appendChild(yearExp);
    
                
                svg.classList.add('svg-span');
                skillCont.appendChild(svg);
                svg.innerHTML = `
                <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 13C7.35817 13 7 13.3582 7 13.8V14.2C7 14.6418 7.35817 15 7.8 15H20.2C20.6418 15 21 14.6418 21 14.2V13.8C21 13.3582 20.6418 13 20.2 13H7.8Z" fill="black"/><path clip-rule="evenodd" d="M14 1C6.82031 1 1 6.82031 1 14C1 21.1797 6.82031 27 14 27C21.1797 27 27 21.1797 27 14C27 6.82031 21.1797 1 14 1ZM3 14C3 7.9248 7.92578 3 14 3C20.0742 3 25 7.9248 25 14C25 20.0752 20.0742 25 14 25C7.92578 25 3 20.0752 3 14Z" fill="black" fill-rule="evenodd"/></svg>
                `
                //remove skills 
    
                svg.addEventListener('click', ()=>{
                    skillCont.style.display = 'none';
                })
            }
            
        });

        
});


const closeSvg = document.createElement('svg');
closeSvg.innerHTML = `<svg id="closeSub" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="white"/>
</svg>`
closeSvg.setAttribute('id', 'closeSub');

closeSvg.addEventListener('click', ()=> {
    submittedApplications.style.display = 'none';
    firstPage.style.display = 'block';
})


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    lastPage.style.display = 'none';
    firstPage.style.display = 'block';

    let selectedValue = skills.options[skills.selectedIndex].innerHTML;
    let exp = experience.value


   

    const results = [
        {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            phone: tel.value,
            skills: [
                {
                id: selectedValue,
                experience: exp
                }
            ],
            work_preference: Array.from(works).find(work => work.checked).value,
            had_covid: Array.from(covidconts).find(covidcont => covidcont.checked).value,
            had_covid_at: contactDate.value,
            vaccinated: Array.from(covidVaccs).find(covidVacc => covidVacc.checked).value,
            vaccinated_at: vaccineDate.value,
            will_organize_devtalk: Array.from(dev).find(de => de.checked).value,
            devtalk_topic: textarea.value,
            something_special: something.value   
        }
    ]
   

    results.forEach(result => {
        
        submittedApplications.innerHTML = `
        <h2>submitted applications</h2>
        <div class="add-application" id="add">
        <div class="application-display">
        </div>
        <div class="submitted-application-form" id="hideUp">
            <div class="part-one">
                <div class="app-container-width">
                    <h4>peronal information</h4>
                    <div class="submitted-infomation-conatiner">
                        <div class="sides">
                            <span>First name:</span>
                            <span>Last name:</span>
                            <span>Email:</span>
                            <span>Phone:</span>
                        </div>
                        <div class="sides">
                            <span id="submitedFirstName">${result.first_name}</span>
                            <span id="submitedLastName">${result.last_name}</span>
                            <span id="submitedEmail">${result.email}</span>
                            <span id="submitedPhone">${result.phone}</span>
                        </div>
                    </div>
                </div>
                <div class="app-container-width">
                    <h4>covid stuff</h4>
                    <p>how would you prefer to work?</p>
                    <div>
                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g></svg>
                        <span>${result.work_preference}</span>
                    </div>
                </div>
                <div class="app-container-width">
                    <p>Did you have covid 19?</p>
                    <div>
                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g></svg>
                        <span>${result.had_covid}</span>
                    </div>
                    <p>when did you have covid 19?</p>
                    <div class="date-form">
                        <span>${result.had_covid_at}</span>                          
                        <svg width="12px" height="12px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="clr-i-solid clr-i-solid-path-1" d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"></path><path class="clr-i-solid clr-i-solid-path-3" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"></path>
                        <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                        </svg>
                    </div>
                </div>
                <div class="app-container-width">
                    <p>have you been vaccinated?</p>
                    <div>
                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g></svg>
                        <span>${result.vaccinated}</span>
                    </div>
                    <p>when did you get covid vaccine</p>
                    <div class="date-form">
                        <span>${result.vaccinated_at}</span>                          
                        <svg width="12px" height="12px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="clr-i-solid clr-i-solid-path-1" d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"></path><path class="clr-i-solid clr-i-solid-path-3" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"></path>
                        <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="part-two">
                <div class="app-container-width">
                    <h4>skillset</h4>
                    <div class="skillset">
                        <span>${results[0].skills[0].id}</span>
                        <span>Years of experience:</span>
                        <span>${results[0].skills[0].experience}</span>
                    </div>
                </div>
                <div class="app-container-width">
                    <h4>insigts</h4>
                    <p>Would you attend Devtalks and maybe also organize your own?</p>
                    <div>
                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g></svg>
                        <span>${result.will_organize_devtalk}</span>
                    </div>
                </div>
                <div class="app-container-width">
                    <p>What would you speak about at Devtalk?</p>
                    <div id="speakDevtalks">${result.devtalk_topic}</div>
                </div>
                <div class="app-container-width">
                    <p>Tell us somthing special</p>
                    <div id="speakSpecial">${result.something_special}</div>
                </div>
            </div>
        </div>
        </div>
        `
    });

    
});








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