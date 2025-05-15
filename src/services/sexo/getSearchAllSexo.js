import BASE_URL from '../config'

async function getSearchAllSexo(){
    try {
        const response = await fetch(`${BASE_URL}/publicacoes/listarPublicacoes`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Erro ao buscar publicações')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default getSearchAllSexo