<template lang="pug">
  .select-music__wrap
    v-menu(
      offset-y=''
      content-class='menu-music'
      attach='.select-music__wrap'
    )
      template(v-slot:activator='{ attrs, on }')
        .select-music(v-bind='attrs' v-on='on')
          svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M6 4L12 8L6 12V4Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          .select-music--text Моя музыка
          svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M12 6L8 10L4 6' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      v-list
        v-list-item-group(v-model='selectedItem')
          .menu-music__title Подключить
          v-list-item(href="#")
            img.icon-16(
              src="@/assets/images/svg/Icon-spotify.svg"
            )
            .menu-music__text Spotify
          v-list-item(href="#")
            img.icon-16(
              src="@/assets/images/svg/icon-yandex_music.svg"
            )
            .menu-music__text Yandex music
          v-list-item(href="#")
            img.icon-16(
              src="@/assets/images/svg/Icon-apple-music.svg"
            )
            .menu-music__text Apple music
          v-list-item(href="#")
            img.icon-16(
              src="@/assets/images/svg/Icon-vk-music.svg"
            )
            .menu-music__text Vk music
          v-list-item(href="#")
            img.icon-16(
              src="@/assets/images/svg/icon-deezer.svg"
            )
            .menu-music__text Deezer
        a(href='#').menu-music__bottom
          img.icon-16(
            src="@/assets/images/svg/icon-upload.svg"
          )
          .menu-music__text Загрузить треки



</template>

<script>
export default {
  name: "MusicPlayer",
	data: () => ({
		selectedItem: [],
	}),
}
</script>

<style scoped lang="scss">

.select-music{
  display: flex;
  align-items: center;
  margin-right: 60px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  &:active,
  &:focus,
  &:hover {
    background: #C0C2C7;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4);
    border-radius: 8px;
  }
}

.select-music[aria-expanded="true"]{
  background: #C0C2C7;
  box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4);
  border-radius: 8px;
}

.select-music--text{
  font-family: $FiraSansMedium;
  color:$blue;
  margin-left: 8px;
  margin-right: 8px;
}

.menu-music{
  width: 271px;
  margin-top: 5px;

}
.v-menu__content{
  padding-top: 10px;
  .v-list-item{
    padding: 12px 16px;
    min-height: 0;
  }

}

.menu-music__title{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  padding: 6px 16px;
}
.menu-music__text{
  margin-left: 10px;
}
.menu-music__bottom{
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 6px;
  padding: 12px 16px;

}

.v-list-item--active{
  display: flex;
  align-items: center;
  &:before{
    background: transparent;
  }
  &:after{
    content: '';
    background-image:url('~@/assets/images/check-green-1.png');
    position: static;
    margin-left: auto;

  }
}

</style>