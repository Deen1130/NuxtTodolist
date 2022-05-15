<template>
  <div>
    <div :class="`loading ${$store.state.isLoading && 'active'}`">
      <img src="images/AjaxLoader.gif" />
    </div>
    <header>
      <div class="box">
        <div class="icon">
          <svg>
            <use xlink:href="icons/bars.svg#path"></use>
          </svg>
        </div>
        <nuxt-link class="title"
                   to="/"
                   active-class="my-active">
          {{ $t('title') }}
        </nuxt-link>
        <LangSwitcher />
        <div class="icon">
          <svg>
            <use xlink:href="icons/signOut.svg#path"></use>
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@mixin flexVCenter {
  display: flex;
  align-items: center;
}
header {
  margin-bottom: 55px;
  > .box {
    color: var(--color1);
    fill: var(--color1);
    width: 100%;
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--color2);
    line-height: 1.36;
    @include flexVCenter;
    > .title {
      color: var(--color1);
      text-decoration: none;
      flex-grow: 1;
      margin-left: 12px;
      font-size: 36px;
    }
    > .lang {
      margin-right: 12px;
    }
    > .icon {
      flex-basis: 55px;
      height: 55px;
      @include flexVCenter;
      justify-content: center;
      > svg {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>