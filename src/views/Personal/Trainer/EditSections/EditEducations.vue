<template lang="pug">
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
        .place__block(v-for="(form, idx) in forms" :key="idx")
          .inputs-row

            .profile-table__left
              .profile-title Образование
            .profile-table__right
              base-input(
                label="Введите"
                classAttr="input-default input-big text-gray w-100"
                v-model="form.title"
              )

          .inputs-row
            .profile-table__left
              .profile-title Дата начала
            .profile-table__right
              v-row.align-center
                v-col(md='2')
                  DataPicker(:value="form.dateStart" @input="(v) => handleDatepickerChange(v, 'dateStart')")

                v-col(md='2')
                  .profile-title Дата окончания
                v-col(md='2')
                  .ml-n16
                    DataPicker(:value="form.dateEnd" @input="(v) => handleDatepickerChange(v, 'dateEnd')")

          .inputs-row
            .profile-table__left
              .profile-title Курсы повышения квалификации
            .profile-table__right
              base-input(
                label="Введите"
                classAttr="input-default input-big text-gray w-100"
                v-model="form.courses"
              )
          
          .inputs-row
            .profile-table__left
              .profile-title Дата начала
            .profile-table__right
              v-row.align-center
                v-col(md='2')
                  DataPicker(:value="form.coursesStart" @input="(v) => handleDatepickerChange(v, 'coursesStart')")
                v-col(md='2')
                  .profile-title Дата окончания
                v-col(md='2')
                  .ml-n16
                    DataPicker(:value="form.coursesEnd" @input="(v) => handleDatepickerChange(v, 'coursesEnd')")
          
          .inputs-row.mt-6
            .profile-table__left
              .profile-title Загрузить диплом об образовании, сертификаты, грамоты
            .profile-table__right
              // TODO - diploma
              DropzonePhotoPassportBlock

          .inputs-row.justify-md-end
            a(href="#" @click="$emit('handleDelete', idx)").link-red Удалить


      .inputs-row.justify-md-end
        base-button(
          v-if="isShowList"
          classAttr='button-default button-gray button-big'
          label="Добавить образование"
          @click="$emit('handleAdd')"
        )
          template(#icon-left)
            svg.icon-16.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

    .widget-footer
      .widget-footer__text(@click='toggleList')
        span.list-more(v-if='!isShowList') Развернуть список
        span.list-small(v-if='isShowList') Свернуть список
        
</template>

<script>
import moment from 'moment';
import DropzonePhotoBlock from '@/components/elements/DropzonePhotoBlock';
import DropzonePhotoPassportBlock from '@/components/elements/DropzonePhotoPassportBlock';
import DataPicker from '@/components/elements/DataPicker';

export default {
  components: { DataPicker, DropzonePhotoPassportBlock, DropzonePhotoBlock },
  props:{
    forms: Array,
    select: Object,
    multiple: Boolean
  },
  data: () => ({
    isShowList: false,
  }),
  methods: {
    toggleList() {
      this.isShowList = !this.isShowList;
    },
    handleDatepickerChange(date, key) {
      this.form[key] = moment(date);
    },
  }
}
</script>