import { Row, Button, Col } from "react-bootstrap";

function OffererOrRequester(props){
    
    return <Row>
        <Col xs={4}><Button variant="primary" onClick={props.iAmUniversity}>Are you a University?</Button></Col>
        
        <Col xs={4}><Button variant="warning" onClick={props.iAmRequester}>Are you a Requester?</Button></Col>
    </Row>;
}

export default OffererOrRequester;