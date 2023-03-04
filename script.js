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