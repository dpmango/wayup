<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(
        md='12'
      )
        .h1.mb-10.mt-16 Общая информация
        v-row
          v-col(md="12")
            GeneralProgress
            WidgetCalendar
          v-col(md="12")
            WidgetTrainerGroup(:groups="groups" :sportsmans="profile.sportsmans")


</template>

<script>
import WidgetTrainerGroup from '@/components/widgets/WidgetTrainerGroup'
import WidgetCalendar from '@/components/widgets/WidgetCalendar'
import HeaderTrainerAccount from '@/components/elements/HeaderTrainerAccount'
import GeneralProgress from '@/components/personal/GeneralProgress'
import {API_URL_GRAF} from "@/config/api";
import axios from "axios";

export default {
  name: 'Information',
  components: { GeneralProgress, HeaderTrainerAccount, WidgetTrainerGroup, WidgetCalendar },
  data: () => ({
    groups: [],
  }),
  props: ['profile'],
  mounted() {
    var self = this;
    axios.get(API_URL_GRAF + '/groups/', {
      headers: {
        'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function (response) {
      self.groups = response.data;
    });
  }
}
</script>

<style scoped lang="scss"></style>
