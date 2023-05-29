import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fo from '../assets/foto.jpg'




export default function InfoPage(props) {

    const lugar = props.local

    console.log(lugar)

    const [voo, setVoo] = useState([])
    const [hotel, setHotel] = useState([])
    
    const navigate = useNavigate()


    useEffect(() => {
        const request = axios.get("https://frela.onrender.com/voo")
        request.then(response => {
            setVoo(response.data)
        })
    }, [])

    

    return (
        
            <h1>Ola</h1>
       
        
    )
}