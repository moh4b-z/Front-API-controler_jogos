import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import  LayoutBase from '../../components/LayoutBase/LayoutBase'
import  {useAuth} from '../../contexts/AuthContext'



function HomePage(){
    const { user } = useAuth()

    return (
        <LayoutBase/>
    )
}

export default HomePage