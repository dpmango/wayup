<template lang="pug">
  VueDatePicker(
    v-bind="$attrs"
    v-model="date"
    ref="menu"
    :min-date="minDate"
    @onOpen="menu = true"
    @onClose="menu = false"
    :placeholder="placeholder"
    format-header="dddd, DD MMMM"
    format="DD-MM-YYYY"
    :visibleYearsNumber="2"
  )
    template(#input-icon='')
      svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M12.6667 2.66797H3.33333C2.59695 2.66797 2 3.26492 2 4.0013V13.3346C2 14.071 2.59695 14.668 3.33333 14.668H12.6667C13.403 14.668 14 14.071 14 13.3346V4.0013C14 3.26492 13.403 2.66797 12.6667 2.66797Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        path(d='M10.6667 1.33203V3.9987' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        path(d='M5.33325 1.33203V3.9987' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        path(d='M2 6.66797H14' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')


</template>

<script>

  import moment from 'moment'
export default {
  name: "DataPicker",
  props: {
    placeholder: {
      type: String,
      default: 'дд мес гггг'
    },
    value: {
      type: String,
      default: null
    },
  },

  data: () => ({
    menu: false,
    minDate: moment().format('YYYY') + '01-01',
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.menu.$refs.agenda.mode = 'year'));
    },
  },
  methods:{
    save(date) {
      this.$refs.menu.save(date)
    },
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }

}
</script>

<style scoped lang="scss">
.vd-wrapper {
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  background: #FFFFFF;
  width: 146px;
  height: 40px;
  ::v-deep{
    .vd-picker__input{
      flex-direction: row-reverse;
    }
    input{
      padding-left: 15px;
    }
  }
}






</style>