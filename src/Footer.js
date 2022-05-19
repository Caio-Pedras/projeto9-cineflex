import styled from 'styled-components';
export default function Footer ({movieIMG, movieTitle, movieTimeDay}){
    return(
        <footer>
            <Movie>
                <img src={movieIMG} alt={movieTitle} />
            </Movie>
            <Text>
                <p>{movieTitle}</p>
                <p>{movieTimeDay}</p>
            </Text>
        </footer>
    )
}
const Movie = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px #0000001A;
border-radius: 10px;
width: 150px;
height: 230px;
position: relative;
max-height: 100%;
max-width: 70px;
margin: auto 0;

img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;;
    height: 90px;
    border-radius: 10px;
}
`
const Text = styled.div`
margin-left: 10px;
`