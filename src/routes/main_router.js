import { createRouter, createWebHistory } from 'vue-router';
// 匯入你的頁面元件
import NoteGrid from '../components/NoteGrid.vue'
import EditNote from '../components/EditNote.vue'
import AddNote from '../components/AddNote.vue'
import SearchNote from '../components/SearchNote.vue'




const routes = [
  // 基本路由
  {
    path: '/',
    name: 'home',
    component: NoteGrid,
    meta: { title: '我的筆記應用' }
  },
  {
    path: '/edit_note/:id',
    name: 'edit_note',
    component: EditNote,
    meta: { title: '編輯-我的筆記應用' }
  },
   {
    path: '/add_note',
    name: 'add_note',
    component: AddNote,
    meta: { title: '新增-我的筆記應用' }
  },
  {
    path: '/search',
    name: 'search',
    props:true,
    component: SearchNote,
    meta: { title: '搜尋-我的筆記應用' }
  },
  // 會員管理路由
];

const router = createRouter({
  // 使用 HTML5 History 模式（網址較美觀，不含 #）
  history: createWebHistory(),
  routes,
  // 切換頁面時自動捲動到頂部
  scrollBehavior() {
    return { top: 0 };
  }
});



export default router;