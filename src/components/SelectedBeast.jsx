import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';

function SelectedBeast(props){

    if (!props.data) return null;

    const imageUrl = props.useAlternate && props.data.alternative_images ? props.data.alternative_images : props.data.image_url;

    return(
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>{props.data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={imageUrl} alt={props.data.title}/>
                <p>{props.data.description}</p>
                <p>KeyWord: {props.data.keyword}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>Close</Button>
            </Modal.Footer>
            </Modal>
    );
}

export default SelectedBeast;