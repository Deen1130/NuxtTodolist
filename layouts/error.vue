<template>
  <div>
    <h1>對不起，出錯啦！</h1>
    <!-- {{ error }} -->
  </div>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'error_layout' // 不指定錯誤頁面佈局的話，則會使用 default.vue 默認佈局
}
</script>