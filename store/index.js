import axios from 'axios'
const api = 'https://kittenflutter-56047.firebaseio.com/todolist'

export const state = () => ({
  lang: 'en',
  tasks: [],
  isLoading: false
})

export const mutations = {
  SET_LANG(state, payload) {
    state.lang = payload
  },
  GET_TASK(state, payload) {
    state.tasks = payload
  },
  ADD_TASK(state, payload) {
    state.tasks = [...state.tasks, payload]
  },
  UPDATE_TASK(state, payload) {
    state.tasks = state.tasks.map(data => data.name === payload.name ? { ...payload } : data)
  },
  REMOVE_TASK(state, payload) {
    state.tasks = state.tasks.filter(data => data.name !== payload.name)
  }
}

export const actions = {
  async ADD_TASK({ state, commit }, payload) {
    state.isLoading = true
    const data = {
      id: new Date().getTime(),
      content: payload,
      done: false,
      name: ''
    }
    const response = await axios.post(`${api}/tasks.json`, data)
    console.log('發送', response.data.name)
    const responseUpdate = await axios.put(`${api}/tasks/${response.data.name}.json`, { ...data, name: response.data.name })
    console.log('更新 name 欄位', responseUpdate.data)
    commit('ADD_TASK', responseUpdate.data)
    state.isLoading = false
  },
  async UPDATE_TASK({ state, commit }, payload) {
    const response = await axios.put(`${api}/tasks/${payload.name}.json`, { ...payload, done: payload.done = !payload.done })
    console.log('更新', response.data)
    commit('UPDATE_TASK', response.data)
  },
  async REMOVE_TASK({ state, commit }, payload) {
    state.isLoading = true
    const response = await axios.delete(`${api}/tasks/${payload.name}.json`)
    console.log('刪除', response.data)
    commit('REMOVE_TASK', payload)
    state.isLoading = false
  },
}

export const strict = false