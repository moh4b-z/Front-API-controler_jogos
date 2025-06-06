import BASE_URL from '../config'

async function loginUsuario(login) {
    try {

        const dados = login

        const response = await fetch(`${BASE_URL}/usuario/login`, {
            method: 'PUT',
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

export default loginUsuario
