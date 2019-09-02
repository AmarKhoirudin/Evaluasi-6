import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../Container.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid bg-light">
          <div class="container ">
            <div>
              <h2>Selamat datang di Laper.com</h2>
              <h4></h4>
              <p>Ini Berberapa menu yang baru saja Rilis :</p>
              <ul>
                <li>Ayam Bakar </li>
                <li>Beraga macem Minuman </li>
              </ul>

              
            </div>
            <div className="carosel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/NscVB0YYb8U/maxresdefault.jpg"
                    alt="Ayam Bakar paket 1"
                  />
                  <Carousel.Caption>
                    <h3>Ayam Bakar paket 1</h3>
                    <p>Nasi , Dada / Sayap, ES Teh.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/3/15/629437/629437_6a0976e7-f243-490c-b294-8e823cc92fef.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Ayam Bakar Paket 2</h3>
                    <p>Nasi, Ayam bakar, EsTeh / Esjeruk , Tahu ,Tempe.</p>
                    <h3>Harga: 7k</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.idntimes.com/content-images/post/20171228/dscf5546-8c417efd89272b6d226313d6bb3509fe_600x400.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Menu Minum</h3>
                    <p>
                      Milkshake monsterm, Unicorn frappucino, King durian, Mango
                      thai, Thai tea .
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
