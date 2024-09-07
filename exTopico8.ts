async function buscarDadosDaAPI(): Promise<string> {
    // Simulamos uma chamada a uma API com um atraso usando setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.75;  // Simula 75% de chance de sucesso

            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject('Falha ao buscar dados da API');
            }
        }, 1500);  // Simula um atraso de 1,5 segundos
    });
}

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();  // Aguarda a resposta da API
        console.log(dados);  // Exibe os dados recebidos
    } catch (error) {
        // Captura e exibe erros
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();  // Simula a busca de dados com async/await