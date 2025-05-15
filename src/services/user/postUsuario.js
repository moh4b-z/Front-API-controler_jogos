import BASE_URL from '../config'

async function postUsuario(data) {
    try {

        const dados = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            data_de_nascimento: data.data_de_nascimento,
            biografia: data.biografia || null,
            foto_perfil: data.foto_perfil || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
            id_paises: data.id_paises,
            id_sexo: data.id_sexo
        }
        // console.log(dados)
        

        const response = await fetch(`${BASE_URL}/usuario/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify(
                dados
            )
        })
        console.log(response)
        
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

export default postUsuario
