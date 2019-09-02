import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Minuman extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h3>Menu Minuman</h3>
            <ol>
              <li>Thai Tea</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.idntimes.com/content-images/post/20171228/dscf5546-8c417efd89272b6d226313d6bb3509fe_600x400.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Thai Tea</h4>
                    <h4>Harga: 7k </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <li> Milkshake Monsterm</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://i.dawn.com/primary/2017/02/589303cb1e8bd.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Milkshake monsterm</h4>
                    <h4>Harga: 10k </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <li> Unicorn Frappucino</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWPMaNBAdkDwijDwiTGfCByMRFyJfJqpR-gBWnRFKXJaksCazSQ"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Unicorn frappucino</h4>
                    <h4>Harga: 15k </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <li> King durian</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.idntimes.com/content-images/post/20171215/kokobuncit-fea8387146288aef1ca91f0b83a60b73.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>King Durian</h4>
                    <h4>Harga: 10k </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <li> Mango Thai</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://awsimages.detik.net.id/community/media/visual/2017/08/13/0a43b99c-3f62-43b8-8118-a981754c6018.jpg?a=1"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Mango Thai</h4>
                    <h4>Harga: 7k </h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
