const textbox = document.getElementById('textbox');
const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');
const deleteButton = document.getElementById('delete-button');

editButton.addEventListener('click', function() {
    textbox.removeAttribute('readonly');
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
});

saveButton.addEventListener('click', function() {
    textbox.setAttribute('readonly', true);
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
});

deleteButton.addEventListener('click', function() {
    textbox.value = '';
});

const textbox1 = document.getElementById('textbox1');
const editButton1 = document.getElementById('edit-button1');
const saveButton1 = document.getElementById('save-button1');
const deleteButton1 = document.getElementById('delete-button1');

editButton1.addEventListener('click', function() {
    textbox1.removeAttribute('readonly');
    editButton1.style.display = 'none';
    saveButton1.style.display = 'inline-block';
});

saveButton1.addEventListener('click', function() {
    textbox1.setAttribute('readonly', true);
    editButton1.style.display = 'inline-block';
    saveButton1.style.display = 'none';
});

deleteButton1.addEventListener('click', function() {
    textbox1.value = '';
});


