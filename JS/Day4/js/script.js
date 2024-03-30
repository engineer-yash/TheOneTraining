let name = document.getElementById('name');
var email = document.getElementsByName('email')[0];
var msg = document.getElementsByName('msg')[0];

//!addData() only works when all input field have values
function validate() {
    if (name.value == '' || email.value == '' || msg.value == '') {
        alert('Please fill all the fields');
    } else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
    } else {
        addData();
    }
}

//!add and edit data to localstorage
function addData() {
    let data = {
        name: name.value,
        email: email.value,
        msg: msg.value,
        isChecked: false
    }
    let arr = JSON.parse(localStorage.getItem('data')) || [];
    let queryParams = window.location.search.split('?')[1];
    let index = null;
    if (queryParams && queryParams.length > 0) {
        index = decryptIndex(queryParams).split('=')[1];
    }
    if (index) {
        arr[index] = data;
    } else {
        arr.push(data);
    }
    localStorage.setItem('data', JSON.stringify(arr));
    name.value = '';
    email.value = '';
    msg.value = '';
    window.location.href = 'table.html';
    showData();
}

//alidation
function validateEmail() {
    let email = document.getElementById('email');
    if (email.value.length > 50) {
        alert('Email length should not be greater than 50');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
}

//if name length is greater than 15 then show alert
function validateName() {
    let name = document.getElementById('name');
    if (name.value.length > 15) {
        alert('Name length should not be greater than 15');
    }
}
function validateMsg() {
    let msg = document.getElementById('msg');
    if (msg.value.length > 100) {
        alert('Message length should not be greater than 100');
    }
}



let table = document.getElementsByTagName('table')[0];
let tbody = document.getElementById('tbody');
let arr = JSON.parse(localStorage.getItem('data')) || [];


//!Retireved password from password.txt file 
function getSecretPassphrase() {
    var secretPassphrase = null;
    var fetch = new XMLHttpRequest();
    fetch.open('GET', 'password.txt', false);
    fetch.onreadystatechange = function () {
        if (fetch.readyState === 4) {
            if (fetch.status === 200 || fetch.status == 0) {
                secretPassphrase = fetch.responseText;
            }
        }
    }
    fetch.send(null);
    return secretPassphrase;
}

//!Encryption and Decryption
function encryptIndex(index) {
    return CryptoJS.AES.encrypt(index.toString(), getSecretPassphrase()).toString();
}

function decryptIndex(encryptedIndex) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedIndex, getSecretPassphrase());
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}

//!display data in table
function showData() {
    let data = JSON.parse(localStorage.getItem('data')) || [];
    tbody.innerHTML = '';

    data.forEach((element, index) => {
        let tr = document.createElement('tr');
        tr.setAttribute('scope', 'row');
        if (element.isChecked) {
            tr.classList.add('active');
        }
        let encryptedIndex = encryptIndex(`index=${index}`);
        tr.innerHTML = `
            <th scope="row">
                <label class="control control--checkbox mr-3">
                    <input type="checkbox" onclick="deleteDataCheckBoxes(${index})" class="checked-boxes" ${element.isChecked ? 'checked' : ''} />
                    <div class="control__indicator"></div>
                </label>
            </th>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.msg}</td>
            <td><a href="form.html?${encryptedIndex}" id="edit" class='editClick mr-3'><i class='fa-solid fa-pencil'></i></a><a href="#" onclick="deleteData(${index})" class='deleteClick'><i class='fa-solid fa-trash'></i></a></td>`;
        tbody.appendChild(tr);
    });
    if (data.length == 0) {
        let mainCheckBox = document.getElementById('mainCheckBoxHTML');
        mainCheckBox.disabled = true;
    }
    let isAllChecked = (data.length > 0 && data.every(f => f.isChecked));
    if (isAllChecked) {
        toggleDeleteAllButton(0, true);
    }
    else if (data.length > 0 && data.some(f => f.isChecked)) {
        let deleteButtonSingle = createDeleteBtn();
        table.parentNode.insertBefore(deleteButtonSingle, table);
    }
}
//!delete data from localstorage when checkbox is checked
function deleteDataCheckBoxes(index) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    let deleteButtonSingle = document.getElementById('deleteButtonSingle');
    let deleteButton = document.getElementById('deleteButton');
    let isChecked = document.getElementsByClassName('checked-boxes')[index].checked;
    let mainCheckBox = document.getElementById('mainCheckBoxHTML');
    let isAnyrecordChecked = document.querySelectorAll('.checked-boxes:checked').length > 0;

    if (!isChecked && deleteButton != null) {
        deleteButton.remove();
        if (checkedCheckboxes.length > 1) {
            deleteButtonSingle = createDeleteBtn();
            table.parentNode.insertBefore(deleteButtonSingle, table);
        }
        mainCheckBox.checked = false;
    }
    else if ((checkboxes.length - 1) === checkedCheckboxes.length) {
        toggleDeleteAllButton(checkedCheckboxes.length);
    }
    else if (isChecked && deleteButtonSingle == null) {
        deleteButtonSingle = createDeleteBtn();
        table.parentNode.insertBefore(deleteButtonSingle, table);
    }
    else if (!isChecked && deleteButtonSingle != null && !isAnyrecordChecked) {
        deleteButtonSingle.remove();
    }
    //!Update the localstorage when a checkbox is checked or unchecked
    var obj = localStorage.getItem('data');
    obj = JSON.parse(obj);
    obj[index].isChecked = isChecked;
    localStorage.setItem('data', JSON.stringify(obj));
}
function createDeleteBtn() {
    let deleteButtonSingle = document.createElement('button');
    deleteButtonSingle.setAttribute('class', 'btn btn-danger add-new');
    deleteButtonSingle.setAttribute('id', 'deleteButtonSingle');
    deleteButtonSingle.addEventListener('click', function () {
        let obj = localStorage.getItem('data');
        obj = JSON.parse(obj);
        let checkedItems = obj.filter(f => f.isChecked);
        for (let i = 0; i < checkedItems.length; i++) {
            let objectIndex = obj.indexOf(checkedItems[i]);
            obj.splice(objectIndex, 1);
        }
        localStorage.setItem('data', JSON.stringify(obj));
        showData(); // Update the table after deleting the data
        deleteButtonSingle.remove();
        deleteButtonSingle = null; // Reset the delete button variable
    });
    deleteButtonSingle.innerHTML = '<i class="fa fa-trash"></i> Delete';
    return deleteButtonSingle;
}

