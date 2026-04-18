<script setup>
import TopBar from './components/TopBar.vue';
import NoteList from './components/NoteList.vue';

</script>

<template>
  <TopBar></TopBar>
  <div class="container-fluid d-flex flex-column justify-content-around">
    <div class="row">
      <div class="col-3">
        <!-- NoteList -->
        <NoteList></NoteList>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <footer>
    <p >Copyright</p>
  </footer>
</template>

<style scoped>
footer{
  width: 100%;
  height: 50px;
  text-align: center;
  background-color:#f7ff85;
  text-align: center;
  position: relative;
  top:0px
}
footer p{
  color: rgb(26, 26, 26);
  line-height: 50px;
}

</style>
