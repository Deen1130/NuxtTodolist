<template>
  <div>
    <Header />
    <div>
      <keep-alive>
        <transition name="bounceIn" mode="out-in">
          <!-- 路由視圖 -->
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
