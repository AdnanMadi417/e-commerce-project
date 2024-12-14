<script setup lang="ts">
import {useRoute} from 'vue-router';

type Product = {
  id: number;
  image: string;
  innerImages: string[];
  location: string;
  budget: string;
  description: string;
  details: string[];
  facilities: string[];
  costometerDetails: {
    costometerImage: string;
    costometerName: string;
    costometerContactLink: string;
    costometerPhone: string;
  }[];
};

const route = useRoute();
const productId = parseInt(route.params.id as string);

const items: Product[] = [
  {
    id: 1,
    image: "/images/home_1.webp",
    innerImages: [
      "/images/home_1.webp",
      "/images/home_1.webp",
      "/images/home_1.webp",
      "/images/home_1.webp",
    ],
    location: "Kuala Lumpur, Malaysia",
    budget: "Aria Luxury Residence",
    description: "Luxurious Living | Freehold",
    details: ["Spacious rooms", "Modern kitchen", "Great location"],
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
    image: "/images/home_2.webp",
    innerImages: [
      "/images/home_2.webp",
      "/images/home_2.webp",
      "/images/home_2.webp",
    ],
    location: "New York, USA",
    budget: "Luxury Loft",
    description: "Urban Living | Freehold",
    details: ["Open-plan design", "City view", "Modern amenities"],
    facilities: ["Wi-Fi", "Swimming Pool", "Gym", "Elevator"],
    costometerDetails: [
      {
        costometerImage: "/images/home_2.webp",
        costometerName: "John",
        costometerContactLink: "https://john-agent.com",
        costometerPhone: "+10123456789",
      },
    ],
  },
  {
    id: 3,
    image: "/images/home_3.webp",
    innerImages: [
      "/images/home_3.webp",
      "/images/home_3.webp",
    ],
    location: "Sydney, Australia",
    budget: "Coastal Villa",
    description: "Seaside Living | Freehold",
    details: ["Beachfront", "Private pool", "Exclusive location"],
    facilities: ["Wi-Fi", "Private Beach", "Pool", "Gym"],
    costometerDetails: [
      {
        costometerImage: "/images/home_3.webp",
        costometerName: "Emma",
        costometerContactLink: "https://emma-agent.com",
        costometerPhone: "+61234567890",
      },
    ],
  },
];

const product = items.find((item) => item.id === productId);

const currentIndex = ref(0);

const currentImage = computed(() => product?.innerImages[currentIndex.value]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % (product?.innerImages.length || 1);
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + (product?.innerImages.length || 1)) % (product?.innerImages.length || 1);
};

const setImage = (index: number) => {
  currentIndex.value = index;
};

const currentYear = new Date().getFullYear();

</script>

<template>
  <section class="product-details" v-if="product">
    <div class="container">

      <div class="product-carousel">
        <div class="carousel-container">
          <button @click="prevImage" class="carousel-button prev-button">❮</button>
          <div class="product-image">
            <img :src="currentImage" alt="Property Image"/>
          </div>
          <button @click="nextImage" class="carousel-button next-button">❯</button>
        </div>
        <div class="dots">
            <span
                v-for="(image, index) in product.innerImages"
                :key="index"
                :class="{'active': index === currentIndex}"
                @click="setImage(index)"
                class="dot"
            ></span>
        </div>
      </div>

      <div class="product-info">
        <h2>{{ product.location }}</h2>

        <div class="divider">
          <hr/>
          <span class="divider-text">{{ currentYear }}</span>
          <hr/>
        </div>

        <p><span class="label"> Description: </span>{{ product.description }}</p>
        <p><span class="label"> Budget: </span> {{ product.budget }}</p>
        <div>
          <h4><span class="label"> Facilities: </span></h4>
          <div class="container-box">
            <span v-for="(facility, index) in product.facilities" :key="index"> <span
                class="info-box">{{ facility }}</span></span>
          </div>
        </div>

        <div>
          <h4><span class="label"> Details: </span></h4>
          <div class="container-box">
            <span v-for="(detail, index) in product.details" :key="index"> <span class="info-box">
              {{ detail }}</span></span>
          </div>
        </div>

        <div>
          <h4>Contact Information:</h4>
          <div class="contact-info" v-for="(contact, index) in product.costometerDetails" :key="index">
            <div class="contact-form">
              <img :src="contact.costometerImage" alt="Agent Image" class="agent-image"/>
              <p>{{ contact.costometerName }}</p>
              <p>
                <span class="icon">
                  <UIcon
                      name="mdi:phone"
                  />
                </span>
                {{ contact.costometerPhone }}
              </p>
              <a :href="contact.costometerContactLink" target="_blank">Contact via link</a>
            </div>
          </div>
        </div>
        <button class="appointment-btn">Make Appointment</button>
      </div>
    </div>
  </section>

  <section v-else>
    <p>Product not found.</p>
  </section>
</template>

<style scoped>
.product-details {
  padding: 40px 20px;
  background: #f9f9f9;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 auto;
  background-color: var(--font-hovor-color);
}

.container .product-carousel,
.container .product-info {
  flex: 2;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
  }
}

.product-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 600px;
  overflow: hidden;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--font-hovor-color);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 20px 0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}

h2 {
  font-size: 1.5rem;
  color: var(--main-color);
}

.product-image img {
  max-width: 100%;
  margin: 1rem auto;
}

.product-info {
  padding: 20px;
  color: var(--main-color);
  text-align: start;
  align-items: start;
  margin: auto 0;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.divider hr {
  flex: 1;
  border: none;
  border-top: 2px solid var(--main-color);
  margin: 0;
}

.divider-text {
  font-size: 1.2rem;
  color: var(--main-color);
  padding: 0 10px;
  z-index: 1;
}

.product-info .label {
  font-size: 1.2rem;
  font-weight: bold;
}

.container-box {
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  gap: 20px;
}

.product-info .info-box {
  padding: 5px 10px;
  margin: 0 5px;
  color: var(--font-hovor-color);
  border-radius: 5px;
  background-color: var(--main-color);
}

.appointment-btn {
  color: var(--font-hovor-color);
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--main-color);
}

.contact-info {
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
}

.contact-form {
  display: inline-flex;
  align-items: center;
}

.agent-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.contact-form p {
  margin: 5px 10px;
}

.contact-form a {
  text-decoration: none;
  color: var(--main-color);
}

@media (max-width: 1200px) {
  .contact-info {
    display: block;
    align-items: center;
    padding: 0;
    font-size:1.2rem;
  }

  .agent-image {
    width: 100px;
    height: 100px;
    margin: 10px auto;
  }

  .contact-form {
    display: block;
    align-items: center;
    text-align: center;
  }
}

</style>
