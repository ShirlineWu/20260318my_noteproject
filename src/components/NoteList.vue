<script setup>
import { useNoteStore} from '../stores/note_store.js'
import {storeToRefs} from 'pinia'

const noteStore = useNoteStore()
const {showPinned , showUnpinned} = storeToRefs(noteStore)

const {markedPinned , deleteNotes} =noteStore

</script>
<template>
  <div class="sidebar">
    <div class="container">
    <router-link to="/add_note">
      <button class="mt-3 btn btn-warning">新增筆記</button>
    </router-link>
      
      <h5 class="mt-4">筆記列表</h5>
      <h6 class="mt-4">重要</h6>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between" v-for="(item , i) in showPinned">
          <i class="fa-solid fa-thumbtack me-3 rotate" @click="markedPinned(item.id)"></i>
          <span>{{item.title}}</span>
          <div class="icon-group">
            <router-link :to="{name:'edit_note', params:{id:item.id}}"><i class="fa-solid fa-pen-to-square me-3"></i></router-link>
            <i class="fa-solid fa-trash" @click="deleteNotes(item.id)"></i>
          </div>
        </li>
      </ul>

      <h6 class="mt-4">一般</h6>
      <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between" v-for="(item , i) in showUnpinned">
          <i class="fa-solid fa-thumbtack me-3 " @click="markedPinned(item.id)"></i>
          <span>{{item.title}}</span>
          <div class="icon-group">
            <router-link :to="{name:'edit_note', params:{id:item.id}}"><i class="fa-solid fa-pen-to-square me-3"></i></router-link>
            <i class="fa-solid fa-trash" @click="deleteNotes(item.id)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
i{
  cursor: pointer;
}
.icon-group{
  display: flex;
  width: 50px;
  justify-content: space-between;
  align-items: center;
}
.icon-group i{
  cursor: pointer;
}
.icon-group i:hover{
  color:chocolate;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>