const sendBtn = document.getElementById('sendBtn');
const name = document.getElementById('name');
const email = document.getElementById('email');
const comments = document.getElementById('comments');

function setUpEmailObject() {
    return {
        name: name.value,
        email: email.value,
        comments: comments.value,
    }
}

sendBtn.addEventListener('click', (event)=> {
    //remove the console.log and push the email object 
    //into whatever service will be handling the email
    event.preventDefault();
    console.log(setUpEmailObject());
});