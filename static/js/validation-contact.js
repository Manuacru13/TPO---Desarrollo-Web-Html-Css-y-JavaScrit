const formContact = document.querySelector("#formContact");

const validarFormulario = (event) => {
    event.preventDefault();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    
    let validation = true;

    if(firstname.value.trim() ===""){
        alert("el campo del nombre no debe estar vacio");
        firstname.classList.add("error");
        document.querySelector("#error-firstname").textContent = 'Debe completar el campo nombre';
        validation = false;
    }

    if(lastname.value.trim()===""){
        document.querySelector("#error-lastname").textContent='Debe completar el campo apellido';
        lastname.classList.add("error");
        validation = false;
    }

    if(email.value.trim()===""){
        document.querySelector("#error-email").textContent='Debe completar el campo del correo electronico';
        lastname.classList.add("error");
        validation = false;
    }

    if(validation){
        formContact.submit()
    } else {
        return false;
    }

}

formContact.addEventListener("submit",validarFormulario)