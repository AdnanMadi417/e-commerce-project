

<script setup>
const items = [
  {
    icon: "mdi-home",
    title: "Wide Range of Listings",
    description: "Explore thousands of homes and apartments tailored to your preferences.",
    color: "#1E90FF",
  },
  {
    icon: "mdi-handshake",
    title: "Trusted by Clients",
    description: "Our reputation is built on years of delivering exceptional service.",
    color: "#32CD32",
  },
  {
    icon: "mdi-handshake",
    title: "Affordable Pricing",
    description: "We ensure competitive pricing with options for every budget.",
    color: "#FFD700",
  },
];
</script>

<template>
  <section class="features-section">
    <h1 class="section-title">Why Choose Us</h1>
    <div class="container">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="card"
      >
        <UIcon
            :name="item.icon"
            class="icon"
            aria-label="Feature icon"
            :style="{ backgroundColor: item.color }"
        />
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.section-title{
  text-align: center;
  font-size: 2.5rem;
  color: var(--main-color);
  margin: 20px auto;
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

.card {
  flex: 1 1 calc(33.333% - 20px);
  max-width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--main-color);
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
  }
}
</style>
