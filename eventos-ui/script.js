const inputName = document.forms.cadastro.name;

// keyup - nome do evento(quando levantar o dedo da tecla), função
inputName.addEventListener('keyup', handleInputNameKeyUp);

const inputEmail = document.forms.cadastro.email;

// evento change - quando sair do local e tiver alteração
inputEmail.addEventListener('change', handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener('click', handleBtnSubmitClick);


function handleBtnSubmitClick(event){
    // Remove comportamnto padrão do seu componente
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`)
}

// event.taget - pega o componente que disparou o evento
function handleInputNameKeyUp(event){
    console.log(event.target.value);
}

function handleInputEmailChange(event) {
    if(validateEmail(event.target.value)){
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  // Página com os eventos básicos
  // https://www.w3schools.com/js/js_events_examples.asp


