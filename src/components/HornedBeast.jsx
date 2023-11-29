import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function HornedBeast(props){

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

  export default HornedBeast;