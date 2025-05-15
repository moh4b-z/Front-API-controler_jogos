import BASE_URL from '../config'

async function postEmpresa(data) {
    try {

        const dados = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            data_de_fundacao: data.data_de_fundacao,
            biografia: data.biografia ? data.biografia : null,
            foto: data.foto ? data.foto : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
            id_paises: data.id_paises
        }

        const response = await fetch(`${BASE_URL}/user/cadastrarUser`, {
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

export default postEmpresa
