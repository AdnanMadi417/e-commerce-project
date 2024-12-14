<script setup lang="ts">

type Product = {
  id: number;
  image: string;
  location: string;
  budget: string;
  description: string;
  details: string[];  // Add this line to define 'details'
  facilities: string[];
  costometerDetails: {
    costometerImage: string;
    costometerName: string;
    costometerContactLink: string;
    costometerPhone: string;
  }[];
};

const items: Product[] = [
  {
    id: 1,
    image: "/images/home_1.webp",
    location: "Kuala Lumpur, Malaysia",
    budget: "Aria Luxury Residence",
    description: "Luxurious Living | Freehold",
    details: ["Spacious rooms", "Modern kitchen", "Great location"], // Add details here
    facilities: ["Wi-Fi", "Sky Lounge", "Jacuzzi", "Gym", "Infinity Pool"],
    costometerDetails: [
      {
        costometerImage: "/images/home_1.webp",
        costometerName: "Ahmad",
        costometerContactLink: "https://ahmad-agent.com",
        costometerPhone: "+601112223333",
      },
    ],
  },
  {
    id: 2,
    image: "/images/home_1.webp",
    location: "Kuala Lumpur, Malaysia",
    budget: "Aria Luxury Residence",
    description: "Luxurious Living | Freehold",
    details: ["Spacious rooms", "Modern kitchen", "Great location"], // Add details here
    facilities: ["Wi-Fi", "Sky Lounge", "Jacuzzi", "Gym", "Infinity Pool"],
    costometerDetails: [
      {
        costometerImage: "/images/home_1.webp",
        costometerName: "Ahmad",
        costometerContactLink: "https://ahmad-agent.com",
        costometerPhone: "+601112223333",
      },
    ],
  },
  {
    id: 3,
    image: "/images/home_1.webp",
    location: "Kuala Lumpur, Malaysia",
    budget: "Aria Luxury Residence",
    description: "Luxurious Living | Freehold",
    details: ["Spacious rooms", "Modern kitchen", "Great location"], // Add details here
    facilities: ["Wi-Fi", "Sky Lounge", "Jacuzzi", "Gym", "Infinity Pool"],
    costometerDetails: [
      {
        costometerImage: "/images/home_1.webp",
        costometerName: "Ahmad",
        costometerContactLink: "https://ahmad-agent.com",
        costometerPhone: "+601112223333",
      },
    ],
  },
];

</script>

<template>
  <section class="shopping-section">
    <div class="container">
      <h2 class="section-title">Available Properties</h2>
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="card-header">
          <h3>{{ item.location }}</h3>
        </div>
        <div class="card-body">
          <div class="image-container">
            <img :src="item.image" alt="Property Image"/>
          </div>
          <div class="info-container">
            <p><strong style="color: var(--main-hovor-color)">Budget:</strong> {{ item.budget }}</p>
            <p><strong style="color: var(--main-hovor-color)">Description: </strong> {{ item.description }}</p>
            <div>
              <h4><strong style="color: var(--main-hovor-color)">Facilities : </strong>
                <span v-for="(facility, fIndex) in item.facilities" :key="fIndex"> {{ facility }} _ </span>
              </h4>
            </div>
          </div>
          <div class="contact-info" v-for="(detail, Index) in item.costometerDetails">

            <div class="contact-form">

              <span class="contact-icon">
                <UIcon
                    name="mdi-whatsapp"
                    class="contact-icon"
                />
                +60
              </span>
              <p class="phone-box">{{ detail.costometerPhone }}</p>
              <span>
                <a :href="detail.costometerContactLink">
                  <UIcon
                      name="mdi:phone"
                      class="contact-icon"
                  />
                </a>
              </span>
              <span>
                <a :href="detail.costometerContactLink">
                  <UIcon
                      name="mdi-message"
                      class="contact-icon"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <nuxt-link :to="`/products/${item.id}`">
            <button class="btn">Explore More</button>
          </nuxt-link>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.shopping-section {
  padding: 40px 20px;
  background: #f9f9f9;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 20px;
  width: 100%;
}

.card {
  flex: 1 1 30%;
  max-width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 10px 20px;
  background: var(--main-color);
  color: var(--main-font-color);
  text-align: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  flex: 1;
}

.image-container img {
  width: 100%;
  max-width: 100%;
  max-height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
}

.info-container {
  flex: 1;
}

.info-container h4 {
  margin: 10px 0;
  color: var(--main-color);
}

.contact-info > .box p {
  font-size: 18px;
  color: var(--main-hovor-color);
}

.contact-form {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  font-size: 16px;
  color: var(--main-color);
}

.contact-form .contact-icon {
  padding: 5px 10px;
}

.contact-form p {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
}

.card-footer {
  padding: 10px;
  background: var(--main-color);
  text-align: center;
}

.btn {
  padding: 5px 10px;
  background: var(--main-font-color);
  color: var(--main-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background: var(--font-hovor-color);
  color: var(--main-hovor-color);
  transition: background 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 45%;
    max-width: 45%;
  }
}

@media (max-width: 480px) {
  .card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
