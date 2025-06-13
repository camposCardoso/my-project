<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function goToAbout() {
  if (route.path !== "/") {
    router.push("/").then(() => {
      
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    });
  } else {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<template>
  <header class="header">
    <h1 class="title">Manorìe</h1>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/" class="link">Home</router-link></li>
        <li><router-link to="/notes" class="link">Notes</router-link></li>
        <li><a href="#about" class="link">About us</a></li>
        <li><a href="#location" class="link">Our location</a></li>
         <li><a href="#contact" class="link">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: grey;
  text-align: center;
  padding: 30px;

  .title {
    margin: 0;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    margin: 9;
    list-style: none;

    .link {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
