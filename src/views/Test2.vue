<template lang="pug">
  .row
    .col-9
      .row
        .col-12
          CardIndications
          h3 Draggable 1
          draggable.list-group(:list='list3' group='people' @change='log')
            .list-group-item(v-for='(element, index) in list3' :key='element.name')
              | {{ element.name }} {{ index }}
          v-expansion-panels.drag-inner-list
            draggable.list-group(:list='list1' group='people' @change='log')
              //.drag-item(
              //  v-for='(element, index) in list1'
              //  :key='element.name'
              //)
              v-expansion-panel(
                v-for='(element, index) in list1'
                :key='element.name'
                )
                v-expansion-panel-header
                  | {{ element.name}} {{ index }}
                v-expansion-panel-content
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


    .col-3
      h3 Draggable 2
      draggable.list-group(:list='list2' group='people' @change='log')
        .list-group-item(v-for='(element, index) in list2' :key='element.name')
          | {{ element.name }} {{ index }}


    //rawdisplayer.col-3(:value='list1' title='List 1')
    //rawdisplayer.col-3(:value='list2' title='List 2')
    //rawdisplayer.col-3(:value='list3' title='List 2')

</template>
<script>
import draggable from 'vuedraggable'
import CardIndications from "@/components/CardIndications";
export default {
  name: "Test2",
  display: "Two Lists",
  order: 1,
  components: {
    CardIndications,
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      list3: [
        { name: "Juan +++", id: 5 },
        { name: "Edgard +++", id: 6 },
        { name: "Johnson +++", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

