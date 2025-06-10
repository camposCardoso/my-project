<script setup>
import { onMounted } from "vue";
import CreateNote from "../components/CreateNote.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNotes();
})
</script>

<template>
  <HeaderComponent />

  <section id="notes-page">
    <h2 class="page-title">Notes</h2>

    <h2 v-if="noteStore.loading">Cargando..</h2>
    <h2 v-else-if="noteStore.error">Algo salió mal</h2>
    <ul v-else class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h2>No hay nada que mostrar. Crea tu primera nota!</h2>
      </li>
    </ul>
  </section>
</template>

<style>
#notes-page {
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 60px 20px;
  color: white;
  font-family: "Arial", sans-serif;

  .title {
    margin-bottom: 50px;
    text-align: center;
  }

  .page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
}


  .note-list {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px; 

    .empty-msg {
      text-align: center;
      font-size: 1rem;
    }
  }
}
</style>
