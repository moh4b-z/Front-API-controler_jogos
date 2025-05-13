import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import  LayoutBase from '../../components/LayoutBase/LayoutBase'



function HomePage(){
    const [coordenadas, setCoordenadas] = useState(null)

    return (
        <LayoutBase/>
    )
}

export default HomePage