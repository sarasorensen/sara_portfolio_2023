<template>
  <footer>
    <div>
        <div class="heading heading__white">
        <h2>Sara Sørensen</h2>
      </div>

      <h3>Any questions?</h3>
      <p>
        If you have any questions or want additional information about me,
        please, don't hesitate to contact!
      </p>
      <div class="btn-row btn-row__white">
        <a href="https://www.linkedin.com/in/sara-s%C3%B8rensen-7b0711179/"
          ><i class="fa fa-linkedin-square" style="font-size: 1.5em"></i
        ></a>
        <a href="https://github.com/sarasorensen/portfolio_front-end_sara"
          ><i class="fa fa-github" style="font-size: 1.5em"></i
        ></a>
        <a href="mailto:sarasorensen97@hotmail.com"
          ><i class="fa fa-envelope" style="font-size: 1.5em"></i
        ></a>
        <i class="copyright">© 2023 by Sara Sørensen</i>
      </div>
    </div>


    <div class="footer-nav">
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Projects</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>
