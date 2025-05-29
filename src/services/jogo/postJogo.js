import BASE_URL from '../config'


async function postJogo(jogo) {
    try {
        let dados = jogo

        // console.log(dados)
        

        const response = await fetch(`${BASE_URL}/jogo/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify(
                dados
            )
        })
        // console.log(response)
        
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário')
        }

        const responseData = await response.json()
        console.log(responseData)
        return responseData

    } catch (error) {
        console.error(error)
        return null
    }
}

export default postJogo
