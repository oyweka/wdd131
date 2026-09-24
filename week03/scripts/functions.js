let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first} ${last}`;
}

console.log(fullName(firstName, lastName));
document.querySelector('#fullName').textContent = fullName(firstName, lastName);