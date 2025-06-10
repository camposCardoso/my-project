<script setup>
defineProps({
  note: Object,
});
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="note.title" />
    <input type="checkbox" v-model="note.marked" />
  </article>
</template>

<style>
.note-card {
  width: 400px;
  background-color: white;
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;

  .card-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
  }
  [type="checkbox"] {
    transform: scale(1) translateX(-5px);
    
  }

  .note-card:hover {
    border: 3px solid;
    box-shadow: 0 0 10px;
  }
}
.note-card:has(input:checked) {
    border: 3px solid lightgrey;
    .card-title {
        font-weight: 100;
    }
}
</style>
