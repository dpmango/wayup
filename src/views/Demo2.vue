<template lang="pug">
.form-demo
  .form
    container(
      @drop='onDrop($event)'
      non-drag-area-selector='.field'
      drag-class='form-ghost'
      drop-class='form-ghost-drop'
      :class='{isActive: true}'
      )
      v-row
        v-col(
          md='4'
        )
          draggable(v-for='field in form' :key='field.type')
            .form-line
              .label
                span {{field.label}}
              .field
                h2.field(v-if="field.type === 'header'")
                  | Form Header
                .field-group(v-if="field.type === 'fullname'")
                  input(type='text')
                  input(type='text')
                .field(v-if="field.type === 'email'")
                  input(type='email')
                .field(v-if="field.type === 'address'")
                  textarea
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
        v-col(
          md='4'
        )
          draggable(v-for='field in form' :key='field.type')
            .form-line
              .label
                span {{field.label}}
              .field
                h2.field(v-if="field.type === 'header'")
                  | Form Header
                .field-group(v-if="field.type === 'fullname'")
                  input(type='text')
                  input(type='text')
                .field(v-if="field.type === 'email'")
                  input(type='email')
                .field(v-if="field.type === 'address'")
                  textarea
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

// const generateItems = (count, creator) => {
//   const result = []
//   for (let i = 0; i < count; i++) {
//     result.push(creator(i))
//   }
//   return result
// }

const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
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

import { Container, Draggable } from 'vue-smooth-dnd'
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
export default {
  name: 'Form',
  components: {Container, Draggable},
  data () {
    return {
      form: [...formInitial]
    }
  },
  methods: {
    onDrop (dropResult) {
      this.form = applyDrag(this.form, dropResult)
    }
  }
}
</script>
