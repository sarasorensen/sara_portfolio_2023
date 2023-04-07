<template>
  <div class="resume">
    <section class="sidebar">
      <div class="sidebar__mobile_only">
        <div class="img-wrap">
        <img
          src="../assets/profileImg.jpeg"
          alt="portrait of a woman with brown hair"
        /></div>
        <div>
          <p><i class="fa fa-briefcase"></i>Front End Developer</p>
          <p><i class="fa fa-home"></i>Elviria, Malaga</p>
          <p><i class="fa fa-envelope"></i>sarasorensen97@hotmail.com</p>
          <p><i class="fa fa-phone"></i>+4747707105</p>
        </div>
      </div>

      <hr />
      <b><i class="fa fa-asterisk"></i>Skills</b>
      <p>Vue</p>
      <div class="progress">
        <div class="progress__inner" style="width: 80%">
          <p>80%</p>
        </div>
      </div>
      <p>JavaScript</p>
      <div class="progress">
        <div class="progress__inner" style="width: 90%">
          <p>90%</p>
        </div>
      </div>
      <p>React</p>
      <div class="progress">
        <div class="progress__inner" style="width: 70%">
          <p>70%</p>
        </div>
      </div>
      <p>Jest</p>
      <div class="progress">
        <div class="progress__inner" style="width: 45%">
          <p>45%</p>
        </div>
      </div>
      <p>CSS</p>
      <div class="progress">
        <div class="progress__inner" style="width: 100%">
          <p>100%</p>
        </div>
      </div>
      <p>SCSS</p>
      <div class="progress">
        <div class="progress__inner" style="width: 100%">
          <p>100%</p>
        </div>
      </div>
      <p>UX/UI</p>
      <div class="progress">
        <div class="progress__inner" style="width: 100%">
          <p>100%</p>
        </div>
      </div>
      <p>Adobe XD</p>
      <div class="progress">
        <div class="progress__inner" style="width: 90%">
          <p>90%</p>
        </div>
      </div>
      <p>Illustrator</p>
      <div class="progress">
        <div class="progress__inner" style="width: 65%">
          <p>65%</p>
        </div>
      </div>
      <hr />
      <b><i class="fa fa-globe"></i>Languages</b>
      <p>Norwegian</p>
      <div class="progress">
        <div class="progress__inner" style="width: 100%">
          <p>100%</p>
        </div>
      </div>
      <p>English</p>
      <div class="progress">
        <div class="progress__inner" style="width: 95%">
          <p>95%</p>
        </div>
      </div>
      <p>Spanish</p>
      <div class="progress">
        <div class="progress__inner" style="width: 10%">
          <p>10%</p>
        </div>
      </div>
    </section>
    <div>
      <section class="container">
        <h2><i class="fa fa-suitcase"></i> Work experience</h2>
        <h3>Front End Developer / Soolo</h3>
        <h4>
          <i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2021 - Current
        </h4>
        <ul>
          <b>Key qualifications & responsibilities</b>
          <li>
            - Implemented new features, maintenance, security, tests, and a
            responsive web design.
          </li>
          <li>- Assessed and implemented UX and UI design.</li>
          <li>
            - Collaborated with team members and consultants for implementation
            of new features.
          </li>
          <li>
            - Collaborated with current and potential clients to map user needs.
          </li>
          <li>
            - Collaborated with current and potential clients to map user needs.
          </li>
          <li>
            - Implemented an administration platform, for internal use by
            employees. Including a platform for assemblers, where they can
            register new devices and sensors.
          </li>
          <li>
            - Recorded, edited & posted tutorials for onboarding new clients and
            employees.
          </li>
        </ul>
        <hr />
        <h3>Retail / Lindex</h3>
        <h4>
          <i class="fa fa-calendar fa-fw w3-margin-right"></i>Sep 2020 - July
          2021
        </h4>
        <ul>
          <b>Key qualifications & responsibilities</b>
          <li>
            - Responsible for registry, financials, customer service,
            organization & re-stocking merchandise.
          </li>
          <li>- Visual merchandiser in own department.</li>
        </ul>
        <hr />
        <h3>Retail / Gina Tricot</h3>
        <h4>
          <i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2013 - July
          2019
        </h4>
        <ul>
          <b>Key qualifications & responsibilities</b>
          <li>
            - Responsible for registry, financials, customer service,
            organization & re-stocking merchandise.
          </li>
          <li>- Visual merchandiser in own department.</li>
        </ul>
      </section>

      <section class="container">
        <h2><i class="fa fa-certificate"></i> Education</h2>

        <h3>
          Front-end Development / Noroff School Of Technology and digital media
        </h3>
        <h4>
          <i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2019 - March
          2021
        </h4>
        <ul>
          <li>Higher professional Degree</li>
        </ul>
        <hr />
        <h3>Media & Communication / Vågen high school</h3>
        <h4>
          <i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2013 - July
          2016
        </h4>
        <ul>
          <li>
            Higher Education Entrance Qualifications with Media & Communication
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
};
</script>
