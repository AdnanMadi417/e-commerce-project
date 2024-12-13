<script setup>

const items = [
  {
    icon: "mdi-home",
    description: "Over 1,000 homes sold across the region.",
  },
  {
    icon: "mdi-city",
    description: "Operating in 20+ cities nationwide.",
  },
  {
    icon: "mdi-account-group",
    description: "More than 5,000 happy clients served.",
  },
];</script>

<template>
  <section class="landing-section">
    <div class="container">

      <div class="text-content">
        <h2 class="title">Find Your Dream Property</h2>
        <p class="description">
          Welcome to HomeFinder, your trusted platform for buying, renting, and selling homes and apartments.
          Explore a wide range of properties, save your favorites, and easily find your dream home. Whether
          you're looking to settle down or invest, we make the process seamless and stress-free.
        </p>
      </div>

      <div class="image-content">
        <img src="/images/logo.png" alt="Dream Property" class="landing-image"/>
      </div>

    </div>
  </section>
  <section class="analysis-section">
    <div class="main-container">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="card"
      >
        <UIcon
            :name="item.icon"
            class="icon"
        />
        <p class="descriptions">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing-section {
  padding: 40px 0;
  background: linear-gradient(135deg, #3B1C32, #6A1E55);
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--font-hovor-color);
}

.description {
  padding: 10px 0;
  font-size: .9rem;
  text-align: justify-all;
  line-height: 1.6;
  color: var(--font-hovor-color);
}

.image-content {
  flex: 1;
  text-align: center;
  align-items: center;
}

.landing-image {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.9rem;
  }
}

.analysis-section {
  padding: 40px 20px;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 800px;
  max-width: 800px;
  margin: -100px auto 0 auto;
  background-color: #EEEEEE;
  box-shadow: rgba(149, 157, 165, 0.9) 0 1px 2px;
  color: var(--main-color) !important;
}

@media (max-width: 1200px) {
  .main-container {
    gap: 20px;
    width: 100%;
  }
}

.card {
  flex: 1 1 calc(33.333% - 20px);
  max-width: 300px;
  padding: 10px 0;
  color: var(--main-color);
  text-align: center;
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
  color: var(--main-color);
}

.descriptions {
  font-size: 1rem;
  line-height: 1;
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
  }
}

</style>
