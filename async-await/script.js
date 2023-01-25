/*
Async await - para limpar sintaxe, mais legível, faz mesma coisa que a promises
Não precisa do .then e .catch
Evita encadeamento de .then e .catch quando tenho uma promisse e dentro outra promises
Bom para utilizar quando só preciso executar alguma coisa quando a promisse deu ok
*/

const cep = "01001000";

// Retorno da função fetch é uma promise e assíncrona(pegar quando ela for resolvida)

// async indica que a função tem o processamento assíncrona
// await faz com que a chamada execute de forma assíncrona e quando chega o resultado, executa a próxima linha
async function getJsonResponse(url) {
    const respose = await fetch(url);
    const jsonBody = await respose.json();
    return jsonBody;
}

//getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//    .then(result => {
//        console.log(result);
//    });

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData('01001000');

console.log("A");
console.log("B");

