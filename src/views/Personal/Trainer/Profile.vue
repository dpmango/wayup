<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(
        md='12'
      )

        h1.title-big.mb-5 Мой профиль
        v-row
          v-col(
            md='2'
          )
            dropzone-photo-block

          v-col(
            md='10'
          )
            base-button(label='Скачать резюме'  classAttr='button-default button-blue button-big mb-6')
            .widget.mb-4
              .widget-header
                .widget-header__top
                  .widget-header__title Личные данные
              .widget-content.widget-content_gray.widget-content_profile(
                :class="!isShowList ? 'pt-0 pb-0' : ''"
              )
                .profile__body(
                  :class="!isShowList ? 'scroll-area p-0' : 'scroll-area p-0 show'"
                  style='max-height: 0px;'
                )
                  .inputs-row
                    .profile-table__left
                      .profile-title Фамилия
                    .profile-table__right
                      base-input(
                        label="Введите"
                        classAttr="input-default input-big text-gray w-100"
                      )

                  .inputs-row

                    .profile-table__left
                      .profile-title Имя Отчество
                    .profile-table__right
                      base-input(
                        label="Введите"
                        classAttr="input-default input-big text-gray w-100"
                      )
                  .inputs-row

                    .profile-table__left
                      .profile-title Никнейм
                    .profile-table__right
                      base-input(
                        label="Введите"
                        classAttr="input-default input-big text-gray w-100"
                      )

                  .inputs-row
                    .profile-table__left
                      .profile-title Дата рождения
                    .profile-table__right
                      DataPicker

                  .inputs-row

                    .profile-table__left
                      .profile-title В браке
                    .profile-table__right
                      .segments-block
                        v-item-group.d-flex(mandatory)
                          v-item(
                            v-for="val in marriageList"
                            :key="val"
                            v-slot='{ active, toggle }'
                          )
                            .segments-item
                              base-segment(
                                classAttr='segment-default segment-big'
                                :label="val"
                                tag="div"
                                @click='toggle'
                              )

                  .inputs-row

                    .profile-table__left
                      .profile-title E-mail
                    .profile-table__right
                      base-input(
                        label="Введите"
                        classAttr="input-default input-big text-gray w-100"
                      )
                  .inputs-row

                    .profile-table__left
                      .profile-title Телефон
                    .profile-table__right
                      v-row
                        v-col(md='2')
                          base-input(
                            label=""
                            classAttr="input-default input-big text-gray w-100"
                            placeholder="х (ххх) ххх-хх-хх"
                            v-model='phone'
                            v-mask="'# (###) ###-##-##'"
                          )
                  .inputs-row.mb-3
                    .profile-table__left
                      .profile-title Группа крови
                    .profile-table__right
                      v-row.align-center
                        v-col(
                          md='3'
                        )
                          base-select(
                            classAttr='select-default select-bg-white'
                            label="Группа"
                            :items="selectItems"
                            multiple="true"
                          )
                        v-col(
                          md='7'
                        )
                          .d-flex.align-center
                            .profile-title.mr-4 Резус фактор
                            .segments-block
                              v-item-group.d-flex.mb-0(mandatory)
                                v-item(
                                  v-for="val in rhesusList"
                                  :key="val"
                                  v-slot='{ active, toggle }'
                                )
                                  .segments-item
                                    base-segment(
                                      classAttr='segment-default segment-big'
                                      :label="val"
                                      tag="div"
                                      @click='toggle'
                                    )

              .widget-footer
                .widget-footer__text(
                  @click='toggleList'
                )
                  span.list-more(v-if='!isShowList') Развернуть список
                  span.list-small(v-if='isShowList') Свернуть список


            .widget.mb-4
              .widget-header
                .widget-header__top
                  .widget-header__title Паспортные данные
              .widget-content.widget-content_gray.widget-content_profile(
                :class="!isShowList ? 'pt-0 pb-0' : ''"
              )
                .profile__body(
                  :class="!isShowList ? 'scroll-area p-0' : 'scroll-area p-0 show'"
                  style='max-height: 0px;'
                )
                  .inputs-row
                    .profile-table__left
                      .profile-title Серия и номер
                    .profile-table__right
                      v-row
                        v-col(
                          md='2'
                        )
                          base-input(
                            classAttr="input-default input-big text-gray w-100 mr-2"
                            placeholder="хх хх"
                            v-model='series'
                            v-mask="'## ##'"
                          )
                        v-col(
                          md='2'
                        )
                          base-input(
                            classAttr="input-default input-big text-gray w-100 mr-2"
                            placeholder="ххх ххх"
                            v-model='number'
                            v-mask="'### ###'"
                          )
                  .inputs-row
                    .profile-table__left
                      .profile-title Адрес регистрации
                    .profile-table__right
                      base-input(
                        label="Введите"
                        classAttr="input-default input-big text-gray w-100"
                      )
                  .inputs-row
                    .profile-table__left
                      .profile-title Кем выдан
                    .profile-table__right
                      v-row
                        v-col(
                          md='2'
                        )
                          base-input(
                            classAttr="input-default input-big text-gray w-100 mr-2"
                            placeholder="ххх ххх"
                            v-model='numberGet'
                            v-mask="'### ###'"
                          )
                        v-col(
                          md='10'
                        )

                          base-input(
                            label="Введите"
                            classAttr="input-default input-big text-gray w-100"
                          )
                  .inputs-row
                    .profile-table__left
                      .profile-title Дата выдачи
                    .profile-table__right
                      DataPicker
                  .inputs-row.mt-6
                    .profile-table__left
                      .profile-title Фото паспорта
                    .profile-table__right
                      DropzonePhotoPassportBlock
              .widget-footer
                .widget-footer__text(
                  @click='toggleList'
                )
                  span.list-more(v-if='!isShowList') Развернуть список
                  span.list-small(v-if='isShowList') Свернуть список

            .widget.mb-4
              .widget-header
                .widget-header__top
                  .widget-header__title Место работы
              .widget-content.widget-content_gray.widget-content_profile(
                :class="!isShowList ? 'pt-0 pb-0' : ''"
              )
                .profile__body(
                  :class="!isShowList ? 'scroll-area p-0' : 'scroll-area p-0 show'"
                  style='max-height: 0px;'
                )
                  .place__block
                    .inputs-row
                      .profile-table__left
                        .profile-title Дата начала
                      .profile-table__right
                        v-row.align-center
                          v-col(
                            md='2'
                          )
                            DataPicker

                          v-col(
                            md='2'
                          )
                            .profile-title Дата окончания
                          v-col(
                            md='2'
                          )
                            .ml-n16
                              DataPicker

                    .inputs-row

                      .profile-table__left
                        .profile-title Работодатель
                      .profile-table__right
                        base-input(
                          label="Введите"
                          classAttr="input-default input-big text-gray w-100"
                        )
                    .inputs-row

                      .profile-table__left
                        .profile-title Должность
                      .profile-table__right
                        base-input(
                          label="Введите"
                          classAttr="input-default input-big text-gray w-100"
                        )
                    .inputs-row
                      .profile-table__left
                        .profile-title Обязанности
                      .profile-table__right
                        base-textarea(
                          label="Введите"
                          row="25"
                        )
                    .inputs-row.justify-md-end
                      a(href="#").link-red Удалить
                  .place__block

                .inputs-row.justify-md-end
                  base-button(
                    classAttr='button-default button-gray button-big'
                    label="Добавить место работы"
                  )
                    template(#icon-left)
                      svg.icon-16.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                        path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

              .widget-footer
                .widget-footer__text(
                  @click='toggleList'
                )
                  span.list-more(v-if='!isShowList') Развернуть список
                  span.list-small(v-if='isShowList') Свернуть список
            .widget.mb-4
              .widget-header
                .widget-header__top
                  .widget-header__title Образование
              .widget-content.widget-content_gray.widget-content_profile(
                :class="!isShowList ? 'pt-0 pb-0' : ''"
              )
                .profile__body(
                  :class="!isShowList ? 'scroll-area p-0' : 'scroll-area p-0 show'"
                  style='max-height: 0px;'
                )
                  .place__block
                    .inputs-row

                      .profile-table__left
                        .profile-title Образование
                      .profile-table__right
                        base-input(
                          label="Введите"
                          classAttr="input-default input-big text-gray w-100"
                        )

                    .inputs-row
                      .profile-table__left
                        .profile-title Дата начала
                      .profile-table__right
                        v-row.align-center
                          v-col(
                            md='2'
                          )
                            DataPicker

                          v-col(
                            md='2'
                          )
                            .profile-title Дата окончания
                          v-col(
                            md='2'
                          )
                            .ml-n16
                              DataPicker


                    .inputs-row

                      .profile-table__left
                        .profile-title Курсы повышения квалификации
                      .profile-table__right
                        base-input(
                          label="Введите"
                          classAttr="input-default input-big text-gray w-100"
                        )
                    .inputs-row
                      .profile-table__left
                        .profile-title Дата начала
                      .profile-table__right
                        v-row.align-center
                          v-col(
                            md='2'
                          )
                            DataPicker

                          v-col(
                            md='2'
                          )
                            .profile-title Дата окончания
                          v-col(
                            md='2'
                          )
                            .ml-n16
                              DataPicker
                    .inputs-row.mt-6
                      .profile-table__left
                        .profile-title Загрузить диплом об образовании, сертификаты, грамоты
                      .profile-table__right
                        DropzonePhotoPassportBlock
                    .inputs-row.justify-md-end
                      a(href="#").link-red Удалить
                  .place__block

                .inputs-row.justify-md-end
                  base-button(
                    classAttr='button-default button-gray button-big'
                    label="Добавить место работы"
                  )
                    template(#icon-left)
                      svg.icon-16.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                        path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

              .widget-footer
                .widget-footer__text(
                  @click='toggleList'
                )
                  span.list-more(v-if='!isShowList') Развернуть список
                  span.list-small(v-if='isShowList') Свернуть список

            router-link(to="/profile-complete")
              base-button(
                classAttr='button-default button-blue button-big w-100'
                label="Сохранить"

              )


</template>

<script>
import ScheduleHeader from "@/components/ScheduleHeader";
import DropzonePhotoBlock from "@/components/elements/DropzonePhotoBlock";
import DropzonePhotoPassportBlock from "@/components/elements/DropzonePhotoPassportBlock";
import DataPicker from "@/components/elements/DataPicker";
import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";

export default {
  name: "Profile",
  components: {HeaderTrainerAccount, DataPicker, DropzonePhotoPassportBlock, DropzonePhotoBlock, ScheduleHeader},
  data: () => ({
    isShowList: true,
    marriageList: ['Да', 'Нет'],
    rhesusList: ['Положительный', 'Отрицательный'],
    selectItems: ['|', '||', '|||', '||||',],
    phone: '',
    series: '',
    number: '',
    numberGet: ''

  }),

  methods: {
    toggleList: function () {
      this.isShowList = !this.isShowList;
    },

  }
}

</script>

<style scoped lang="scss">


.profile-table__left {
  height: 100%;
  display: flex;
  align-items: center;
}

.profile-title {
  color: #999999;
}

.inputs-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.profile-table__left {
  @include width-flex(10%)
  padding-right: 10px;
}

.profile-table__right {
  @include width-flex(90%)

}

</style>