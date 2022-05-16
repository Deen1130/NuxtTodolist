<template>
  <div class="lang">
    <select v-model="$store.state.lang"
            @change="setLang($store.state.lang)">
      <option v-for="data in optionLang"
              :value="data.value"
              :key="data.id">
        {{ data.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionLang: [
        { text: 'English', value: 'en', id: 1 },
        { text: '中文', value: 'zh', id: 2 }
      ]
    }
  },
  methods: {
    setLang(value) {
      this.$store.commit('SET_LANG', value)
      this.$i18n.locale = value
    }
  }
}
</script>