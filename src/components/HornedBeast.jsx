import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function HornedBeast(props){

  const [isFavored, setIsFavored] = useState(false);

  const toggleFavorite = () => setIsFavored(!isFavored);

  const imageUrl = props.useAlternate && props.altImg ? props.altImg : props.imgUrl;


  return(

      <div style={{position: 'relative'}}>
            <h2>{props.title}</h2>
          <Image 
          src={imageUrl} 
          alt={props.title}
          rounded 
          fluid
            onClick={() => props.onClick()}
          />
          <button
                onClick={(e) =>{
                    e.stopPropagation();
                    toggleFavorite();
                }}

              style={{
                  position: "relative",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none"
              }}

              >
                  {isFavored ? <FaHeart color="red" /> : <FaRegHeart />} 
              </button>

            <p>{props.description}</p>
            <p>{props.keyword}</p>
      </div>
      
  );
}

  export default HornedBeast;