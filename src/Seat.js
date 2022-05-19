import styled from 'styled-components';
import React from "react"
export default function Seat ({isAvailable, name, seatArray, setSeatArray}){
    const [selectedColor, setSelectedColor] = React.useState(null)
    const [selectedBorder, setSelectedBorder] = React.useState(null)
    function selectSeat(name){
        if (selectedColor === null && isAvailable === true){
            setSelectedColor('#8DD7CF')
            setSelectedBorder('1px solid #1AAE9E')
            setSeatArray([...seatArray, name])
        } else{
            setSelectedColor(null)
            setSelectedBorder(null)
            setSeatArray(seatArray.filter((seatArray)=> seatArray!==name))
        }
    }
   
    return(
        <Circle 
        color={(isAvailable )  ? (selectedColor):("#FBE192")} 
        border ={(isAvailable )  ? (selectedBorder):("1px solid #F7C52B")}
        onClick={()=>selectSeat(name, isAvailable)}
        >
            <p>{name}</p>
        </Circle>
    )
}
const Circle = styled.div `
border: ${props=>props.border? props.border : '1px solid #808F9D' };
background-color: ${props=>props.color? props.color:'#C3CFD9'};
border-radius: 50%;
width: 26px;
height: 26px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
color: #000000;
font-size: 15px;
font-weight: 400
`