import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Beasts(props){
    return(
        <div>
            <h2>{props.message}</h2>
            <Container>

                <Row>
                    {props.ImgStuff.map((beast, index) => (
                        <Col key={beast._id} md={4}>
                        <BeastImage ImgStuff={beast.image_url}/>
                        </Col>
                    ))};

                </Row>
                
            </Container>
        </div>
    );
}

function BeastImage(props){

    const [isFavored, setIsFavored] = useState(false);

    const toggleFavorite = () => setIsFavored(!isFavored);

    return(
        <div style={{position: 'relative'}}>
            <Image src={props.ImgStuff} alt="Hell yeah" rounded fluid></Image>
            <button
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none"
                }}
                onClick={toggleFavorite}
                >
                    {isFavored ? <FaHeart color="red" /> : <FaRegHeart />} 
                </button>
        </div>
        
    );
}

export default Beasts;