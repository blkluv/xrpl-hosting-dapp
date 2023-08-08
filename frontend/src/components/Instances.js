import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Instances() {
  return (
    <div className="instance-wrapper">
      <CardGroup>
        <div className="instance-card">
          <Card>
            <Card.Img variant="top" src="https://placehold.co/100x50" /> {/* Update the src with the placeholder image */}
            <Card.Body>
              <Card.Title>Ever 2G</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to additional content. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">fee: 500 $XRP</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="instance-card">
          <Card>
            <Card.Img variant="top" src="https://placehold.co/100x50" /> {/* Update the src with the placeholder image */}
            <Card.Body>
              <Card.Title>Ever 4G</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">fee: 1500 $XRP</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="instance-card">
          <Card>
            <Card.Img variant="top" src="https://placehold.co/100x50" /> {/* Update the src with the placeholder image */}
            <Card.Body>
              <Card.Title>Ever 6G</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">fee: 3000 $XRP</small>
            </Card.Footer>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
}

export default Instances;
