import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import fo from '../assets/foto.jpg'




export default function InfoPage(props) {

    const cidade = props.local

    

    const [voo, setVoo] = useState([])
    const [hotel, setHotel] = useState([])
    
    const navigate = useNavigate()



    useEffect(() => {

        const config = {
            headers: {
                cidade
            }
        }

        console.log(config);

        const request = axios.get("https://frela.onrender.com/voo",config)
        request.then(response => {
            
            setVoo(response.data)
        })
    }, [])

    useEffect(() => {

        const config = {
            headers: {
                cidade
            }
        }

        console.log(config);

        const request = axios.get("https://frela.onrender.com/hotel",config)
        request.then(response => {
            
            setHotel(response.data)
        })
    }, [])
    
 console.log(voo[0]);
 console.log(hotel[0])
    
    return (
        <Total>
            <h1>--- Passagens Aereas ---</h1>
            {voo.map((elemento)=>{
                return(
                   <Card>
                   <p>Companhia:{elemento.companhia}</p>
                   <p>Preço:R$ {elemento.preco},00</p>
                   <p>Cidade de Partida:{elemento.cidadepartida}</p>
                   <p>Destino:{elemento.cidade}</p>
                   <p>Partida:{elemento.partida}</p>
                   <p>Chegada:{elemento.chegada}</p>
                   <p>Dia:{elemento.dia }</p>
                   
                   </Card>
                )
            })}



<h1>--- Hoteis ---</h1>
            {hotel.map((elemento)=>{
                return(
                    <Card>
                   <p>Nome:{elemento.nome}</p>
                   <p>Preço da Diaria:R$ {elemento.preco},00</p>
                   <p>Descriçao:{elemento.descricao}</p>
                   <p>Cidade:{elemento.cidade}</p>
                   <p>Comodidades:{elemento.comodidades}</p>
                   
                
                   
                   </Card>
                )
            })}
        </Total>
    )
}

const Total = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: rgb(255,255,255);
background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(85,165,220,1) 54%, rgba(45,253,237,1) 100%);
h1{
    font-size: 52px;
    margin-bottom: 15px;
}
`

const Card = styled.div`
width: 45vw;
margin-bottom: 29px;
border: 1px solid black;
padding-left: 10px;
p {
    font-size: 20px;
    margin-bottom: 10px;
}

`