import styled from 'styled-components';
export default function BuyInput ({inputName, placeholder, setType}){
    return (
        <InfoInput>
                <p>{inputName}:</p>
                <input type="text" placeholder={`${placeholder}...`} onChange={(e)=>setType(e.target.value)}/>
        </InfoInput>
    )
}
const InfoInput = styled.div`
margin-bottom: 20px;
 p {
    margin-bottom: 10px;
}
`
