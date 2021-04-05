<template lang="pug">
  .drag-container(v-drag-and-drop:options='options')
    .div(:key="group.id")
      vue-draggable-group(
        v-model='group.items'
        :groups='groups'
        :data-id='group.id'
        @change='onGroupsChange'
      )
        v-row
          v-col(
            md="6"
          )
            v-expansion-panels.drag-inner-list(:data-id='group.id')
              .drag-item(
                v-for='item in group.items'
                :key='item.id'
                :data-id='item.id'
              )
                v-expansion-panel
                  v-expansion-panel-header
                    | {{ item.name }}
                  v-expansion-panel-content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


          v-col(
            md="6"
          )
            v-expansion-panels.drag-inner-list(:data-id='group.id')
              .drag-item(
                v-for='item in group.items'
                :key='item.id'
                :data-id='item.id'
              )
                v-expansion-panel
                  v-expansion-panel-header
                    | {{ item.name }}
                  v-expansion-panel-content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


      //ul.drag-list
      //  li.drag-column(
      //    v-for='group in groups'
      //    :key='group.id'
      //  )
          //span.drag-column-header
          //  h2 {{ group.name }}
          //  feather-icon(type='more-vertical')

            //ul.drag-inner-list(:data-id='group.id')
            //  li.drag-item(
            //    v-for='item in group.items'
            //    :key='item.id'
            //    :data-id='item.id')
            //    .drag-item-text {{ item.name }}
            //
            ////
            //ul.drag-inner-list(:data-id='group.id')
            //  li.drag-item(
            //    v-for='item in group.items'
            //    :key='item.id'
            //    :data-id='item.id'
            //  )
            //    | {{ item.name }}



          //vue-draggable-group(
          //  v-model='group.items'
          //  :groups='groups'
          //  :data-id='group.id'
          //  @change='onGroupsChange'
          //)
          //
          //  v-expansion-panels.drag-inner-list(:data-id='group.id')
          //    .drag-item(
          //      v-for='item in group.items'
          //      :key='item.id'
          //      :data-id='item.id'
          //    )
          //      v-expansion-panel
          //        v-expansion-panel-header
          //          | {{ item.name }}
          //        v-expansion-panel-content
          //          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "To Do",
          items: [
            {id: 1, name: "Item 1", groupId: 1},
            {id: 2, name: "Item 2", groupId: 1},
            {id: 3, name: "Item 3", groupId: 1}
          ]
        },
        {
          id: 2,
          name: "In Progress",
          items: [
            {id: 4, name: "Item 4", groupId: 2},
            {id: 5, name: "Item 5", groupId: 2},
            {id: 6, name: "Item 6", groupId: 2}
          ]
        },
        {
          id: 3,
          name: "Done",
          items: [
            {id: 7, name: "Item 7", groupId: 3},
            {id: 8, name: "Item 8", groupId: 3},
            {id: 9, name: "Item 9", groupId: 3},
            {id: 10, name: "Item 10", groupId: 3}
          ]
        }
      ],
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item"
      }
    };
  },
  methods: {
    onGroupsChange(e) {
      console.log({e});
    }
  }
};
</script>

<style lang="scss">
$ease-out: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
$to-do: #f4ce46;
$in-progress: #2a92bf;
$approved: #00b961;

* {
  box-sizing: border-box;
}

body {
  background: #33363d;
  color: white;
  font-family: "Roboto Mono", serif;
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.drag-container {
  max-width: 1000px;
  margin: 20px auto;
}

.drag-list {
  display: flex;
  align-items: flex-start;

  @media (max-width: 690px) {
    display: block;
  }
}

.drag-column {
  flex: 1;
  margin: 0 10px;
  position: relative;
  background: rgba(black, 0.2);
  overflow: hidden;

  @media (max-width: 690px) {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
  }

  &-to-do {
    .drag-column-header,
    .drag-options {
      background: $to-do;
    }
  }

  &-in-progress {
    .drag-column-header,
    .drag-options {
      background: $in-progress;
    }
  }

  &-approved {
    .drag-column-header,
    .drag-options {
      background: $approved;
    }
  }
}

.drag-column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  user-select: none;
}

.drag-inner-list {
  //height: 85vh;
  //overflow: auto;
  min-height: 50px;
  flex-direction: column;
}

//
.drag-item {
  //flex: 1 0 100%;
  width: 100%;
  //margin-bottom: 10px;
  //  margin: 10px;
  //  //height: 100px;
  //  background: rgba(black, 0.4);
  //  transition: $ease-out;
  //
  //  /* items grabbed state */
  //  &[aria-grabbed="true"] {
  //    background: #5cc1a6;
  //    color: #fff;
  //  }
  //
  //  .drag-item-text {
  //    font-size: 1rem;
  //    padding-left: 1rem;
  //    padding-top: 1rem;
  //  }
}

.drag-header-more {
  cursor: pointer;
}

@keyframes nodeInserted {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.8;
  }
}

.item-dropzone-area {
  height: 6rem;
  background: #888;
  opacity: 0.8;
  animation-duration: 0.5s;
  animation-name: nodeInserted;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
</style>
