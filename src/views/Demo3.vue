<template lang="pug">
div
  v-snackbar.snackbar-settings(
    v-model='snackbarSettings'
  )
    | Настройка рабочего стола
    template(v-slot:action='{ attrs }')
      v-btn(color='pink' text='' v-bind='attrs' @click='snackbarSettings = false')
        | Close

  v-snackbar(
    v-model='snackbar'
    :timeout='timeout'
    top=true
    right=true
    color='#F8F9FB'
  )
    .snackbar-text {{ text }}
    template(v-slot:action='{ attrs }')
      .snackbar-right
        v-progress-circular(:rotate='-90' :size='30' :width='1.5' :value='value' color='#326BFF')
          | {{ value / 10 }}
        .snackbar-buttons
          .snackbar-button.mb-5 Перейти
          .snackbar-button(v-bind='attrs' @click='snackbar = false') Закрыть

  ScheduleHeader.mb-16(title='Личный кабинет')
    template(v-slot:header-block)
      //LevelBlock.ml-10

    template(v-slot:header-right)
      MusicPlayer
      .notificatiion-icon.mr-3(@click="snackbar = true")
        svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M15.3762 15.951C15.7354 13.6758 17.6966 12 20 12C22.3035 12 24.2646 13.6758 24.6239 15.951L25.3343 20.4506C25.4439 21.1448 25.6746 21.8143 26.016 22.4287L27.1746 24.5143C27.5449 25.1809 27.0629 26 26.3005 26H13.6995C12.937 26 12.455 25.1809 12.8253 24.5143L13.9841 22.4287C14.3254 21.8143 14.5561 21.1448 14.6657 20.4506L15.3762 15.951ZM24.7047 23.1572L25.4507 24.5H14.5493L15.2953 23.1572C15.7219 22.3892 16.0103 21.5523 16.1474 20.6846L16.8578 16.185C17.102 14.6388 18.4347 13.5 20 13.5C21.5653 13.5 22.8981 14.6388 23.1422 16.185L23.8527 20.6846C23.9897 21.5523 24.2781 22.3892 24.7047 23.1572Z' fill='#326BFF')
          path(d='M20 29C21.1046 29 22 28.1046 22 27H18C18 28.1046 18.8955 29 20 29Z' fill='#326BFF')


      v-menu(
        bottom=''
        left=''
        content-class='menu-settings'
        attach=''
      )
        template(v-slot:activator='{ on, attrs }')
          v-btn(dark='' icon='' v-bind='attrs' v-on='on')
            svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M14.75 13C14.75 12.5858 14.4142 12.25 14 12.25C13.5858 12.25 13.25 12.5858 13.25 13V14.0945C11.9561 14.4275 11 15.6021 11 17C11 18.3979 11.9561 19.5725 13.25 19.9055V27C13.25 27.4142 13.5858 27.75 14 27.75C14.4142 27.75 14.75 27.4142 14.75 27V19.9055C16.0439 19.5725 17 18.3979 17 17C17 15.6021 16.0439 14.4275 14.75 14.0945V13ZM15.5 17C15.5 17.8284 14.8284 18.5 14 18.5C13.1716 18.5 12.5 17.8284 12.5 17C12.5 16.1716 13.1716 15.5 14 15.5C14.8284 15.5 15.5 16.1716 15.5 17Z' fill='#326BFF')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13V20.0945C17.9561 20.4275 17 21.6021 17 23C17 24.3979 17.9561 25.5725 19.25 25.9055V27C19.25 27.4142 19.5858 27.75 20 27.75C20.4142 27.75 20.75 27.4142 20.75 27V25.9055C22.0439 25.5725 23 24.3979 23 23C23 21.6021 22.0439 20.4275 20.75 20.0945V13ZM21.5 23C21.5 23.8284 20.8284 24.5 20 24.5C19.1716 24.5 18.5 23.8284 18.5 23C18.5 22.1716 19.1716 21.5 20 21.5C20.8284 21.5 21.5 22.1716 21.5 23Z' fill='#326BFF')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M26.75 13C26.75 12.5858 26.4142 12.25 26 12.25C25.5858 12.25 25.25 12.5858 25.25 13V15.0945C23.9561 15.4275 23 16.6021 23 18C23 19.3979 23.9561 20.5725 25.25 20.9055V27C25.25 27.4142 25.5858 27.75 26 27.75C26.4142 27.75 26.75 27.4142 26.75 27V20.9055C28.0439 20.5725 29 19.3979 29 18C29 16.6021 28.0439 15.4275 26.75 15.0945V13ZM27.5 18C27.5 18.8284 26.8284 19.5 26 19.5C25.1716 19.5 24.5 18.8284 24.5 18C24.5 17.1716 25.1716 16.5 26 16.5C26.8284 16.5 27.5 17.1716 27.5 18Z' fill='#326BFF')
        v-list
          v-list-item(href='#')
            svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              mask#path-1-inside-1(fill='white')
                rect(x='1' width='6' height='7' rx='1')
              rect(x='1' width='6' height='7' rx='1' stroke='#326BFF' stroke-width='3' mask='url(#path-1-inside-1)')
              mask#path-2-inside-2(fill='white')
                rect(x='8' width='6' height='7' rx='1')
              rect(x='8' width='6' height='7' rx='1' stroke='#326BFF' stroke-width='3' mask='url(#path-2-inside-2)')
              mask#path-3-inside-3(fill='white')
                rect(x='7.94077' y='9.33191' width='6' height='6.82787' rx='1' transform='rotate(-15 7.94077 9.33191)')
              rect(x='7.94077' y='9.33191' width='6' height='6.82787' rx='1' transform='rotate(-15 7.94077 9.33191)' stroke='#326BFF' stroke-width='3' mask='url(#path-3-inside-3)')
              mask#path-4-inside-4(fill='white')
                rect(x='1' y='8' width='6' height='7' rx='1')
              rect(x='1' y='8' width='6' height='7' rx='1' stroke='#326BFF' stroke-width='3' mask='url(#path-4-inside-4)')
            v-list-item-title.ml-2 Добавить виджеты
          v-list-item(href='#' @click='snackbarSettings = true')
            svg(width='16' height='16' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM8.5 7C8.5 7.82843 7.82843 8.5 7 8.5C6.17157 8.5 5.5 7.82843 5.5 7C5.5 6.17157 6.17157 5.5 7 5.5C7.82843 5.5 8.5 6.17157 8.5 7Z' fill='#326BFF')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M10.5 1.05089C10.7676 1.04144 11.0383 1.13885 11.2426 1.34314L12.6568 2.75739C12.8611 2.96167 12.9586 3.23237 12.9491 3.5C12.9405 3.74395 12.8431 3.98535 12.6568 4.17157L11.8284 5H13C13.2634 5 13.5029 5.1018 13.6815 5.2682C13.8775 5.45075 14 5.71106 14 6V8C14 8.28893 13.8775 8.54924 13.6815 8.73179C13.5029 8.8982 13.2634 9 13 9H11.8284L12.6569 9.82843C12.8431 10.0146 12.9405 10.256 12.9491 10.5C12.9586 10.7676 12.8611 11.0383 12.6569 11.2426L11.2426 12.6569C11.0383 12.8611 10.7676 12.9586 10.5 12.9491C10.256 12.9405 10.0146 12.8431 9.82843 12.6569L9 11.8284V13C9 13.2634 8.89819 13.5029 8.73179 13.6815C8.54923 13.8775 8.28892 14 8 14H6C5.71108 14 5.45077 13.8775 5.26821 13.6815C5.10181 13.5029 5 13.2634 5 13V11.8284L4.17157 12.6569C3.98535 12.8431 3.74395 12.9405 3.5 12.9491C3.23236 12.9586 2.96165 12.8612 2.75735 12.6569L1.34314 11.2427C1.13884 11.0384 1.04141 10.7676 1.05087 10.5C1.05949 10.256 1.15691 10.0146 1.34314 9.82843L2.17157 9H1C0.73664 9 0.497056 8.8982 0.318459 8.73179C0.12253 8.54924 0 8.28893 0 8V6C0 5.71107 0.12253 5.45076 0.318459 5.26821C0.497056 5.1018 0.73664 5 1 5H2.17157L1.34314 4.17157C1.15691 3.98536 1.05949 3.74396 1.05087 3.5C1.04141 3.23236 1.13884 2.96164 1.34314 2.75732L2.75735 1.34314C2.96166 1.13885 3.23237 1.04143 3.5 1.05089C3.74395 1.05951 3.98534 1.15693 4.17157 1.34314L5 2.17157V1C5 0.736632 5.10181 0.497051 5.26821 0.318459C5.45077 0.122527 5.71108 0 6 0H8C8.28892 0 8.54923 0.122527 8.73179 0.318459C8.89819 0.497051 9 0.736632 9 1V2.17157L9.82843 1.34314C10.0146 1.15692 10.256 1.05951 10.5 1.05089ZM4.54718 3.84007C5.10044 3.40999 5.76965 3.12202 6.5 3.03095V1.5H7.5V3.03095C8.23035 3.12202 8.89956 3.40999 9.45282 3.84007L10.5355 2.75737L11.2426 3.46447L10.1599 4.54716C10.59 5.10043 10.878 5.76964 10.9691 6.5H12.5V7.5H10.9691C10.878 8.23035 10.59 8.89956 10.1599 9.45282L11.2426 10.5355L10.5355 11.2426L9.45282 10.1599C8.89956 10.59 8.23035 10.878 7.5 10.9691V12.5H6.5V10.9691C5.76965 10.878 5.10044 10.59 4.54718 10.1599L3.46446 11.2427L2.75734 10.5355L3.84007 9.45282C3.40999 8.89956 3.12202 8.23035 3.03095 7.5H1.5V6.5H3.03095C3.12202 5.76965 3.40999 5.10044 3.84007 4.54718L2.75734 3.46445L3.46446 2.75735L4.54718 3.84007Z' fill='#326BFF')
            v-list-item-title.ml-2 Настроить рабочий стол



  v-row
    v-col(
      md='2'
    )
      UserSidebar
    v-col(
      md='10'
    )
      v-tabs()
        v-tab

          | Общая
        v-tab
          | Тесты
        v-tab
          v-badge(color='pink' dot='')
            | Оценки
        v-tab
          | Статистика
        v-tab
          | Медицинский кабинет
        v-tab
          | Домашние задания
        v-tab
          | Обо мне



        v-tab-item(transition="fade-transition")
          muuri-grid.example-grid
            .item.d-flex.align-start
              WidgetHomework
              WidgetTeam
            //.item
            //  WidgetMapsGoal
            //.item
            //  WidgetTeam
            //.item
            //  WidgetAwards(
            //    @toggle='toggleListTest($event)'
            //  )
            //.item
            //  WidgetEvents
            //.item
            //  WidgetFormPlayer
            //.item
            //  WidgetFriends
            //.item
            //  WidgetHomework
            //.item
            //  WidgetFriends
            //.item
            //  WidgetHomework
            .item.item-big
              WidgetTeam





</template>

<script>

import { ItemLink, ItemSm, ItemMd, ItemLg} from 'vue-muuri'
import WidgetAwards from "@/components/widgets/WidgetAwards";
import WidgetEvents from "@/components/widgets/WidgetEvents";
import WidgetFormPlayer from "@/components/widgets/WidgetFormPlayer";
import WidgetFriends from "@/components/widgets/WidgetFriends";
import WidgetHomework from "@/components/widgets/WidgetHomework";
import WidgetMapsGoal from "@/components/widgets/WidgetMapsGoal";
import WidgetTeam from "@/components/widgets/WidgetTeam";
import UserSidebar from "@/components/UserSidebar";
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default {
  name: 'Demo3',
  components:{
    vueCustomScrollbar,
    UserSidebar,
    WidgetTeam,
    WidgetMapsGoal,
    WidgetHomework, WidgetFriends, WidgetFormPlayer, WidgetEvents, WidgetAwards, ItemLink,ItemSm,ItemMd,ItemLg
  },
  data: () => ({
    isShowList:false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),

  // methods: {
  //   toggleList: function () {
  //     this.isShowList = !this.isShowList;
  //     grid.refreshItems();
  //    console.log('test')
  //
  //   },
  // },
  methods: {
    toggleListTest: function () {
      // grid.refreshItems().layout();
      // console.log('test')

    },
  }

  //   updateOrder (items) {
  //     console.log(items)
  //   }
  // },

}
</script>

<style scoped lang="scss">
.example-grid{
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.item{
  background: transparent;
  height: auto !important;
  color: #000;
  width: 40%;
}
.item-big{
  width: 60%;
}

</style>