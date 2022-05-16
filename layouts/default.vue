<template>
  <div>
    <Header />
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
