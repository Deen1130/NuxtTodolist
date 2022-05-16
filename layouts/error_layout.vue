<template>
  <div>
    <header>
      <h1>錯誤頁面</h1>
    </header>
    <div>
      <keep-alive>
        <transition name="bounceIn" mode="out-in">
          <Nuxt />
        </transition>
      </keep-alive>
    </div>    
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>