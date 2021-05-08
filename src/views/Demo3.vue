<template lang="pug">
  .card-scene
    container(orientation='horizontal'
      @drop='onColumnDrop($event)'
      drag-handle-selector='.column-drag-handle'
      @drag-start='dragStart'
      :drop-placeholder='upperDropPlaceholderOptions'
      )
      draggable(v-for='column in scene.children' :key='column.id')
        div(:class='column.props.className')
          .card-column-header
            span.column-drag-handle ☰
            |             {{ column.name }}
          container(
            group-name='col'
            @drop='(e) => onCardDrop(column.id, e)'
            @drag-start="(e) => log('drag start', e)"
            @drag-end="(e) => log('drag end', e)"
            :get-child-payload='getCardPayload(column.id)'
            drag-class='card-ghost' drop-class='card-ghost-drop'
            :drop-placeholder='dropPlaceholderOptions'
            )
            draggable(v-for='field in form' :key='field.type')
              .field
                h2.field(v-if="field.type === 'header'")
                  | Form Header
                .field-group(v-if="field.type === 'fullname'")
                  input(type='text')
                  input(type='text')
                .field(v-if="field.type === 'email'")
                  input(type='email')
                .field(v-if="field.type === 'address'")
                  |Text
                .field(v-if="field.type === 'dropdown'")
                  select
                    option(value='1') Option 1
                    option(value='2' selected='') Option 2
                    option(value='3') Option 3
                    option(value='4') Option 4
                .field(v-if="field.type === 'checkbox'")
                  div
                    label
                      input(type='checkbox' name='r')
                      |  option 1
                  div
                    label
                      input(type='checkbox' name='r')
                      |  option 2
                  div
                    label
                      input(type='checkbox' name='r')
                      |  option 3
                  div
                    label
                      input(type='checkbox' name='r')
                      |  option 4
                  div
                    label
                      input(type='checkbox' name='r')
                      |  option 5
                .field(v-if="field.type === 'radio'")
                  div
                    label
                      input(type='radio' name='r')
                      |  option 1
                  div
                    label
                      input(type='radio' name='r')
                      |  option 2
                  div
                    label
                      input(type='radio' name='r')
                      |  option 3
                  div
                    label
                      input(type='radio' name='r')
                      |  option 4
                  div
                    label
                      input(type='radio' name='r')
                      |  option 5
                .field(v-if="field.type === 'submit'")
                  button.form-submit-button Submit




</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod']
const cardColors = [
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'burlywood',
  'cornsilk',
  'gainsboro',
  'ghostwhite',
  'ivory',
  'khaki'
]

const formInitial = [
  {type: 'header'},
  {type: 'fullname', label: 'Full Name'},
  {type: 'email', label: 'E Mail'},
  {type: 'address', label: 'Address'},
  {type: 'dropdown', label: 'Options'},
  {type: 'checkbox', label: 'Checkbox Options'},
  {type: 'radio', label: 'Radio Options'},
  {type: 'submit'}
]

const pickColor = () => {
  const rand = Math.floor(Math.random() * 10)
  return cardColors[rand]
}

const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

const applyDrag = (arr, dragResult) => {
  const {removedIndex, addedIndex, payload} = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  const result = [...arr];
  let itemToAdd = payload;
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};
const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(4, i => ({
    id: `column${i}`,
    type: 'container',
    name: columnNames[i],
    props: {
      orientation: 'vertical',
      className: 'card-container'
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
      type: 'draggable',
      id: `${i}${j}`,
      props: {
        className: 'card',
        style: {backgroundColor: pickColor()}
      },
      data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
    }))
  }))
}
export default {
  name: 'Demo3',
  components: {Container, Draggable},
  data() {
    return {
      scene,
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      form: [...formInitial],

    }
  },
  methods: {
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
    onCardDrop (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    getCardPayload(columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    dragStart() {
      console.log('drag started')
    },
    log(...params) {
      console.log(...params)
    }
  }
}
</script>