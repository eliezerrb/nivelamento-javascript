const cep = "01001000";

// Retorno da função fetch é uma promise e assíncrona(pegar quando ela for resolvida)
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
    .then((response) => {
        console.log("SUCESSO NO FETCH ", response);
        // Função fetch api para pegar o corpo da resposta no formato Json, retorna promisse
        const json = response.json();
        json
            .then(result => {
                console.log("SUCESSO NO JSON", result)
            })   
            .catch(error => {
              console.log("ERRO NO JSON", error)
            })
     })
     .catch(error => {
        console.log("ERRO NO FECTH", error);
     });


console.log("A");
console.log("B");