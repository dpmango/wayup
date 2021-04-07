<template lang="pug">
  v-expansion-panels
    v-expansion-panel(v-for='(item,i) in 5' :key='i')
      dots-menu
      v-expansion-panel-header.accordion-panel__header Item
      v-expansion-panel-content
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        v-expansion-panels
          v-expansion-panel(v-for='(item,i) in 5' :key='i')
            dots-menu
            v-expansion-panel-header.accordion-panel__header Item
            v-expansion-panel-content
              | Lorem ipsum dolor sit amet
              v-expansion-panels
                v-expansion-panel(v-for='(item,i) in 5' :key='i')
                  dots-menu
                  v-expansion-panel-header.accordion-panel__header Item
                  v-expansion-panel-content
                    | Lorem ipsum dolor sit amet


</template>
<script>
import DotsMenu from "@/components/DotsMenu";
export default {
  components: {DotsMenu},
  data: () => ({
    mini: true,
    items: [
      { header: 'Core documentation' },
      {
        title: 'Getting started',
        group: '/page1',
        icon: 'list',
        items: [
          {
            group: '/page1',
            title: 'Vuetify',
            items: [
              { href: '/page1', title: 'Quick Start' }
            ]
          },
          { href: '/getting-started/starter-templates', title: 'Starter Templates' },
          { href: '/getting-started/why-vuetify', title: 'Why Vuetify?' },
          { href: '/getting-started/frequently-asked-questions', title: 'Frequently asked questions' },
          { href: '/getting-started/sponsors-and-backers', title: 'Sponsors and backers' },
          { href: '/getting-started/contributing', title: 'Contributing' },
          { href: '/getting-started/roadmap', title: 'Roadmap' }
        ]
      },
      {
        title: 'Application layout',
        group: '/page2',
        icon: 'list',
        items: [
          { href: '/page2', title: 'Pre-defined' },
          { href: '/layout/grid', title: 'Grid & breakpoints' },
          { href: '/layout/spacing', title: 'Spacing' },
          { href: '/layout/alignment', title: 'Alignment' },
          { href: '/layout/display', title: 'Display' },
          { href: '/layout/elevation', title: 'Elevation' },
          { href: '/layout/sandbox', title: 'Sandbox' }
        ]
      },
      {
        title: 'Styles & themes',
        group: '/style',
        icon: 'list',
        items: [
          { href: '/style/colors', title: 'Colors' },
          { href: '/style/theme', title: 'Theme' },
          { href: '/style/typography', title: 'Typography' },
          { href: '/style/content', title: 'Content' }
        ]
      },
      {
        title: 'Motion & transitions',
        group: 'motion',
        icon: 'list',
        items: [
          { href: '/motion/transitions', title: 'Transitions' }
        ]
      },
      {
        title: 'UI components',
        group: '/components',
        icon: 'list',
        items: [
          { href: '/components/alerts', title: 'Alerts' },
          { href: '/components/avatars', title: 'Avatars' },
          { href: '/components/badges', title: 'Badges' },
          { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
          { href: '/components/bottom-navigation', title: 'Bottom navigation' },
          { href: '/components/bottom-sheets', title: 'Bottom sheets' },
          { href: '/components/buttons', title: 'Buttons' },
          { href: '/components/floating-action-buttons', title: 'Buttons: Floating Action Buttons' },
          { href: '/components/cards', title: 'Cards' },
          { href: '/components/carousels', title: 'Carousels' },
          { href: '/components/chips', title: 'Chips' },
          { href: '/components/data-tables', title: 'Data tables' },
          { href: '/components/dialogs', title: 'Dialogs' },
          { href: '/components/dividers', title: 'Dividers' },
          { href: '/components/expansion-panels', title: 'Expansion panels' },
          { href: '/components/footer', title: 'Footer' },
          { href: '/components/forms', title: 'Forms' },
          { href: '/components/grid-lists', title: 'Grid lists' },
          { href: '/components/icons', title: 'Icons' },
          { href: '/components/lists', title: 'Lists' },
          { href: '/components/menus', title: 'Menus' },
          { href: '/components/navigation-drawers', title: 'Navigation drawers' },
          { href: '/components/pagination', title: 'Pagination' },
          { href: '/components/parallax', title: 'Parallax' },
          { href: '/components/pickers', title: 'Pickers' },
          { href: '/components/progress', title: 'Progress' },
          { href: '/components/selects', title: 'Selects' },
          { href: '/components/selection-controls', title: 'Selection controls' },
          { href: '/components/sliders', title: 'Sliders' },
          { href: '/components/snackbars', title: 'Snackbars' },
          { href: '/components/steppers', title: 'Steppers' },
          { href: '/components/subheaders', title: 'Subheaders' },
          { href: '/components/tabs', title: 'Tabs' },
          { href: '/components/text-fields', title: 'Text fields' },
          { href: '/components/toolbars', title: 'Toolbars' },
          { href: '/components/tooltips', title: 'Tooltips' }
        ]
      },
      {
        title: 'Directives',
        group: 'directives',
        icon: 'list',
        items: [
          { href: '/directives/resizing', title: 'Resizing' },
          { href: '/directives/ripples', title: 'Ripples' },
          { href: '/directives/scrolling', title: 'Scrolling' },
          { href: '/directives/touch-support', title: 'Touch support' }
        ]
      },
      { href: '/pre-made-themes', title: 'Pre-made themes', icon: 'list' },
      { href: 'https://vuetify.threadless.com/', title: 'Shop', target: '_blank', icon: 'list' },
      { divider: true },
      { header: 'Additional resources' },
      {
        title: 'Community',
        group: 'community',
        icon: 'list',
        items: [
          { href: 'https://chat.vuetifyjs.com/', title: 'Chat and support', target: '_blank' },
          { href: 'https://github.com/vuetifyjs/vuetify/issues', title: 'Issue board', target: '_blank' },
          { href: 'https://stackoverflow.com/search?q=vuetify', title: 'Stack overflow', target: '_blank' },
        ]
      },
      {
        title: 'Guides',
        group: 'guides',
        icon: 'list',
        items: [
          { href: '/guides/server-side-rendering', title: 'Server side rendering' }
        ]
      }
    ]
  })
}
</script>