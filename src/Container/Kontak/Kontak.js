import React, { Component } from "react";

export default class Kontak extends Component {
  render() {
    return (
      <div>
        <div className="Container contact" id="contact">
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="card text-white bg-primary mt-3 text-center">
                <div class="card-body">
                  <h1 class="card-title" id="contactus">
                    Contac Us
                  </h1>
                </div>
              </div>
              <ul class="list-group m-3">
                <li class="list-group-item">
                  <h1>My Location</h1>
                </li>
                <li class="list-group-item">
                Rukan exclusive blok A no. 16, Jalan marina indah Kapuk muara, RT.7/RW.2, Kamal Muara, Kec. Penjaringan, Daerah Khusus Ibukota Jakarta 14470
                </li>
                <li class="list-group-item">Kalideres, Jakarta Barat</li>
              </ul>
              <ul class="list-group p-3">
                <li class="list-group-item">
                  <h1>Contact Me</h1>
                </li>
                <li class="list-group-item">My WA : 089611328096</li>
                <li class="list-group-item">Instagram : mar_4vic </li>
                <li class="list-group-item">Github : AmarKhoirudin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
