// 狀態數據
export const state = () => ({
  lang: 'en',
  tasks: [
    { id: 1, content: '吃早飯', done: false },
    { id: 2, content: '吃中飯', done: true }
  ]
})

// 變更動作
export const mutations = {
  // 設置語言
  SET_LANG(state, payload) {
    state.lang = payload
  },
  // 增加任務
  ADD_TASK(state, payload) {
    state.tasks = [...state.tasks, { id: new Date().getTime(), content: payload, done: false }]
  },
  // 移除任務
  REMOVE_TASK(state, payload) {
    state.tasks = state.tasks.filter(data => data.id !== payload.id)
  },
  // 是否完成任務
  TOGGLE_TASK(state, payload) {
    payload.done = !payload.done
  }
}

// 嚴格模式
export const strict = false

// import Vuex from 'vuex'
// import { state } from './state.js'
// import { mutations } from './mutations.js'

// // 創建儲存
// const createStore = () => {
//   return new Vuex.Store({
//     state,
//     mutations,
//   })
// }
// export default createStore