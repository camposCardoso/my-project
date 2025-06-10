<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const showWelcome = ref(true);
const showHeader = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  if (showWelcome.value) return;

  const currentScroll = window.scrollY;
  if (currentScroll > lastScrollY && currentScroll > 80) {
    showHeader.value = false;
  } else {
    showHeader.value = true;
  }
  lastScrollY = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Header -->
  <transition name="fade-slide">
    <HeaderComponent v-if="showHeader" />
  </transition>

  <!-- Contenido principal -->
  <main :class="{ 'blurred': showWelcome }">
    <!-- Aquí tus secciones Home, Notes, About us... -->
  </main>

  <!-- Modal Welcome -->
  <div v-if="showWelcome" class="modal-overlay" aria-modal="true" role="dialog">
    <section class="modal-content">
      <h1
        class="title"
        @click="showWelcome = false"
        tabindex="0"
        @keyup.enter="showWelcome = false"
        @keyup.space="showWelcome = false"
      >
        Welcome to Your Notes App
      </h1>
      <p class="subtitle">
        Click the title above to start working on your Home page.
      </p>
    </section>
  </div>

 <!-- Sección Ubicación -->
<section class="location-section">
  <div class="location-content">
    <!-- Texto de la dirección -->
    <div class="location-text">
      <h2>Our Location</h2>
      <p>Sevilla, Spain</p>
      <p>Código Postal: 41000</p>
    </div>

    <!-- Mapa interactivo -->
    <div class="location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12607.267251519907!2d-5.99534025!3d37.3886305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c110bfcd01b%3A0x402afcd33762270!2sSeville%2C%20Spain!5e0!3m2!1sen!2ses!4v1624902352562!5m2!1sen!2ses"
        width="500"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

  <!-- Footer -->
  <footer class="footer">
    <!-- Instagram -->
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      class="icon-link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E1306C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    </a>

    <!-- TikTok -->
    <a
      href="https://www.tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      class="icon-link tiktok"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          d="M224 80.002a48.05 48.05 0 0 1-38.4-19.2A47.14 47.14 0 0 1 176 32h-32a8 8 0 0 0-8 8v112a24 24 0 1 1-24-24 8 8 0 0 0 8-8V88a8 8 0 0 0-8-8 56 56 0 1 0 56 56v-55.9A64.3 64.3 0 0 0 224 112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-7.998Z"
          fill="black"
        />
      </svg>
    </a>
  </footer>
</template>

<style scoped>
/* Animación Header */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* Contenido principal */
main {
  transition: filter 0.3s ease;
}

main.blurred {
  filter: blur(5px);
  pointer-events: none;
  user-select: none;
  touch-action: none;
}

/* Modal Welcome */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 1rem 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 90%;
  text-align: center;
  user-select: none;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
}

.title:hover,
.title:focus {
  color: #007bff;
  outline: none;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* Sección ubicación */
.location-section {
  padding: 3rem 1rem;
  background-color: #f1f1f1;
  text-align: center;
  border-top: 1px solid #ddd;
}

.location-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.location-section p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #444;
}

.map-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  margin-top: 20px;
  padding: 20px 0;
  background-color: #fafafa;
  text-align: center;
  border-top: 1px solid #ddd;
}

.icon-link {
  margin: 0 15px;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon-link:hover {
  transform: scale(1.2);
}

.icon-link.tiktok:hover svg path {
  fill: #ff0050;
}
</style>
