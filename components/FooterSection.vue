<script setup lang="ts">
import {ref} from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  console.log('Form submitted:', {name: name.value, email: email.value, message: message.value});
  alert('Form submitted successfully!');
};


const currentYear = new Date().getFullYear();

</script>

<template>

  <section class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <input type="text" v-model="name" placeholder="Name" required/>
          <input type="email" v-model="email" placeholder="Email" required/>
        </div>
        <textarea v-model="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>

  <section class="footer-section">

    <div class="container">

      <div class="logo-container">
        <img src="../public/images/logo.png" alt="logo">
        <div class="social-media-icon">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="fa-brands:facebook" size="24"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="fa-brands:twitter" size="24"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="fa-brands:instagram" size="24"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="fa-brands:linkedin" size="24"/>
          </a>
        </div>
      </div>

      <div class="links-container">
        <h3>Links</h3>
        <ul class="menu-links">
          <li>
            <router-link to="#landing-sec">Home</router-link>
          </li>

          <li>
            <router-link to="#about-sec">About</router-link>
          </li>

          <li>
            <router-link to="#about-sec">Buy</router-link>
          </li>

          <li>
            <router-link to="#about-sec">Rent</router-link>
          </li>

          <li>
            <router-link to="#about-sec">Contact Us</router-link>
          </li>

          <li>
            <router-link to="#about-sec">FAQs</router-link>
          </li>

        </ul>
      </div>

      <div class="location-container">
        <h3>Location</h3>
        <div>
          <p>123 Street, City, State, Zip</p>
        </div>

        <div>
          <h4>Hours</h4>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div class="contact-container">
        <h3>Contact Us</h3>
        <p>
          <span><UIcon name="fa-solid:phone"/></span>
          Phone: (123) 456-7890
        </p>
        <p>
          <span><UIcon name="fa-solid:envelope"/></span>
          Email: info@example.com
        </p>
      </div>
    </div>

    <div class="container">
      <div class="divider">
        <hr/>
        <span class="divider-text">©Copyright {{ currentYear }} All rights reserved</span>
        <hr/>
      </div>
    </div>
  </section>
</template>

<style scoped>

.contact-section {
  background-color: #f9f9f9; /* Light background for contrast */
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  max-width: 800px;
  width: 100%;
  background-color: var(--font-hovor-color);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--main-color);
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: block;
  gap: 15px;
}

.form-control input {
  width: calc(50% - 20px);
  margin: 10px 10px 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--font-hovor-color);
  transition: border-color 0.3s ease;
}

textarea {
  width: calc(100% - 30px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--font-hovor-color);
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: var(--main-color);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  width: calc(100% - 30px);
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: var(--main-hovor-color);
}

button:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  input, textarea {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
  }
}


.footer-section {
  padding: 100px 0 0 0;
  background-color: var(--main-color);
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.container div {
  flex: 1 1 25%;
  max-width: 25%;
  align-items: start;
  padding: 20px;
  color: white;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
  }

  .container div {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

.container div .social-media-icon {
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.container div .social-media-icon a {
  margin: 0 10px;
  color: var(--font-hovor-color);
  transition: transform 0.3s ease;
}

.menu-links {
  display: block;
  list-style: none;
  text-align: start;
  font-size: 1.2rem;
}

.menu-links li {
  margin-bottom: .9rem;
  border-bottom: 2px solid var(--main-font-color);
}

.menu-links li a {
  color: var(--main-font-color);
  font-size: 1.2rem;
  text-decoration: none;
}

.menu-links li a:hover {
  color: var(--font-hovor-color);
  transition: .3s ease-in-out;
}

.container h3 {
  font-size: 1.5em;
  color: var(--main-font-color);
  margin-bottom: 10px;
  background-color: transparent;
  padding: 10px;
  width: 100%;
}

.container .location-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  text-align: start;
}

.container .location-container div {
  flex: 1 1 100%;
  max-width: 100%;
  text-align: start;
}

.container .location-container div h3 {
  font-size: 1.2em;
  color: var(--main-font-color);
}

.container .contact-container {
  text-align: start;
}

.container .contact-container p span {
  margin-right: 10px;
  color: var(--font-hovor-color);
  transition: transform 0.3s ease;
}

.container .contact-container p {
  margin: 20px 0;
  color: var(--main-font-color);
}

.container .divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.container .divider hr {
  flex: 1;
  border: none;
  border-top: 2px solid #ccc;
  margin: 0;
}

.container .divider-text {
  font-size: 1.2rem;
  color: var(--font-hovor-color);
  padding: 0 10px;
  z-index: 1;
}


</style>