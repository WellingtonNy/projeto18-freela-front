import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fo from '../assets/foto.jpg'




export default function HomePage(props) {

    const [cidades, setCidades] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        const request = axios.get("https://frela.onrender.com/cidades")
        request.then(response => {
            setCidades(response.data)
        })
    }, [])

    function selecionar(event) {
        props.setLocal(event.target.value)
        navigate(`/info`) 
        console.log(event.target.value);
    }

    return (
        
            <HomeConteiner imgUrl='../assets/foto.jpg' >
                <DropBoxxx onChange={selecionar}>
                    <option value=""> Qual o destino? </option>
                    {cidades ? cidades.map(cidade => <option value={cidade.id}>{cidade.nome}</option>) : <option>Loading...</option>}
                </DropBoxxx>
            </HomeConteiner>
       
        
    )
}

const DropBoxxx = styled.select`
    width: 50vw;
    height: 50px;
    background-color: #ffffff95;
    font-size: 25px;
    text-align: center;
    border: none;
    border-radius: 15px;
`

const HomeConteiner = styled.div`
    width: 100vw;
    height:100vh;
background: url(${fo});  
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

