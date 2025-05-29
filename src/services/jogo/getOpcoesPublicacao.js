import BASE_URL from '../config'

async function getOpcoesPublicacao(publisher) {
    try {
        let dados = publisher

        // console.log(dados)
        

        const response = await fetch(`${BASE_URL}/jogo/get/getSearchAllCarateriticas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify(
                dados
            )
        })
        // console.log(response)
        
        if (!response.ok) {
            throw new Error('Erro ao pegar as informações')
        }

        const responseData = await response.json()
        console.log(responseData)
        return responseData

    } catch (error) {
        console.error(error)
        return null
    }
}

export default getOpcoesPublicacao
