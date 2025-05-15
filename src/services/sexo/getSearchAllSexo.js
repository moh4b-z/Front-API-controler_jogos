import BASE_URL from '../config'

async function getSearchAllSexo(){
    try {
        const response = await fetch(`${BASE_URL}/sexo/get/getSearchAll`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Erro ao buscar sexo')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default getSearchAllSexo