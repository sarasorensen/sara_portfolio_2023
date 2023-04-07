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

    <form id="contact-form" ref="form">
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
            v-model="name"
            class="form-input"
            :class="{ 'form-input__red': nameWatch }"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="lname">Email*</label>
        </div>
        <div class="col-75">
          <input
            required
            type="email"
            id="email"
            name="email"
            v-model="email"
            placeholder="Your email.."
            class="form-input"
            :class="{ 'form-input__red': emailWatch }"
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
            v-model="msg"
            class="form-input"
            :class="{ 'form-input__red': msgWatch }"
          ></textarea>
        </div>
      </div>
      <p v-if="!validForm" class="errorMsg">
        Please check your input, something is missing.
      </p>
      <p v-if="success && validForm" class="successMsg">
        Your message was sent, and you will be contacted soon.
      </p>
      <p v-if="!success && resetForm" class="errorMsg">
       Couldn't send message, please try again later.
      </p>
      <button
        @click="validateForm"
        type="button"
        :disabled="!validForm"
        class="btn"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      nameWatch: false,
      email: "",
      emailWatch: false,
      msg: "",
      msgWatch: false,
      validForm: true,
      resetForm: false,
      success: false,
    };
  },
  methods: {
    validateForm() {
      if (this.name == "" || this.email == "" || this.msg == "") {
        this.validForm = false;

        if (this.name == "") {
          this.nameWatch = true;
        } else {
          this.nameWatch = false;
        }

        if (this.email == "") {
          this.emailWatch = true;
        } else {
          this.emailWatch = false;
        }

        if (this.msg == "") {
          this.msgWatch = true;
        } else {
          this.msgWatch = false;
        }
      } else {
        this.validForm = true;
        this.sendEmail();
      }
    },
    async sendEmail() {
 /* service_id: "service_iss2pt8",
        template_id: "template_f1z49rj",
        user_id: "OmP-ic-IM31kcLOUS",
        public_key: "OmP-ic-IM31kcLOUS",
     */

      try {
        emailjs.sendForm(
          "service_iss2pt8",
          "template_f1z49rj",
          this.$refs.form,
          "OmP-ic-IM31kcLOUS",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        this.success = true;
      } catch (error) {
        console.log({ error });
        this.success = false;
      }

      this.resetForm = true;
      this.name = "";
      this.email = "";
      this.msg = "";
    },
  },
  watch: {
    name() {
      if (this.name == "" && this.resetForm !== true) {
        this.nameWatch = true;
      } else {
        this.nameWatch = false;
        this.validForm = true;
      }
    },
    email() {
      if (this.email == "" && this.resetForm !== true) {
        this.emailWatch = true;
      } else {
        this.emailWatch = false;
        this.validForm = true;
      }
    },
    msg() {
      if (this.msg == "" && this.resetForm !== true) {
        this.msgWatch = true;
      } else {
        this.msgWatch = false;
        this.validForm = true;
      }
    },
  },
};
</script>
