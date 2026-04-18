// 建立一組pinia的notes的狀態管理
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () =>({
    // 這邊定義所有變數與資料
    searchResult: [],
    notes:[
      {id:1, title:'慶功宴訂位', content:'統計參加慶功宴的團員與工作人員人數，預訂餐廳並確認菜單。', isPinned: false},
      {id:2, title:'曲目確認', content:'確認上半場與下半場的演出曲目，包含安可曲目與獨奏片段。', isPinned: true},
      {id:3, title:'場地租借', content:'聯繫文化中心確認演出檔期，並於本週五前繳交場地保證金。', isPinned: true},
      {id:4, title:'團練時間表', content:'排定每週二、四晚上的固定團練，以及演出前兩週的密集排練時程。', isPinned: false},
      {id:5, title:'服裝規定', content:'全體團員演出當天需著全黑正式服裝，男士需打領結，女士穿著長裙。', isPinned: false},
      {id:6, title:'樂譜整理', content:'檢查各分部樂譜是否有缺漏，並請首席統一弓法與呼吸記號。', isPinned: false},
      {id:7, title:'宣傳文案', content:'撰寫社群媒體用的宣傳文案，設計倒數計時圖卡，並安排發文排程。', isPinned: false},
      {id:8, title:'票務處理', content:'設定售票系統連結，統計親友票與公關票需求，製作座位表。', isPinned: false},
      {id:9, title:'設備清單', content:'確認當天所需的譜架、椅子數量，以及是否需要額外租借定音鼓與低音大提琴。', isPinned: false},
      {id:10, title:'錄影錄音', content:'尋找專業團隊進行演出當天的全程錄影與錄音紀錄，並詢問報價。', isPinned: true},
    ]
  }),
  getters: { //預設取得資料的函式集
    showPinned(){
      return this.notes.filter( note => note.isPinned)
    },
    showUnpinned(){
      return this.notes.filter( note => !note.isPinned)
    }
  },
  actions: {
   addNote(item){
    console.log(item)
    // 沒有輸入title回傳
    if(!item.newtitle) return
    const last_id = this.notes.length +1
    this.notes.push({
      id: last_id,
      title: item.newtitle,
      content: item.newcontent,
      isPinned: false
    })
    return true
   },
   editNote(id, new_title, new_content ){
      const note = this.notes.find(note => note.id === id)
      if(!note) return false
      note.title = new_title
      note.content = new_content
      return true
   },
   deleteNotes(id){
    const index = this.notes.findIndex(note => note.id === id)
    if(index !== -1){
      this.notes.splice(index,1)
      this.searchResult = this.searchResult.filter(note => note.id !== id)
      return true
    }
    return false
   },
   markedPinned(id){
    const note = this.notes.find(note => note.id === id)
    note.isPinned = !note.isPinned
   },
   searchNotes(keyword){
      this.searchResult = this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword))
      console.log(this.searchResult)
      return this.searchResult
   }
  }
})
