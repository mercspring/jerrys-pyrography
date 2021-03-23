import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ImageCard(props) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="http://dreamicus.com/data/apple/apple-01.jpg" style={{width:"200px"}}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        {props.caption}
                    </Card.Text>
                    <Card.Text>
                        For Sale: {props.sold ?  "No" : "Yes"}
                    </Card.Text>
                    <Card.Text>
                        Price: {props.pricing}
                    </Card.Text>
                    <Card.Text>
                        Size: {props.size}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                
                    <Button>Edit</Button>
                </Card.Footer>
            </Card>

        </div>
    )
}
