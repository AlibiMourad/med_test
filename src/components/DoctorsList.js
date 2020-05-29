import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const DoctorsList = ({ doctors }) => {
  return (





    <body>
 
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center text-white">
          <img src={doctors.map(doctor => <>{doctor.avatar}</>)} class="user" ></img>
          <h1 class="font-weight-light mt-2"><span>Dr. </span> 
            {doctors.map(doctor => <>{doctor.first_name} {doctor.last_name}</>)}
          </h1>
          <p class="lead">{doctors.map(doctor => <>{doctor.special}</>)}</p>
          
            <img src="C:/Users/xfrag/med/src/img/arrow.png" class="mt-5 animate__animated animate__shakeY animate__infinite"></img>

           
        </div>
      </div>
    </div>
  </header>
 
  <section class="mt-5">
    <div class="container" id="info">
        <div class="row">
                <div class="col-sm">
                    <h2>About Our <span>eHospital</span></h2>
                    <p>we additionally paintings very closely with our community healthcare group who provide antenatal, postnatal and nursing services and different specialist provision inclusive of the quitters scheme</p>
                    <p>This 24 month benefit covers all ranges of basic upkeep. Notwithstanding every one of the things included on the Full administration we cover things that are frequently suggested for substitution like clockworkIpsum dolor sit amet, consectetur adipisicing elit </p>
                    <button class="btn btn-primary px-4">Read More</button>
                    <button class="btn btn-secondary px-4">Explore Service</button>
                </div>
                <div class="col-sm">
                    <h2>Appointment Schedule.</h2>
                    <div class="table-responsive py-2">
                        <table class="table table-bordered  text-center">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Mon-Tues</b></td>
                                    <td>9.00 - 22.00</td>
                                </tr>
                                <tr>
                                    <td><b>Wednesday</b></td>
                                    <td>9.00 - 20.00</td>
                                </tr>
                                <tr>
                                    <td><b>Thursday</b></td>
                                    <td>9.00 - 21.00</td>
                                </tr>
                                <tr>
                                    <td><b>Friday</b></td>
                                    <td>9.00 - 19.00</td>
                                </tr>
                                <tr>
                                    <td><b>Saturday</b></td>
                                    <td>9.00 - 18.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center">
                            <button class="btn btn-primary px-4">Make an Appointment</button>
                        </div>
                        
                    </div>
                </div>
                <div class="col-sm">
                    <img width="100%" src="img/user.png" class="" alt="Dr Samantha Smith"></img>
                    <h4 class="mb-0 text-center"><span class="font-weight-blod">Samantha Smith -</span><small>Gynecologist</small></h4>

                </div>

        </div> 
    </div>
  </section>


  <section class="mt-5 py-5 services">
      <div class="container">
        <div class="row text-center text-white">
            <div class="col-md-3 align-self-center">
                <div class="col-md-12 service-item">
                  <i class="fas fa-3x fa-money-check-alt"></i>
                  <h4 class="mt-4 mb-3 font-weight-light">Online Payment</h4>
                  <p>You can pay With Electronic Fund Transfers System(EFT).</p>
                </div>
            </div>
            <div class="col-md-3">
              <div class="col-md-12 service-item">
                <i class="fas fa-3x fa-money-check-alt"></i>
                <h4 class="mt-4 mb-3 font-weight-light">Online Payment</h4>
                <p>You can pay With Electronic Fund Transfers System(EFT).</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="col-md-12 service-item">
                <i class="fas fa-3x fa-money-check-alt"></i>
                <h4 class="mt-4 mb-3 font-weight-light">Online Payment</h4>
                <p>You can pay With Electronic Fund Transfers System(EFT).</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="col-md-12 service-item">
                <i class="fas fa-3x fa-money-check-alt"></i>
                <h4 class="mt-4 mb-3 font-weight-light">Online Payment</h4>
                <p>You can pay With Electronic Fund Transfers System(EFT).</p>
              </div>
            </div>
        </div>
      </div>
  </section>


  <section class="mt-5 articles">
    <div class="container">

      <div class="row">
        <div class="col-6 mx-auto text-center">
          <h3 class="text-uppercase">Derniere 
          <span style={{color: '#0092D0;'}}>
            Articles</span></h3>
          <p> ehospital department is responsible for Medical and Health Care that can be helpful for their paients and all human bing.</p>
        </div>
      </div>

      <div class="row py-5">

            <div class="col-lg-4">
              <div class="col-12">
                <div class="card bg-default">
                  <img class="card-img-top" src="img/article1.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title font-weight-light">Modern, Testing Lab</h5>
                    <p class="card-text">
                       The lab at eHospital offers tests covering the full range of medicinal pathology.
                    </p>
                    <button class="btn btn-primary bg-primary px-4">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="col-12">
                <div class="card bg-default">
                  <img class="card-img-top" src="img/article2.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title font-weight-light">Emergency Treatment</h5>
                    <p class="card-text">
                       Orthopedic administrations, go for the treatment ef the musculoskeletal framework.

                    </p>
                    <button class="btn btn-primary bg-primary px-4">Read More</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-lg-4">
              <div class="col-12">
                <div class="card bg-default">
                  <img class="card-img-top" src="img/article3.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title font-weight-light">Primary Health Care</h5>
                    <p class="card-text">
                       Primary healthcare services are provided by general practitioners and nurses in eHospital.
                    </p>
                    <button class="btn btn-primary bg-primary px-4">Read More</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
      
    </div>
  </section>


  <section class="mt-5 py-5" style={{backgroundColor: '#f0f5f7;'}}>
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto text-center">
          <h3 class="text-uppercase">QUESTION <span style={{color: '#0092D0;'}}>RÉPONSE</span></h3>
          <p>
            Medicinal Service Compary puts stock in conveying the most elevated quality administration with quality and sympathy every day.          </p>
        </div>
      </div>
    </div>
  </section>


  <div class="container-fluid">
    <div class="row videos">
        <div class="col-md-3 col-sm-6 col-xs-12 video">
        <a href="LinkT">
            <img alt="AltText" src="img/vid1.jpg" class="img-fluid"></img>
            <img class="play" src="img/play.png"></img>
        </a>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 video">
        <a href="LinkToImage">
            <img  alt="AltText" src="img/vid2.jpg" class="img-fluid"></img>
            <img class="play" src="img/play.png"></img>
        </a>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 video">
        <a href="LinkToImage">
            <img src="img/vid3.jpg" alt="AltText" class="img-fluid"></img>
            <img class="play" src="img/play.png"></img>
        </a>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 video">
        <a href="LinkToImage">
            <img alt="AltText" src="img/vid4.jpg" class="img-fluid"></img>
            <img class="play" src="img/play.png"></img>
        </a>
        </div>
    </div>
 </div>    

 <footer class="text-center text-white">
   <p>Copyright&copy; 2020 Med.tn </p>
 </footer>
   
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    </body>
    
    
  );
};

export default DoctorsList;
