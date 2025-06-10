<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <h1 class="title">Notes Page</h1>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="link">Home</router-link>
        </li>
        <li>
          <router-link to="/notes" class="link">Notes</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: grey;
  text-align:  center;
  padding: 30px;

  .title {
    margin: 0;
    
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    margin:0;
    list-style: none;


    .link {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
