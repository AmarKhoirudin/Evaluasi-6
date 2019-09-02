import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Makanan extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Paket menu Makanan</h1>
            <ol>
              <li>Ayam bakar paket 1</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.ytimg.com/vi/NscVB0YYb8U/maxresdefault.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Ayam Bakar paket 1</h4>
                    <p>Nasi , Dada / Sayap, ES Teh.</p>
                    <h4>Harga : Rp 20.000 </h4>
                  </Card.Text>
                </Card.Body>
              </Card>

              <li>Ayam bakar paket 2</li>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/3/15/629437/629437_6a0976e7-f243-490c-b294-8e823cc92fef.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    <h4>Ayam Bakar paket 2</h4>
                    <p>Nasi, Ayam bakar, EsTeh / Esjeruk , Tahu ,Tempe.</p>
                    <h4>Harga : Rp 27.000 </h4>
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
