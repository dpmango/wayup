<template lang="pug">
  .widget.widget-friends
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Друзья
    .widget-content
      .avatar-friend__block
        v-avatar.avatar-friend(
          size='64'
          v-for='(item,i) in 7' :key='i'
        )
          img(src="@/assets/images/avatar.png")
        a(href='#')
          svg.ml-3(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            g(clip-path='url(#clip0)')
              rect(width='40' height='40' rx='20' fill='#F1F3F9')
              path(d='M20 15.3334V24.6667M15.3333 20H24.6667' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            defs
              clippath#clip0
                rect(width='40' height='40' rx='20' fill='white')


</template>

<script>
export default {
  name: "WidgetFriends"
}
</script>

<style scoped lang="scss">
.avatar-friend {
  @include width-flex(64px)
  height: 64px;
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.avatar-friend__block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>