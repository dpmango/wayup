<template lang="pug">
  aside.sidebar
    img.img-logo(
      alt="inbox"
      src="@/assets/images/logo.svg"
    )
    ul.sidebar__list
      li.sidebar__item
        router-link.sidebar-link(to='/' active-class='sidebar-link-active' exact)
          v-badge.sidebar-badge(
            color="#798CBD"
            content="16"
          )
            svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M18.3334 10H13.3334L11.6667 12.5H8.33342L6.66675 10H1.66675' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              path(d='M4.54175 4.2585L1.66675 10.0002V15.0002C1.66675 15.4422 1.84234 15.8661 2.1549 16.1787C2.46746 16.4912 2.89139 16.6668 3.33341 16.6668H16.6667C17.1088 16.6668 17.5327 16.4912 17.8453 16.1787C18.1578 15.8661 18.3334 15.4422 18.3334 15.0002V10.0002L15.4584 4.2585C15.3204 3.98082 15.1077 3.74714 14.8442 3.58373C14.5807 3.42032 14.2768 3.33366 13.9667 3.3335H6.03341C5.72334 3.33366 5.41947 3.42032 5.15595 3.58373C4.89244 3.74714 4.67973 3.98082 4.54175 4.2585V4.2585Z'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      li.sidebar__item
        router-link.sidebar-link(to='/training' active-class='sidebar-link-active' )
          svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            circle(cx='10' cy='16' r='2')
            circle(cx='7' cy='10' r='2')
            circle(cx='13' cy='10' r='2')
            circle(cx='10' cy='5' r='2')
            circle(cx='16' cy='5' r='2')
            circle(cx='4' cy='5' r='2')
      li.sidebar__item
        router-link.sidebar-link(to='/schedule-year' active-class='sidebar-link-active')
          svg.sidebar-link-icon.sidebar-link-icon_rect(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M9.16675 3.3335H3.33341C2.89139 3.3335 2.46746 3.50909 2.1549 3.82165C1.84234 4.13421 1.66675 4.55814 1.66675 5.00016V16.6668C1.66675 17.1089 1.84234 17.5328 2.1549 17.8453C2.46746 18.1579 2.89139 18.3335 3.33341 18.3335H15.0001C15.4421 18.3335 15.866 18.1579 16.1786 17.8453C16.4912 17.5328 16.6667 17.1089 16.6667 16.6668V10.8335'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M15.4167 2.0832C15.7483 1.75168 16.1979 1.56543 16.6667 1.56543C17.1356 1.56543 17.5852 1.75168 17.9167 2.0832C18.2483 2.41472 18.4345 2.86436 18.4345 3.3332C18.4345 3.80204 18.2483 4.25168 17.9167 4.5832L10.0001 12.4999L6.66675 13.3332L7.50008 9.99986L15.4167 2.0832Z'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      li.sidebar__item
        router-link.sidebar-link(to='/test' active-class='sidebar-link-active')
          svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M13.3333 1.6665V4.99984' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M6.66675 1.6665V4.99984' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M2.5 8.3335H17.5'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')

      li.sidebar__item
        router-link.sidebar-link(to='/test' active-class='sidebar-link-active')
          svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            g(clip-path='url(#clip0)')
              path(d='M14.1667 17.5V15.8333C14.1667 14.9493 13.8375 14.1014 13.2515 13.4763C12.6654 12.8512 11.8705 12.5 11.0417 12.5H4.79175C3.96295 12.5 3.16809 12.8512 2.58204 13.4763C1.99599 14.1014 1.66675 14.9493 1.66675 15.8333V17.5'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              path(d='M19.1667 17.5001V15.8334C19.1662 15.0948 18.9204 14.3774 18.4679 13.7937C18.0154 13.2099 17.3819 12.793 16.6667 12.6084' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              path(d='M13.3333 2.6084C14.0503 2.79198 14.6858 3.20898 15.1396 3.79366C15.5935 4.37833 15.8398 5.09742 15.8398 5.83757C15.8398 6.57771 15.5935 7.2968 15.1396 7.88147C14.6858 8.46615 14.0503 8.88315 13.3333 9.06673'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              path(d='M8.33333 9.16667C10.1743 9.16667 11.6667 7.67428 11.6667 5.83333C11.6667 3.99238 10.1743 2.5 8.33333 2.5C6.49238 2.5 5 3.99238 5 5.83333C5 7.67428 6.49238 9.16667 8.33333 9.16667Z'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            defs
              clippath#clip0
                rect(width='20' height='20' fill='white')


      li.sidebar__item
        router-link.sidebar-link(to='/test' active-class='sidebar-link-active')
          svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M8.33325 6.6665L13.3333 9.99984L8.33325 13.3332V6.6665Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')


      li.sidebar__item
        router-link.sidebar-link(to='/test' active-class='sidebar-link-active')
          svg.sidebar-link-icon(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')


</template>

<script>
export default {
  name: "TheSidebar",
}
</script>

<style lang="scss" scoped>

//@import "src/scss/app";


.sidebar {
  width: rem(120px);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
}

.img-logo {
  width: 54px;
  height: 60px;
  margin: 15px auto 55px;


}

.sidebar-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background: #326BFF;

    .sidebar-link-icon {
      stroke: #ffffff;
    }

    .sidebar-link-icon_rect {
      rect {
        fill: #ffffff;
      }
    }
  }

  :focus {
    background: #326BFF;
    transition: opacity .2s cubic-bezier(.4, 0, .6, 1);
  }

}

.sidebar-link-active {
  background: #326BFF;

  .sidebar-link-icon {
    stroke: #ffffff;
  }

}

.sidebar-link-icon {
  stroke: #888888;
  width: 20px;
  min-width: 20px;
}

.sidebar-link-icon_rect {
  rect {
    fill: #888888;
  }
}

.sidebar__item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}


</style>