<template>
  <div>    
    <main>
      <div class="task-box">
        <div class="title">{{ $t('text1') }}</div>
        <div class="tasks">
          <!-- 使用 儲存狀態數據 -->
          <div class="box"
               v-if="$store.state.tasks.length === 0">暫且無任務</div>
          <Task v-for="(data, index) in $store.state.tasks"
                :key="index"
                :task="data" />
        </div>
        <div class="add">
          <input type="text"
                 v-model="newTaskStr"
                 :placeholder="$t('tip')"
                 @keypress.enter="addTask" />
          <div class="icon"
               @click="addTask">
            <svg>
              <use xlink:href="/icons/add.svg#path"></use>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

// firebase 即時資料庫 API
const api = 'https://kittenflutter-56047.firebaseio.com/todolist/tasks.json'

export default {
  data() {
    return {
      newTaskStr: ''
    }
  },
  async asyncData({ store }) {
    // axios 請求
    try {
      const data = await axios.get(api).then(response => {
        return response.data
      })
      // firebase 即時資料庫 API，須抽取對象value值放置數組
      console.log('axios', Object.values(data))
      store.commit('GET_TASK', Object.values(data))
    } catch (error) {
      console.log(error)
    }
    // fetch 請求
    // try {
    //   const data = await fetch(api).then(response => {
    //     if (response.ok) {
    //       return response.json()
    //     }
    //     throw new Error('請求失敗')
    //   })
    //   console.log('fetch', Object.values(data))
    //   store.commit('GET_TASK', Object.values(data))
    // } catch (error) {
    //   console.log(error)
    // }
  },
  mounted: () => {
    // console.log('已監聽')
  },
  methods: {
    // 增加任務
    addTask() {
      if (this.newTaskStr) {
        // this.$store.commit('ADD_TASK', this.newTaskStr)
        this.$store.dispatch('ADD_TASK', this.newTaskStr)
        this.newTaskStr = ''
      }
    }
  }
}
</script>

<style lang="scss">
@mixin flexVCenter {
  display: flex;
  align-items: center;
}
main {
  width: 100%;
  padding: 16px;
  display: flex;
  > .task-box {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: var(--color1);
    min-height: 418px;
    border-radius: 4px;
    border: 1px solid var(--color3);
    display: flex;
    flex-direction: column;
    > .title {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      padding: 36px 30px 16px 30px;
    }
    > .tasks {
      flex-grow: 1;
      flex-shrink: 1;
      > .box {
        padding: 32px 52px;
        @include flexVCenter;
        > .content {
          flex-grow: 1;
          margin-left: 32px;
          &.active {
            color: var(--color2);
          }
        }
        > .icon {
          flex-basis: 22px;
          height: 22px;
          cursor: pointer;
          @include flexVCenter;
          justify-content: center;
          > svg {
            fill: var(--color3);
            width: 22px;
            height: 22px;
          }
        }
        > .icon.del {
          flex-basis: 24px;
          height: 28px;
          > svg {
            fill: var(--color4);
            width: 24px;
            height: 28px;
          }
        }
        > .icon.active {
          > svg {
            fill: var(--color2);
          }
        }
      }
    }
    > .add {
      @include flexVCenter;
      padding: 16px 16px 10px 16px;
      > input {
        @include flexVCenter;
        appearance: none;
        border: 1px solid var(--color3);
        outline: none;
        padding: 0 14px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        height: 34px;
        border-radius: 4px;
        flex-grow: 1;
        flex-shrink: 1;
        &::placeholder {
          color: var(--color6);
        }
      }
      > .icon {
        margin-left: 25px;
        flex-basis: 35px;
        height: 35px;
        cursor: pointer;
        @include flexVCenter;
        justify-content: center;
        > svg {
          fill: var(--color2);
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}
</style>
