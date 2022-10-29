function getLinks() {
    const form = document.querySelector('#calculation_form')
    const getEmail = document.querySelector('#get-email');
    const getTel = document.querySelector('#get-tel');
    form.addEventListener('submit', (e)=> {
        if(getEmail.value === '' && getTel.value === '') {
            alert('Заполните e-mail или телефон')
            e.preventDefault()
        } else {
            console.log('отправилось');
        }

    })
}
getLinks()

function getFiles() {
    const form = document.querySelector('#calculation_form')
    const getFile = document.querySelector('#myfile');
    const getTextarea = document.querySelector('#form_textarea');
    form.addEventListener('submit', (e)=> {
        if(getFile.value === '' && getTextarea.value === '') {
            alert('Выберите файл или оставьте комментарий')
            e.preventDefault()
        } else {
            console.log('отправилось');
        }

    })
}
getFiles() 