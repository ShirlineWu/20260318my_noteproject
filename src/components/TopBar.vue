<script setup>
import {ref} from 'vue'
import {useNoteStore} from '../stores/note_store.js'
import {useRouter} from 'vue-router'

const router = useRouter()
const noteStore = useNoteStore()
const keyword = ref('')
async function searchNotes(){
  const results = await noteStore.searchNotes(keyword.value);
    router.push({ name: 'search'});
  }


</script>



<template>
  <div>
    <nav class="navbar navbar-expand-lg color">
      <div class="container-fluid d-flex">
        <router-link class="navbar-brand" to="/"><img class="logo" src="../../public/Logo_new.png" alt=""> My Note</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex ms-auto" @submit.prevent="searchNotes">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.color{
  background-color: #f7ff85;
}
.logo{
  width: 50px;
}

</style>