<script setup lang="ts">
import {onMounted, ref} from 'vue';

const isLinksVisible = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log("Links visibility toggled:", isLinksVisible.value);
}

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1200;
  });
});

</script>

<template>
  <header class="header-section">
    <div class="container">

      <div class="container-box">
        <div class="logo">
          <a href="">
            <img src="../public/images/logo.jpg" alt="logo">
          </a>
          <button @click="toggleLinksVisibility" class="bar-btn" v-if="isMobile">
            <UIcon
                name="uil-bars"
            />
          </button>
        </div>
      </div>

      <nav class="menu" v-if="isLinksVisible || !isMobile">
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
      </nav>

      <div class="contact-container-btn">
        <a class="contact-btn" href="https://" target="_blank">Contact me</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  background-color: var(--main-color);
  color: var(--main-font-color);
  margin: 0;
  padding: 0;
}

.container-box > button {
  display: none;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: .5rem 0;
}

.logo img {
  width: 60px;
  max-width: 70px;
  max-height: 70px;
  height: 60px;
  border-radius: 50%;
}

.menu {
  display: block;
  align-items: center;
  margin: 1rem auto;
}

.menu-links {
  display: inline-flex;
  list-style: none;
  align-items: center !important;
}

.menu-links li a {
  color: var(--main-font-color);
  font-size: 1.2rem;
  margin: 0 .5rem;
  text-decoration: none;
}

.menu-links li a:hover {
  color: var(--font-hovor-color);
  transition: .3s ease-in-out;
}

.contact-container-btn {
  display: flex;
}

.contact-btn {
  font-size: 1.2rem;
  margin: auto;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: var(--main-hovor-color);
  color: var(--main-font-color);
  border-radius: 0.5rem;
}

.contact-btn:hover {
  background-color: var(--main-hovor-color);
  color: var(--font-hovor-color);
  transition: 0.3s ease-in-out;
}

@media (max-width: 1200px ) {

  .container {
    display: block;
  }

  .contact-btn {
    display: none;
  }

  .container-box div {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
  }

  .container-box div > button {
    font-size: 2rem;
  }

  .menu-links {
    display: block;
    margin: 1rem;
  }

  .menu-links li {
    margin: .5rem;
    border-bottom: 2px solid var(--font-hovor-color);
  }

}

</style>
