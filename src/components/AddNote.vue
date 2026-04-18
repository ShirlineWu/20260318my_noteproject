<script setup>
import {useNoteStore} from '../stores/note_store.js'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

const title = ref('')
const content = ref('')

const showAlert = ref(false)

const invalidShow1 = ref(false)
const invalidShow2 = ref(false)

const noteStore = useNoteStore()
function clearPlaceholder() {
  document.querySelector('#title').placeholder=''
  invalidShow1.value = false
}
function addPlaceholder() {
  document.querySelector('#title').placeholder='請輸入標題...'
  if(title.value === '')
    invalidShow1.value = true
}

function checkContent(){
  if(content.value.trim() === ''){
    invalidShow2.value = true
  }else{invalidShow2.value = false
  } 
}

function createNote() {
  // 1. 同時執行兩項檢查，確保警告文字能顯示
  if (title.value.trim() === '') {
    invalidShow1.value = true
  }
  if (content.value.trim() === '') {
    invalidShow2.value = true
  }

  // 2. 如果標題或內容其中一個沒填，就 return 不執行新增
  if (title.value.trim() === '' || content.value.trim() === '') {
    return
  }

  // 3. 執行新增
  const res = noteStore.addNote({
    newtitle: title.value,
    newcontent: content.value
  })

  if (res) {
    title.value = ''
    content.value = ''
    showAlert.value = true
    
    // 兩秒後跳轉回首頁
    setTimeout(function () {
      showAlert.value = false
      router.push('/')
    }, 2000)
  }
}


</script>
<template>
<div class="container p-5">
  <div v-show="showAlert" class="alert alert-success text-left" role="alert">
    新增成功!
  </div>
  <h2 class="mb-5">新增筆記</h2>
  <form @submit.prevent="createNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder" @blur="addPlaceholder" v-model="title">
        <p v-show="invalidShow1" class="invalid text-danger">請輸入標題</p>
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" @blur="checkContent" v-model="content"></textarea>
         <p v-show="invalidShow2" class="invalid text-danger">請輸入內容</p>
    </div>
    <button class="btn btn-outline-success">送出<i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>

<style scoped>
  
</style>