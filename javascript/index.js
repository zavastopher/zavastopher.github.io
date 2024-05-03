let aboutPage = document.querySelector('#about-page');
let blogPage = document.querySelector('#blog-page');
let contactPage = document.querySelector('#contact-page');

let aboutTab = document.querySelector('#about');
let contactTab = document.querySelector('#contact');
let blogTab = document.querySelector('#blog');

let languagesTab = document.querySelector('#languages');
let toolsTab = document.querySelector('#tools');
let frameworksTab = document.querySelector('#frameworks');
let operatingSystemsTab = document.querySelector('#operating-systems');

let languages = document.querySelector('#languages-info');
let tools = document.querySelector('#tools-info');
let frameworks = document.querySelector('#frameworks-info');
let operatingSystems = document.querySelector('#operating-systems-info');

aboutTab.addEventListener('click', load_about);
blogTab.addEventListener('click', load_blog);
contactTab.addEventListener('click', load_contact);

languagesTab.addEventListener('click', load_languages);
toolsTab.addEventListener('click', load_tools);
frameworksTab.addEventListener('click', load_frameworks);
operatingSystemsTab.addEventListener('click', load_operatingSystems);

let blogs = document.querySelectorAll('.blog');
for(var i = 0; i < blogs.length; i++) {
    blogs[i].addEventListener('click', toggleblog);
}

function toggleblog(e) {
    let classes = e.currentTarget.querySelector('.blog-body').classList;
    if(classes.contains('is-hidden')) {
        classes.remove('is-hidden');
    } else {
        classes.add('is-hidden');
    }
}

function load_languages() {
    languages.classList.remove('is-hidden');
    tools.classList.add('is-hidden');
    frameworks.classList.add('is-hidden');
    operatingSystems.classList.add('is-hidden');

    languagesTab.classList.add('is-active');
    toolsTab.classList.remove('is-active');
    frameworksTab.classList.remove('is-active');
    operatingSystemsTab.classList.remove('is-active');
}

function load_tools() {
    languages.classList.add('is-hidden');
    tools.classList.remove('is-hidden');
    frameworks.classList.add('is-hidden');
    operatingSystems.classList.add('is-hidden');

    languagesTab.classList.remove('is-active');
    toolsTab.classList.add('is-active');
    frameworksTab.classList.remove('is-active');
    operatingSystemsTab.classList.remove('is-active');
}

function load_frameworks() {
    languages.classList.add('is-hidden');
    tools.classList.add('is-hidden');
    frameworks.classList.remove('is-hidden');
    operatingSystems.classList.add('is-hidden');

    languagesTab.classList.remove('is-active');
    toolsTab.classList.remove('is-active');
    frameworksTab.classList.add('is-active');
    operatingSystemsTab.classList.remove('is-active');
}

function load_operatingSystems() {
    languages.classList.add('is-hidden');
    tools.classList.add('is-hidden');
    frameworks.classList.add('is-hidden');
    operatingSystems.classList.remove('is-hidden');

    languagesTab.classList.remove('is-active');
    toolsTab.classList.remove('is-active');
    frameworksTab.classList.remove('is-active');
    operatingSystemsTab.classList.add('is-active');
}

function load_about() {
    aboutPage.classList.remove("is-hidden");
    contactPage.classList.add("is-hidden");
    blogPage.classList.add("is-hidden");

    aboutTab.classList.add("is-active");
    blogTab.classList.remove("is-active");
    contactTab.classList.remove("is-active");
}

function load_blog() {
    blogPage.classList.remove("is-hidden");
    aboutPage.classList.add("is-hidden");
    contactPage.classList.add("is-hidden");

    aboutTab.classList.remove("is-active");
    blogTab.classList.add("is-active");
    contactTab.classList.remove("is-active");
}

function load_contact() {
    contactPage.classList.remove("is-hidden");
    aboutPage.classList.add("is-hidden");
    blogPage.classList.add("is-hidden");

    aboutTab.classList.remove("is-active");
    blogTab.classList.remove("is-active");
    contactTab.classList.add("is-active");
}
