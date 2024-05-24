(() => {

let allRelated, answersOnly;
console.log('jdunk: inside content_script.js')

allRelated = Array.from(document.querySelectorAll('button > div > div > div')).find(x => x.innerText.match(/^All related/));
console.log('jdunk', 'allRelated', allRelated)

if (!allRelated) return;

allRelated.click()

setTimeout(() => {
    answersOnly = Array.from(document.querySelectorAll('[role="menu"] [role="list"] div')).find(x => x.innerText.match(/^Answers/));
    console.log('jdunk', 'answersOnly', answersOnly)
    answersOnly?.click?.()
}, 500)

// window.addEventListener("load", () => console.log('jdunk: window.load triggered'))
})()