<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();

const handleSubmit = ()=> {
    noteStore.addNote(title.value);
    title.value = "";
}

const title = ref("");
</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="note-title"
      placeholder="Nueva Nota"
      v-model="title"
    />
    <button class="create-btn">+</button>
  </form>
</template>

<style>
.note-form {
  width: 400px;
  background-color: lightgrey;
  display: flex;
  justify-content: space-around;

  .note-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
  }

  .create-btn {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    background-color: white;
    display: flex;
    align-items: center;
  }

  .create-btn:hover {
    background-color: lightseagreen;
  }

  .create-btn:active {
    background-color: lightseagreen;
  }
}

.note-form:hover {
  border: 3px solid black;
  box-shadow: 0 0 10px;
}
</style>
