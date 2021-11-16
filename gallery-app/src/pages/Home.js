import React from 'react';
import './Home.css';



const Home = () => {

    return (
      <body id="page-top">
      {/* <!-- Navigation--> */}
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div class="container px-5">
              <a class="navbar-brand" href="#page-top">Gallery</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item"><a class="nav-link" href="#!">Sign Up</a></li>
                      <li class="nav-item"><a class="nav-link" href="#!">Log In</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      {/* <!-- Header--> */}
      <header class="masthead text-center text-white">
          <div class="masthead-content">
              <div class="container px-5">
                  <h1 class="masthead-heading mb-0">Gallery</h1>
                  <h5 class="masthead-subheading mb-0">highlight key moments </h5>
                  <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
              </div>
          </div>
          <div class="bg-circle-1 bg-circle"></div>
          <div class="bg-circle-2 bg-circle"></div>
          <div class="bg-circle-3 bg-circle"></div>
          <div class="bg-circle-4 bg-circle"></div>
      </header>
      {/* <!-- Content section 1--> */}
      <div id="portfolio">
          <div class="container-fluid p-0">
              <div class="row g-0">
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                          <div class="portfolio-box-caption">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                          <div class="portfolio-box-caption">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                          <div class="portfolio-box-caption">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                          <div class="portfolio-box-caption">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                          <div class="portfolio-box-caption">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                          <img class="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                          <div class="portfolio-box-caption p-3">
                              <div class="project-category text-white-50">Category</div>
                              <div class="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    
      {/* <!-- Footer--> */}
      <footer class="py-5 bg-black">
          <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Gallery 2021</p></div>
      </footer>
    
  </body>
    )
}

export default Home;