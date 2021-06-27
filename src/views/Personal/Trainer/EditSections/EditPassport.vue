<template lang="pug">
  
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
              v-col(md='2')
                ValidationProvider(v-slot="{ errors }" class="ui-group" rules="required")
                  base-input(
                    classAttr="input-default input-big text-gray w-100 mr-2"
                    placeholder="хх хх"
                    v-model='form.passportSeries'
                    v-mask="'## ##'"
                    :error="errors.length"
                    :errors="errors"
                  )
              v-col(md='2')
                ValidationProvider(v-slot="{ errors }" class="ui-group" rules="required")
                  base-input(
                    classAttr="input-default input-big text-gray w-100 mr-2"
                    placeholder="ххх ххх"
                    v-model='form.passportNumber'
                    v-mask="'### ###'"
                    :error="errors.length"
                    :errors="errors"
                  )
        .inputs-row
          .profile-table__left
            .profile-title Адрес регистрации
          .profile-table__right
            ValidationProvider(v-slot="{ errors }" class="ui-group" rules="required")
              base-input(
                label="Введите"
                classAttr="input-default input-big text-gray w-100"
                v-model="form.registration"
                :error="errors.length"
                :errors="errors"
              )
        .inputs-row
          .profile-table__left
            .profile-title Кем выдан
          .profile-table__right
            v-row
              v-col(md='2')
                ValidationProvider(v-slot="{ errors }" class="ui-group" rules="required")
                  base-input(
                    classAttr="input-default input-big text-gray w-100 mr-2"
                    placeholder="ххх ххх"
                    v-model='form.docIssuer'
                    v-mask="'### ###'"
                    :error="errors.length"
                    :errors="errors"
                  )
              v-col(md='10')
                ValidationProvider(v-slot="{ errors }" class="ui-group" rules="required")
                  base-input(
                    label="Введите"
                    classAttr="input-default input-big text-gray w-100"
                    v-model='form.docIssuerName'
                    :error="errors.length"
                    :errors="errors"
                  )
        .inputs-row
          .profile-table__left
            .profile-title Дата выдачи
          .profile-table__right
            DataPicker(:value="form.docDate" @input="(v) => handleDatepickerChange(v, 'docDate')")

        .inputs-row.mt-6
          .profile-table__left
            .profile-title Фото паспорта
          .profile-table__right
            // TODO v-model photos
            DropzonePhotoPassportBlock

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
    form: Object,
  },
  data: () => ({
    isShowList: true,
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