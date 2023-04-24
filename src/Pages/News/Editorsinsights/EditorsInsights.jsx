import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">

            <Col>
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>Kids Education</Card.Title>
                        <Card.Text>
                            Bangladesh Motorcycle Assemblers and Manufacturers Association (BMAMA) has conducted a ‘safe riding’ campaign for bikers ahead of Eid holidays, a press release said Thursday. The trade body held the awareness activations titled 'follow traffic rules, return home safely' at four exit
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>Professional Job</Card.Title>
                        <Card.Text>
                            Road Transport and Bridges Minister Obaidul Quader Thursday said allowing motorbikes to ply on Padma Bridge is an Eid gift to the youngsters from Prime Minister Sheikh Hasina. "Prime Minister Sheikh Hasina has given permission for running of motorbikes on Padma Bridge as an Eid gift to the young generation. Plying
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>Sport Time</Card.Title>
                        <Card.Text>
                            Bangladesh won the one-off Test against Ireland by seven wickets in Dhaka's Mirpur on the fourth day Friday, with more than four sessions to spare. In the fourth innings, Bangladesh needed 138 runs to win, a target they reached with the.fourth innings, Bangladesh needed 138 runs to win, a target they reached with the
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default EditorsInsights;