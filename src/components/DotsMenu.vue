<template lang="pug">
  .dropdown-menu__wrap(  @click.stop='onClick()')
    dropdown-menu
      button(slot='trigger').dots-menu-buttton
        svg(width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M11.9999 12.6668C12.3681 12.6668 12.6665 12.3684 12.6665 12.0002C12.6665 11.632 12.3681 11.3335 11.9999 11.3335C11.6317 11.3335 11.3332 11.632 11.3332 12.0002C11.3332 12.3684 11.6317 12.6668 11.9999 12.6668Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          path(d='M16.6665 12.6668C17.0347 12.6668 17.3332 12.3684 17.3332 12.0002C17.3332 11.632 17.0347 11.3335 16.6665 11.3335C16.2983 11.3335 15.9998 11.632 15.9998 12.0002C15.9998 12.3684 16.2983 12.6668 16.6665 12.6668Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          path(d='M7.33317 12.6668C7.70136 12.6668 7.99984 12.3684 7.99984 12.0002C7.99984 11.632 7.70136 11.3335 7.33317 11.3335C6.96498 11.3335 6.6665 11.632 6.6665 12.0002C6.6665 12.3684 6.96498 12.6668 7.33317 12.6668Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')


      ul(slot='body').dots-menu__list
        li.dots-menu__item
          a(href='#').dots-menu__link
            svg.dots-menu-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              g(clip-path='url(#clip0)')
                path(d='M0.666626 8.00002C0.666626 8.00002 3.33329 2.66669 7.99996 2.66669C12.6666 2.66669 15.3333 8.00002 15.3333 8.00002C15.3333 8.00002 12.6666 13.3334 7.99996 13.3334C3.33329 13.3334 0.666626 8.00002 0.666626 8.00002Z' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                path(d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'  stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
              defs
                clippath#clip0
                  rect(width='16' height='16' fill='white')
            | Открыть
        li.dots-menu__item
          a(href='#').dots-menu__link
            svg.dots-menu-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z'  stroke-opacity='0.8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            | Изменить
        li.dots-menu__item
          a(href='#').dots-menu__link
            svg.dots-menu-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M12.6667 4.00016V13.3335C12.6667 13.6871 12.5262 14.0263 12.2762 14.2763C12.0261 14.5264 11.687 14.6668 11.3334 14.6668H4.66671C4.31309 14.6668 3.97395 14.5264 3.7239 14.2763C3.47385 14.0263 3.33337 13.6871 3.33337 13.3335V4.00016M12.6667 4.00016H3.33337M12.6667 4.00016H14M3.33337 4.00016H2M5.33337 4.00016V2.66683C5.33337 2.31321 5.47385 1.97407 5.7239 1.72402C5.97395 1.47397 6.31309 1.3335 6.66671 1.3335H9.33337C9.687 1.3335 10.0261 1.47397 10.2762 1.72402C10.5262 1.97407 10.6667 2.31321 10.6667 2.66683V4.00016'  stroke-opacity='0.8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            | Удалить

</template>

<script>
export default {
  name: "dotsMenu",
  methods: {
    onClick() {
      /*this will toggle only by icon click. at the same time, will prevent toggle
      by clicking on header. */


      const curr = this.panel
      this.panel = curr === undefined ? 0 : undefined
    }
  },

}
</script>

<style lang="scss">


.dropdown-menu__wrap {
  position: absolute;
  right: 63px;
  top: 10px;
  z-index: 100;
}


.dots-menu-buttton {
  //position: absolute;
  //left: 0;
  //top: 0;
}

.v-dropdown-menu__overlay {
  display: none !important;
}

.v-dropdown-menu__container {
  min-width: 156px !important;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(50, 107, 255, 0.06);
  border-radius: 4px;
  background: #FFFFFF !important;
  z-index: 100000 !important;

}

.v-dropdown-menu--direction-left .v-dropdown-menu__container {
  right: 23px !important;
  left: auto !important;
  top: calc(100% - 5px) !important;
}

.v-dropdown-menu__body {
  padding-top: 12px;
  padding-bottom: 12px;

  ul {
    padding: 0 !important;
  }
}

.dots-menu-icon {
  stroke: #000000;
  margin-right: 8px;
  margin-top: -4px;

}

.dots-menu__item {

}

.dots-menu__link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #000;

  &:hover {
    background: #F1F3F9;
    color: #326BFF;

    .dots-menu-icon {
      stroke: #326BFF;
    }
  }
}


</style>