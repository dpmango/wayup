<template lang="pug">
  v-navigation-drawer(permanent='')
    v-list.pt-0
      v-expansion-panel(focusable='')
        v-expansion-panel-content.grey.lighten-3(v-for='(item,i) in items' :key='i')
          div(slot='header')
            v-icon.mr-4 {{item.icon}}
            | {{item.title}}
          v-expansion-panel
            v-expansion-panel-content.grey.lighten-2(v-for='(sitem,j) in item.smenu1' :key='j')
              div(slot='header')
                v-icon.mr-4 {{sitem.icon}}
                | {{sitem.title}}
              v-expansion-panel
                v-expansion-panel-content.grey.lighten-1(v-for='(ssitem,k) in sitem.smenu2' :key='k' expand-icon='')
                  div(slot='header')
                    v-icon.mr-4 {{ssitem.icon}}
                    | {{ssitem.title}}

</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      items: [
        {
          title: "Dagdienst",
          icon: "wb_sunny",
          smenu1: [
            {
              title: "Schijndel - De poolster",
              icon: "wb_sunny",
              smenu2: [
                {title: "Schijndel - De Poolster", icon: "question_answer"},
                {title: "Grandchild 2", icon: "question_answer"}
              ]
            },
            {title: "Ottersum - Het Raadhuis", icon: "question_answer"}
          ]
        },
        {
          title: "Avonddienst",
          icon: "brightness_2",
          smenu1: [
            {
              title: "Child 1",
              icon: "question_answer",
              smenu2: [
                {title: "Grandchild 1", icon: "question_answer"},
                {title: "Grandchild 2", icon: "question_answer"}
              ]
            },
            {title: "Child 2", icon: "question_answer"}
          ]
        },
        {
          title: "Nachtdienst",
          icon: "airline_seat_flat",
          smenu1: [
            {
              title: "Child 1",
              icon: "question_answer",
              smenu2: [
                {title: "Grandchild 1", icon: "question_answer"},
                {title: "Grandchild 2", icon: "question_answer"}
              ]
            },
            {title: "Child 2", icon: "question_answer"}
          ]
        },
      ],
      right: null
    };
  }
};
</script>

<style lang="scss">
.expansion-panel * {
  background-color: #fff;
  box-shadow: 0 0px 0px 0px rgba(0, 0, 0, .0), 0 0px 0px 0 rgba(0, 0, 0, .14), 0 0px 0px 0 rgba(0, 0, 0, .0);
  border: 0px solid !important;
}

.navigation-drawer {
  height: 100%;
  margin-top: 0px;
  margin-left: 50%;
  transform: translateX(-50%) !important;
  width: 700px !important;
}
</style>
