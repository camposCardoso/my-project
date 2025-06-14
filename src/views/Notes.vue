<script setup>
import { onMounted } from "vue";
import CreateNote from "../components/CreateNote.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNotes();
});
</script>

<template>
  <HeaderComponent />

  <section id="notes-page">
    <h2 class="page-title">Notes</h2>

    <h2 v-if="noteStore.loading">Loading..</h2>
    <h2 v-else-if="noteStore.error">Something went wrong</h2>
    <ul v-else class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id" class="note-item">
  <div class="note-content">
    <h3>{{ note.title }}</h3>
  </div>
  <button class="delete-btn" @click="noteStore.deleteNote(note.id)">
    🗑️ Borrar
  </button>
</li>

      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h2>There's nothing to show. Create your first note!</h2>
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
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .note-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 20px;
}

.note-content {
  flex: 1;
  color: white;
  word-wrap: break-word;
}

.delete-btn {
  background-color: #e74c3c;
  border: none;
  color: white;
  padding: 8px 14px;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c0392b;
}


    .empty-msg {
      text-align: center;
      font-size: 1rem;
    }
  }
}
</style>
