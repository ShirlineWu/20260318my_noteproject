<script setup>
import { useNoteStore} from '../stores/note_store'
import { storeToRefs } from 'pinia'

const noteStore = useNoteStore()
const { searchResult } = storeToRefs(noteStore)

</script>
<template>
  <h2 v-if="searchResult.length === 0">查無資料</h2>
  <div v-else>
    <h2>搜尋結果:</h2>
    <main id="result" class="container mt-4">
        <div class="row d-flex justify-content-start">
            <div class="col-4 mr-2 mb-4" v-for="(item, i) in searchResult">            
                <div class="card">
                    <i v-if="item.isPinned" class="fa-solid fa-thumbtack me-3 mb-3 mt-3 rotate" @click="noteStore.markedPinned(item.id)"></i>
                    <i v-else class="fa-solid fa-thumbtack me-3 mb-3 mt-3" @click="noteStore.markedPinned(item.id)"></i>
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <hr>
                        <p class="card-text">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
  
</template>

<style scoped>
.rotate{
  transform: rotate(45deg);
  color: red;
}
h2{
    margin: 16px;
}
</style>