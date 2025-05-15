import BASE_URL from '../config'

async function getSearchAllPaises(){
    try {
        const response = await fetch(`${BASE_URL}/paises/get/getSearchAll`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Erro ao buscar paises')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default getSearchAllPaises