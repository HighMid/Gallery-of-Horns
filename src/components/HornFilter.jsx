import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HornFilter(props)
{
  const handleSubmit = (event) => {
    event.preventDefault();
    const horns = event.target.elements.horns.value;
    props.onFilter(horns);
};
    return(
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Horn Numbers</Form.Label>
            <Form.Control type="number" name="horns" min="1" placeholder="Enter number of horns" />
          </Form.Group>
          <Button variant="primary" type="submit">Filter</Button>
          <Button variant="secondary" type="button" onClick={props.onClearFilter}>Clear Filter</Button>
        </Form>

      );
  }

  export default HornFilter;