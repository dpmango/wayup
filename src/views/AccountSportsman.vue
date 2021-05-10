<template lang="pug">
  div
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
        LevelBlock.ml-10
      template(v-slot:header-right)
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
            v-list-item(href='#')
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
            v-row
              v-col(
                md="4"
              )
                //.widget
                //  .widget-header
                //    .widget-header__top
                //      img.drag-icon.mt-n1.mr-5(
                //        src="@/assets/images/svg/more-icon.svg"
                //      )
                //      .widget-header__title Выполнение ДЗ
                //      dots-menu.mt-0.position-static.ml-auto
                //  .widget-content.widget-content_gray
                //    vue-custom-scrollbar(
                //      :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                //      style='max-height: 50px;'
                //      @ps-scroll-y="scrollHanle"
                //      wheelPropagation="false"
                //      :swicher="!isShowList ? true : false"
                //    )
                //      .hm-progress__wrap
                //        HmProgress(
                //          title='Теория'
                //          quantity='62%'
                //          position-left='left:85%'
                //        )
                //        HmProgress(
                //          title='Рефлексия'
                //          quantity='71%'
                //          position-left='left:85%'
                //        )
                //        HmProgress(
                //          title='❗️ОФП'
                //          quantity='62%'
                //          position-left='left:85%'
                //        )
                //      .widget__items
                //        .widget__item
                //
                //
                //  .widget-footer
                //    .widget-footer__text(
                //      @click='toggleList'
                //    )
                //      |Перейти к домашним заданиям


                .widget
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Выполнение ДЗ
                      dots-menu.mt-0.position-static.ml-auto
                  .widget-content.widget-content_gray
                    vue-custom-scrollbar.scroll-area(
                      style='max-height: 206px;'
                      @ps-scroll-y="scrollHanle"
                      :settings="settings"

                    )
                      .hm-progress__wrap
                        HmProgress(
                          title='Теория'
                          quantity='62%'
                          position-left='left:85%'
                        )
                        HmProgress(
                          title='Рефлексия'
                          quantity='71%'
                          position-left='left:85%'
                        )
                        HmProgress(
                          title='❗️ОФП'
                          quantity='62%'
                          position-left='left:85%'
                        )
                      .widget__items
                        .widget__item.mb-1(
                          v-for='(item,i) in 5' :key='i'
                        )
                          .hm-item-title Отжимания 4 по 30
                          .hm-item-right.ml-auto.d-flex.align-center
                            base-badge(
                              label="2 дня назад"
                              background="rgba(236, 72, 101, 0.2)"
                              textColor="#A12238"
                            )
                            dots-menu.mt-0.ml-2.position-static
                  .widget-footer
                    a(href='#').widget-footer__text
                      |Перейти к домашним заданиям


                .widget
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Предстоящие события
                      dots-menu.mt-0.position-static.ml-auto
                  .widget-content.widget-content_gray
                    vue-custom-scrollbar.scroll-area(
                      style='max-height: 206px;'
                      @ps-scroll-y="scrollHanle"

                      :settings="settings"
                    )
                      .widget__items
                        .widget__item.mb-1(
                          v-for='(item,i) in 5' :key='i'
                        )
                          .event-item.pr-6
                            .event-item__left
                              .event-item__date 14 мар 2021
                            .event-item__right
                              .event-item__title Лёд, Одинцово
                              .event-item__desc Собираемся размяться, забронировали лёд. Берите снарягу, горячий чай и друзей.
                              .avatars-block-top
                                .avatars-block
                                  a.avatar-group-link(
                                    href='#'
                                    v-for='(item,i) in 5' :key='i'
                                  )
                                    v-avatar.avatar-group(
                                      size='24'
                                    )
                                      img(src="@/assets/images/avatar.png")
                                .avatars-block-quant.ml-1 +19
                                a(href='#').avatars-block-text.ml-1 все участники



                  .widget-footer
                    a(href='#').widget-footer__text
                      |Открыть календарь
                .widget.widget-form
                  img.drag-icon(
                    src="@/assets/images/svg/more-icon.svg"
                  )
                  .form-player__right
                    img.form-player__img.mb-6(
                      src="@/assets/images/form-img.jpeg"
                    )
                    base-button(
                      classAttr='button-default button-gray button-small'
                      label="Обновить форму"
                    )
                  .form-player__left
                    .form-player__desc-block
                      .title-small Фамилия для свитера
                      .form-player__name Bryzgalov
                    .form-player__desc-block
                      .title-small Номер
                      .form-player__num 89
                    .form-player__desc-block.d-flex
                      .form-player__desc-block_part.mr-4
                        .title-small Позиция на льду
                        .text-middle Вратарь
                        .form-player__desc-status Goaltender
                      .form-player__desc-block_part
                        .title-small Хват
                        .text-middle Л
                    .form-player__desc-block
                      .title-small Клуб
                      .text-middle Boston Hockey Academy (USA)
                .widget.widget-freinds
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Друзья
                  .widget-content
                    .avatar-freind__block
                      v-avatar.avatar-freind(
                        size='64'
                        v-for='(item,i) in 7' :key='i'
                      )
                        img(src="@/assets/images/avatar.png")
                      a(href='#')
                        svg.ml-3(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                          g(clip-path='url(#clip0)')
                            rect(width='40' height='40' rx='20' fill='#F1F3F9')
                            path(d='M20 15.3334V24.6667M15.3333 20H24.6667' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                          defs
                            clippath#clip0
                              rect(width='40' height='40' rx='20' fill='white')
              v-col(
                md="4"
              )
                .widget.widget-award
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Мои награды
                  .widget-content
                    vue-custom-scrollbar(
                      :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                      style='max-height: 206px;'
                      @ps-scroll-y="scrollHanle"
                      :settings='settings'
                      :swicher="!isShowList ? true : false"
                    )
                      .award-item
                        .award-item__img 🏆
                        .award-item__desc
                          .award-item-text Первенство области на приз губернатора
                          .award-item-date сезон 2019-2020
                      .award-item
                        .award-item__img 🥇
                        .award-item__desc
                          .award-item-text Первенство области на приз губернатора
                          .award-item-date сезон 2019-2020
                      .award-item
                        .award-item__img 🥇
                        .award-item__desc
                          .award-item-text Первенство области на приз губернатора
                          .award-item-date сезон 2019-2020
                      .award-item
                        .award-item__img 🥇
                        .award-item__desc
                          .award-item-text Первенство области на приз губернатора
                          .award-item-date сезон 2019-2020





                  .widget-footer
                    .widget-footer__text(
                      @click='toggleList'
                    )
                      |Все награды



                .widget
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Статистика сезона 2020-2021
                      dots-menu.mt-0.position-static.ml-auto
                    .widget-header__bottom
                      .statistic-season__head
                        .statistic-td.first Сезон
                        .statistic-td И
                        .statistic-td Г
                        .statistic-td П
                        .statistic-td О
                  .widget-content.widget-content_gray
                    vue-custom-scrollbar(
                      :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                      style='max-height: 84px;'
                      @ps-scroll-y="scrollHanle"
                      :settings='settings'
                      :swicher="!isShowList ? true : false"
                    )
                      .statistic-season__body
                        .widget__item.mb-1(
                          v-for='(item,i) in 7' :key='i'
                        )
                          .statistic-td.first 2020-2021
                          .statistic-td 4
                          .statistic-td 3
                          .statistic-td 2
                          .statistic-td 5
                        .widget__item.mb-1
                          .statistic-td.first.total Всего
                          .statistic-td 4
                          .statistic-td 3
                          .statistic-td 2
                          .statistic-td 5
                  .widget-footer
                    .widget-footer__text(
                      @click='toggleList'
                    )
                      |Показать всю статистику


                .widget
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Карта бросков и голов
                      v-item-group.d-flex.ml-auto(mandatory)
                        each val in ['Все', 'Голы', 'Броски']
                          v-item(
                            v-slot='{ active, toggle }'
                          )
                            base-segment(
                              classAttr='segment-default segment-small'
                              label=val
                              tag="div"
                              @click='toggle'
                            )
                  .widget-content
                    .maps-goal__wrap
                      img.maps-goal(
                        src="@/assets/images/maps-goal.svg"
                      )
                      .point-goal(style="left: 250px; top:50px")
                      .point-goal.red(style="left: 150px; top:190px")
                      .point-goal(style="left: 150px; top:150px")
                      .point-goal(style="left: 250px; top:150px")
                      .point-goal(style="left: 150px; top:250px")
                    .widget-bottom.d-flex
                      .goal-statistic.goal-complete Отбитых <span>19</span>
                      .goal-statistic.goal-fail Пропущенных <span>2</span>


                .widget.widget-team
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title Команда
                      v-item-group.d-flex.ml-4(mandatory)
                        each val in ['Вратари', 'Защитники', 'Нападающие']
                          v-item(
                            v-slot='{ active, toggle }'
                          )
                            base-segment(
                              classAttr='segment-default segment-small'
                              label=val
                              tag="div"
                              @click='toggle'
                            )
                      dots-menu.mt-0.position-static.ml-auto
                    .widget-header__bottom
                      .statistic-season__head
                        .statistic-td.first Игрок
                        .statistic-td
                        .statistic-td GP↑
                        .statistic-td GAA
                        .statistic-td SV%
                        .statistic-td

                  .widget-content.widget-content_gray
                    vue-custom-scrollbar(
                      style='max-height: 208px;'
                      @ps-scroll-y="scrollHanle"
                      :settings='settings'
                    )
                      .statistic-season__body
                        .widget__item.mb-1(
                          v-for='(item,i) in 7' :key='i'
                        )
                          .statistic-td.first.d-flex.align-center
                            v-avatar.avatar-player(
                              size='32'
                            )
                              img(src="@/assets/images/avatar.png")
                            .team-player__name Даниил Брызгалов

                          .statistic-td
                            base-badge(
                              label="#89"
                              background="#F1F3F9"
                              textColor="#000000"
                            )
                          .statistic-td 30
                          .statistic-td 2.43
                          .statistic-td -
                          .statistic-td.text-right
                            dots-menu.dots-black.mt-0.position-static
                .widget.widget-learn
                  .widget-header
                    .widget-header__top
                      img.drag-icon.mr-3(
                        src="@/assets/images/svg/more-icon.svg"
                      )
                      .widget-header__title.mr-2 Учёба
                      .widget-header__text средний балл  <span class='ml-1'>3,5</span>
                      .nav-slider.ml-auto
                        svg.nav-arrow(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                          path(d='M9 4L5 8L9 12' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                        .nav-slider__text 2 семестр
                        svg.nav-arrow(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                          path(d='M7 4L11 8L7 12' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                      dots-menu.mt-0.position-static.ml-5
                  .widget-content.widget-content_gray
                    vue-custom-scrollbar(
                      :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                      style='max-height: 266px;'
                      @ps-scroll-y="scrollHanle"
                      :settings='settings'
                      :swicher="!isShowList ? true : false"
                    )

                      .widget__item.mb-1(
                        v-for='(item,i) in 7' :key='i'
                      )
                        .text-small Основы специальной педагогики и психологии
                        .widget__item-right.d-flex.align-center.ml-auto
                          .discipline-num 4,2
                            <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
                          .progress-quant__block.green-result
                            svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
                              path(d='M4 0L8 5H0L4 0Z' )
                            .progress-quant 15
                          dots-menu.dots-black.mt-0.position-static.d-flex.align-center.ml-2
                    .widget-footer
                      .widget-footer__text(
                        @click='toggleList'
                      )
                        |Развернуть список






























    //
    //              .test-1(:content='content' :step='step' v-if="content.Type=='Question'")
    //                .widget-header
    //                  .drag-button
    //                    img.drag-icon.mt-n1.mr-5(
    //                      src="@/assets/images/svg/more-icon.svg"
    //                    )
    //                  | lorem 2
    //              .test-1(:content='content' :step='step' v-if="content.Type=='Question'")
    //                .widget-header
    //                  .drag-button
    //                    img.drag-icon.mt-n1.mr-5(
    //                      src="@/assets/images/svg/more-icon.svg"
    //                    )
    //                  | lorem 3
    //              .test-1(:content='content' :step='step' v-if="content.Type=='Question'")
    //                .widget-header
    //                  .drag-button
    //                    img.drag-icon.mt-n1.mr-5(
    //                      src="@/assets/images/svg/more-icon.svg"
    //                    )
    //                  | lorem 4
    //            draggable(:list='step.Content')
    //              .paragraph(:content='content' :key='content.Id')
    //
    //
    ////  draggable.widgets-wrapper(
    //          //    :list='widgetsListOne'
    //          //    group='widgets'
    //          //  )
    //          //    transition-group(type="transition" name="flip-list")
    //          //      .wrap(
    //          //        v-for='(element, index) in widgetsListOne'
    //          //        :key='element.id'
    //          //      )
    //          //        .widget
    //          //          .widget-header
    //          //            .drag-button
    //          //              img.drag-icon.mt-n1.mr-5(
    //          //                src="@/assets/images/svg/more-icon.svg"
    //          //              )
    //          //
    //          //v-col(
    //          //  md="6"
    //          //)
    //          //  draggable.widgets-wrapper(
    //          //    :list='widgetsListTwo'
    //          //    group='widgets'
    //          //  )
    //          //    transition-group(type="transition" name="flip-list")
    //          //      .wrap(
    //          //        v-for='(element, index) in widgetsListTwo'
    //          //        :key='element.id'
    //          //      )
    //          //        .widget
    //          //          .widget-header
    //          //            .drag-button
    //          //              img.drag-icon.mt-n1.mr-5(
    //          //                src="@/assets/images/svg/more-icon.svg"
    //          //              )
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //      v-tab-item(transition="fade-transition")
    //        v-card(flat='')
    //          v-card-text
    //            p
    //              | Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
    //            p
    //              | Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
    //            p
    //              | Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
    //            p
    //              | Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
    //            p.mb-0
    //              | Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    //      v-tab-item(transition="fade-transition")
    //        v-card(flat='')
    //          v-card-text
    //            p
    //              | Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
    //            p.mb-0
    //              | Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
    //

</template>

<script>
import ScheduleHeader from "@/components/ScheduleHeader";
import LevelBlock from "@/components/LevelBlock";
import UserSidebar from "@/components/UserSidebar";
import SnackBar from "@/components/elements/SnackBar";
import draggable from "vuedraggable";
import DotsMenu from "@/components/DotsMenu";
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import HmProgress from "@/components/elements/HmProgress";


export default {
  name: "AccountSportsman",
  components: {
    HmProgress,
    DotsMenu,
    SnackBar,
    UserSidebar,
    LevelBlock,
    ScheduleHeader,
    draggable,
    vueCustomScrollbar
  },

  data: () => ({
    isShowList:false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
    interval: {},
    value: 100,
    snackbar: false,
    text: 'Выставлены оценки. Можно ознакомиться в разделе с оценками',
    timeout: 10000,
    widgetsListOne: [
      {name: "Текущий микроцикл 1", id: 1},
      {name: "Текущий микроцикл 2", id: 2},
      // {name: "Текущий микроцикл 3", id: 3},
      // {name: "Текущий микроцикл 4", id: 4},
    ],
    widgetsListTwo: [
      {name: "Текущий микроцикл 5", id: 5},
      {name: "Текущий микроцикл 6", id: 6},
      // {name: "Текущий микроцикл 7", id: 7},
      // {name: "Текущий микроцикл 8", id: 8},
    ],


  }),


  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    },
    toggleList: function () {
      this.isShowList = !this.isShowList;
      console.log(this.isShowList)

    },
  },
  mounted() {


    this.interval = setInterval(() => {
      if (this.value === 0) {
        return (this.value = 0)
      }
      this.value -= 10
    }, 1000)

  },
}
</script>

<style scoped lang="scss">

.v-tab {
  text-transform: none;
  font-family: $FiraSansRegular;
  letter-spacing: normal;
  min-width: 0;
  max-width: none;
  padding: 0;
  margin: 0 16px;
}

::v-deep {
  .v-tabs-bar {
    height: 36px;
  }

  .v-badge__wrapper {
    left: 6px;
    top: 9px;
  }

  .v-tab--active {
    color: #000;
  }

  .v-tabs-items {
    padding: 30px 3px 60px;
  }

  .v-snack__content {
    color: #000;
    padding: 0 20px 0 0;
  }

  .v-snack__wrapper {
    max-width: 400px;
    padding: 16px 24px;
    border-radius: 12px;
    min-height: 92px;
    display: flex;
    align-items: flex-start;
  }

  .snackbar-text {
    //max-width: 60%;
  }

  .snackbar-right {
    display: flex;
    height: 100%;

  }

  .v-snack__action {
    height: 100%;
    margin-right: 0;
    align-items: flex-start;
  }

  .snackbar-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 10px;
  }

  .snackbar-button {
    color: #326BFF;
    font-family: $FiraSansMedium;

    &:hover {
      cursor: pointer;
    }

  }


}

.menu-settings {
  width: 271px;

  .v-list-item {
    padding: 10px 20px;
    min-height: 0px;
  }

  .v-list-item__title {
    font-size: 16px;
  }
}


/* widgets */

.widget {
  width: 100%;
  //background: #F8F9FB;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 16px;
}

.widget-header {
  //min-height: 48px;
  //display: flex;
  //align-items: center;
  padding: 10px 16px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0px 0px;
}

.widget-header__top {
  align-items: center;
  display: flex;
  width: 100%;

}

.widget-header__title {
  font-family: $FiraSansBold;
}

.widget-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 8px 8px;
}

.widget-footer__text {
  color: #326BFF !important;
  font-size: 14px;
}
.widget-content{
  padding: 16px;
}

.widget-content_gray{
  background: #F8F9FB;
}
.scroll-area {
  position: relative;
  margin: auto;
  min-height: 50px;
  //max-height: 150px;
  transition: 0.5s;

}
.scroll-area.show{
  height: 100% !important;
  max-height: 100% !important;
  transition: 0.5s;
}

.widget__item{
  background: #FFFFFF;
  border-radius: 4px;
  padding: 8px 10px;
  display: flex;
  align-items: center;

}

.hm-item-title{
  font-size: 14px;
}

.event-item{
  display: flex;
  .avatars-block-text{
    font-size: 12px;
  }
  .avatars-block-quant{
    font-size: 12px;
    color: #000;
  }
}

.event-item__left{
  @include width-flex(20%)
}

.event-item__title{
  font-family: $FiraSansMedium;
  margin-bottom: 6px;
}

.event-item__desc{
  font-size: 12px;
  margin-bottom: 6px;
}

.event-item__date{
  font-size: 12px;
}

.widget-form{
  padding: 24px 32px;
  position: relative;
  display: flex;
  .drag-icon{
    position: absolute;
    left: 12px;
    top: 18px;
  }
}

.form-player__right{
  @include width-flex(150px)
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-player__left{
  padding-left: 26px;
  @include width-flex(calc(100% - 150px))

}

.form-player__desc-block{
  margin-bottom: 16px;
}
.form-player__desc-status{
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #798CBD;
}

.avatar-freind{
  @include width-flex(64px)
  height: 64px;
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.avatar-freind__block{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.widget-award{
  .widget-header{
    box-shadow: none;
  }
}

.award-item__img{
  font-size: 36px;
  @include width-flex(40px)
  margin-right: 8px;
}

.award-item{
  display: flex;
  margin-bottom: 20px;
}
.award-item__desc{
  margin-top: 5px;
}

.award-item-text{
  font-size: 14px;
  margin-bottom: 6px;
}

.award-item-date{
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;

}

.statistic-season__head{
  padding-left: 10px;
  padding-right: 10px;
  .statistic-td.first{
    color: #000;
  }
  .statistic-td{
    color: #888888;
  }
}
.statistic-season__head,
.statistic-season__item{
  display: flex;
  align-items: center;
}

.widget-header__bottom{
  margin-top: 16px;
}

.statistic-td.first{
  @include width-flex(40%)
}
.statistic-td{
  @include width-flex(15%)
  font-size: 14px;

}

.statistic-td.first.total{
  font-size: 14px;
  font-family: $FiraSansBold;
}



.maps-goal{
  width: 100%;

}
.maps-goal__wrap{
  position: relative;
  margin-top: 85px;
  margin-bottom: 90px;
}
.point-goal{
  position: absolute;
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
}

.point-goal.red{
  background: #DC1E34;

}
.goal-statistic{
  font-size: 12px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  span{
    font-family: $FiraSansMedium;
    margin-left: 10px;
  }
  &:before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.goal-complete{
  &:before {
    background: #000;
  }
}

.goal-fail{
  &:before {
    background: #DC1E34;
  }
}

.widget-team{
  .statistic-td.first{
    @include width-flex(30%)
    text-align: left;
  }
  .statistic-td{
    @include width-flex(14%)
    font-size: 14px;
    text-align: center;

  }

}

.team-player__name{
 font-size: 12px;
  color: $blue;
}

.avatar-player{
  margin-right: 16px;
}
.widget-header__text{
  span{
    font-family: $FiraSansBold;

  }
}

.nav-slider{
  display: flex;
  align-items: center;
}

.nav-slider__text{
  font-size: 14px;
  margin-left: 4px;
  margin-right: 4px;
}

.nav-arrow{
  &:hover{
    cursor: pointer;
  }
}

.discipline-num{
  font-size: 12px;
  font-family: $FiraSansBold;
}



::v-deep{
  .ps__thumb-y{
    width: 3px;
  }
}








/**/

</style>