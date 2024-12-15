<script setup lang="ts">
const details = [
  {
    number: '1000',
    text: 'Properties Sold',
  },
  {
    number: '500',
    text: 'Happy Clients',
  },
  {
    number: '300',
    text: 'Listings Available',
  },
  {
    number: '50',
    text: 'Experienced Agents',
  },
];
</script>


<template>
  <section class="about-section">
    <div class="container">

      <div class="photo-container">
        <div class="photo-box">
          <img class="box-image" src="/images/home_1.webp" alt="Property Image">
          <button class="learn-more-button">Learn More</button>
        </div>
        <div class="photo-box">
          <img class="box-image" src="/images/home_2.jpeg" alt="Property Image">
        </div>
      </div>

      <div class="info-container">
        <div class="description-box">
          <h2 class="title">We Provide the Best Property for You</h2>
          <p class="description">
            Ajadco is dedicated to making your dream home a reality. We specialize in selling and renting quality
            homes, offering a wide range of properties to suit every lifestyle and budget. Whether you're looking to buy
            your forever home, rent a cozy apartment, or invest in real estate, we provide trusted guidance, seamless
            transactions, and exceptional customer service. Let us help you find the perfect place to call home!
          </p>
        </div>

        <div class="statistics-box">
          <div v-for="(detail, index) in details" :key="index" class="statistic-card">
            <span class="stat-number">{{ detail.number }}+</span>
            <h3 class="stat-text">{{ detail.text }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.photo-container {
  display: flex;
  flex: 2;
  gap: 20px;
}

.photo-box {
  position: relative;
  max-width: 250px;
}

.box-image {
  width: 100%;
  height: auto;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.learn-more-button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: var(--main-color);
  color: var(--main-font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.learn-more-button:hover {
  background-color: var(--main-hovor-color);
  transition: background-color 0.3s ease-in-out;
}

@media (max-width: 767px) {
  .container {
    display: block;
    max-width: 90%;
    margin: 0 auto;
    text-align: justify;
  }

  .photo-container {
    flex-direction: column;
    gap: 10px;
  }

  .photo-box {
    margin: 10px 0;
  }
}

@media (max-width:1200px){
  .container {
    display: block;
    max-width: 90%;
    margin: 0 auto;
  }

  .photo-box{
    margin: 10px auto;
  }

}

.info-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.description-box {
  text-align: left;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--main-color);
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

@media (max-width: 767px) {
  .title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: var(--main-color);
  }

  .description {
    text-align: justify;
    margin: 1rem auto ;
  }
}

.statistics-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.statistic-card {
  flex: 1 1 calc(25% - 10px);
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 1.5rem;
  color: var(--main-color);
}

.stat-text {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .photo-container,
  .info-container {
    width: 100%;
  }

  .statistic-card {
    flex: 1 1 100%;
  }
}
</style>
