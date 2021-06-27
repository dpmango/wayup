<template lang="pug">
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
              v-model="form.lastName"
            )

        .inputs-row

          .profile-table__left
            .profile-title Имя Отчество
          .profile-table__right
            base-input(
              label="Введите"
              classAttr="input-default input-big text-gray w-100"
              v-model="form.firstName"
            )
        .inputs-row

          .profile-table__left
            .profile-title Никнейм
          .profile-table__right
            base-input(
              label="Введите"
              classAttr="input-default input-big text-gray w-100"
              v-model="form.nickname"
            )

        .inputs-row
          .profile-table__left
            .profile-title Дата рождения
          .profile-table__right
            DataPicker(:value="form.dateBirth" @input="(v) => handleDatepickerChange(v, 'dateBirth')")

        .inputs-row

          .profile-table__left
            .profile-title В браке
          .profile-table__right
            .segments-block
              v-item-group.d-flex(mandatory)
                v-item(
                  v-for="val in select.marriage"
                  :key="val"
                  v-slot='{ active, toggle }'
                )
                  .segments-item
                    base-segment(
                      classAttr='segment-default segment-big'
                      :label="val"
                      tag="div"
                      v-model="form.isMarried"
                      @click='toggle'
                    )

        .inputs-row

          .profile-table__left
            .profile-title E-mail
          .profile-table__right
            base-input(
              label="Введите"
              classAttr="input-default input-big text-gray w-100"
              v-model="form.email"
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
                  v-model='form.phone'
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
                  :items="select.group"
                  :multiple="true"
                  v-model="form.group"
                )
              v-col(
                md='7'
              )
                .d-flex.align-center
                  .profile-title.mr-4 Резус фактор
                  .segments-block
                    v-item-group.d-flex.mb-0(mandatory)
                      v-item(
                        v-for="val in select.rhesus"
                        :key="val"
                        v-slot='{ active, toggle }'
                      )
                        .segments-item
                          base-segment(
                            classAttr='segment-default segment-big'
                            :label="val"
                            tag="div"
                            v-model="form.rhesus"
                            @click='toggle'
                          )

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
    select: Object
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