<template>
  <div class="form-wrap">
    <div class="form-wrap__info">
      <div class="heading heading__white">
        <h2>Contact me</h2>
      </div>
      <h3>Any questions?</h3>
      <p>
        If you have any questions or want additional information about me,
        please, don't hesitate to contact!
      </p>
    </div>

    <form action="action_page.php">
      <div class="row">
        <div class="col-25">
          <label for="fname">First Name*</label>
        </div>
        <div class="col-75">
          <input
            required
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="lname">Last Name*</label>
        </div>
        <div class="col-75">
          <input
            required
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="subject">Message*</label>
        </div>
        <div class="col-75">
          <textarea
            required
            id="subject"
            name="message"
            style="height: 190px"
          ></textarea>
        </div>
      </div>
      <p v-if="!validForm" class="errorMsg">Please check your input, something is missing.</p>
      <button @click="validateForm" type="button" class="btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      lastName: "",
      msg: "",
      validForm: true,
    };
  },
  methods: {
    validateForm() {
      if (this.name == "" || this.lastName == "" || this.msg == "") {
        this.validForm = false;
      } else {
        this.validForm = true;
        window.open('mailto:sarasorensen97@hotmail.com?subject=subject&body=body');
      }
    },
  },
};
</script>
