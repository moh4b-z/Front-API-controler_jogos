import { useNavigate } from 'react-router-dom'

function useGoToHomePage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/`)
    }
}
function useGoToLoginPage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/login`)
    }
}
function useGoToSignUpPage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/signup`)
    }
}
function useGoToProfilePage(name) {
    const navigate = useNavigate()
    return (name) => {
        navigate(`/${name}`)
    }
}

function useGoToSearchPage(task) {
    const navigate = useNavigate()
    return (task) => {
        const query = new URLSearchParams()
        query.set('s', task.search)
        navigate(`/search?${query.toString()}`)
    }
}

export {
    useGoToHomePage,
    useGoToLoginPage,
    useGoToSignUpPage,
    useGoToSearchPage,
    useGoToProfilePage
}