if (table) {
    showData();
}
function toggleDeleteAllButton(length, isDisplayDeleteAllButton) {
    let deleteAllButton = document.getElementById('deleteButton');
    let checkboxes = document.getElementById('mainCheckBoxHTML');
    if (length == 0 && isDisplayDeleteAllButton) {
        checkboxes.checked = true;
        if (deleteAllButton == null) {
            createDeleteAllBtn();
        }
        else {
            deleteAllButton.remove();
            checkboxes.checked = false;
            var checkedCheckBoxes = document.getElementsByClassName('checked-boxes');
            var obj = localStorage.getItem('data');
            obj = JSON.parse(obj);
            for (let i = 0; i < checkedCheckBoxes.length; i++) {
                checkedCheckBoxes[i].checked = false;
                obj[i].isChecked = false;
            }
            localStorage.setItem('data', JSON.stringify(obj));
        }
    }
    else if (length == 1 && deleteAllButton != null && checkboxes.checked) {
        deleteAllButton.remove();
        checkboxes.checked = false;
    }
    else {
        let deleteButtonSingle = document.getElementById('deleteButtonSingle');
        if (deleteButtonSingle != null) {
            deleteButtonSingle.remove();
        }
        checkboxes.checked = true;
        if (deleteAllButton == null) {
            createDeleteAllBtn();
        }
    }
}

function createDeleteAllBtn() {
    let deleteButtonSingle = document.getElementById('deleteButtonSingle');
    if (deleteButtonSingle != null) {
        deleteButtonSingle.remove();
    }
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger add-new');
    button.setAttribute('id', 'deleteButton');
    button.addEventListener('click', function () {
        localStorage.removeItem('data');
        document.getElementById('deleteButton').remove();
        document.getElementById('mainCheckBoxHTML').checked = false;
        showData();
    });
    button.innerHTML = '<i class="fa fa-trash"></i> Delete All';
    table.parentNode.insertBefore(button, table);
    var obj = localStorage.getItem('data');
    obj = JSON.parse(obj);
    for (let i = 0; i < obj.length; i++) {
        obj[i].isChecked = true;
    }
    localStorage.setItem('data', JSON.stringify(obj));
}
//!delete selected data from localstorage
function deleteData(index) {
    let data = JSON.parse(localStorage.getItem('data'));
    data.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    showData();
}
//!search data from table and display into form
let queryParams = window.location.search.split('?')[1];
let index = null;
if (queryParams && queryParams.length > 0) {
    index = decryptIndex(queryParams).split('=')[1];
    let data = JSON.parse(localStorage.getItem('data'));
    if (index && data) {
        let selectedData = data[index];
        document.getElementById('name').value = selectedData.name;
        document.getElementsByName('email')[0].value = selectedData.email;
        document.getElementsByName('msg')[0].value = selectedData.msg;
    }
}

