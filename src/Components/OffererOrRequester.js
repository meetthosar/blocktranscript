import { Row, Button, Col } from "react-bootstrap";

function OffererOrRequester(props){
    
    return <div>
        <Row className="mb-3">
        <Col xs={2}></Col>
        <Col xs={8}><Button variant="primary" onClick={props.iAmUniversity}>Are you a University?</Button></Col>
        <Col xs={2}></Col>
        </Row>
        <Row className="mb-3">
        <Col xs={4}></Col><Col xs={4}>OR</Col><Col xs={4}></Col>
        </Row>
        <Row>
        <Col xs={2}></Col>
        <Col xs={8}><Button variant="warning" onClick={props.iAmRequester}>Are you a Requester?</Button></Col>
        <Col xs={2}></Col>
    </Row>
        </div>;
}

export default OffererOrRequester;