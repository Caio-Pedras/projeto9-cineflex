import styled from 'styled-components';
export default function InfoBox ({infoArray, title}){
return (
    <div className="infoBox">
        <h3>{title}</h3>
        {infoArray.map((info)=>
        <p >{info}</p>
        )}
    </div>
)
}
