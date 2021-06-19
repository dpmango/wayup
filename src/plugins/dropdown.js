import DropdownMenu from 'v-dropdown-menu'

const plugin = Vue => {
  Vue.use(DropdownMenu, {
    direction: 'right',
    overlay: false,
    overlayBgColor: 'transparent'
  })
}

export default plugin

