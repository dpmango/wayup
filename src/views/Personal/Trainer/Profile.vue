<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(md='12')
        h1.title-big.mb-5 Мой профиль

        v-row
          v-col(md='2')
            dropzone-photo-block(:src="personal.avatar")
            
          v-col(md='10')
            base-button(label='Скачать резюме'  classAttr='button-default button-blue button-big mb-6')

            ValidationObserver(ref="form" v-slot="{}" tag="form" class="profile-edit-form" @submit.prevent="handleSubmit")

              .error(v-if="error" v-html="error")
              // 1 - Личные
              EditPersonal(:form="personal" :select="select")

              // 2 - Пасспорт
              EditPassport(:form="passport" :select="select")

              // 3 - Работа (multiple)
              EditWorkplaces(
                :forms="workplaces"
                :multiple="true"
                :select="select"
                @handleAdd="handleWorkplaceAdd"
                @handleDelete="handleWorkplaceDelete"
              )

              // 4 - Образование (multiple)
              EditEducations(
                :forms="educations"
                :multiple="true"
                :select="select"
                @handleAdd="handleEducationAdd"
                @handleDelete="handleEducationDelete"
              )

              .error(v-if="error" v-html="error")

              // submit
              base-button(
                type="submit"
                classAttr='button-default button-blue button-big w-100'
                label="Сохранить"
              )


</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import ScheduleHeader from '@/components/ScheduleHeader';
import HeaderTrainerAccount from '@/components/elements/HeaderTrainerAccount';
import DropzonePhotoBlock from '@/components/elements/DropzonePhotoBlock';
import DropzonePhotoPassportBlock from '@/components/elements/DropzonePhotoPassportBlock';
import isEmpty from 'lodash/isEmpty';

import { ProfileResource } from '@/store/api';
import EditPersonal from './EditSections/EditPersonal';
import EditPassport from './EditSections/EditPassport';
import EditWorkplaces from './EditSections/EditWorkplaces';
import EditEducations from './EditSections/EditEducations';

export default {
  name: 'Profile',
  components: {
    HeaderTrainerAccount,
    ScheduleHeader,
    DropzonePhotoBlock,
    DropzonePhotoPassportBlock,
    EditPersonal,
    EditPassport,
    EditWorkplaces,
    EditEducations,
  },
  data: () => ({
    error: '',
    personal: {
      avatar: null,
      lastName: null,
      firstName: null,
      nickname: null,
      dateBirth: new Date(),
      isMarried: null,
      email: null,
      phone: null,
      group: null, // todo - api
      rhesus: null, // todo - api
    },
    passport: {
      passportSeries: null,
      passportNumber: null,
      docIssuer: null,
      docIssuerName: null,
      registration: null,
      docDate: new Date(),
      photos: null, // todo - api
    },
    workplaces: [
      {
        // id: 1,
        dateStart: new Date(),
        dateEnd: new Date(),
        employer: null,
        position: null,
        duties: null,
      },
    ],
    educations: [
      {
        title: null,
        dateStart: new Date(),
        dateEnd: new Date(),
        courses: null,

        coursesStart: new Date(), // todo - api
        coursesEnd: new Date(), // todo - api
        diploma: null, // todo - api
      },
    ],
    select: {
      marriage: ['Да', 'Нет'],
      group: ['|', '||', '|||', '||||'],
      rhesus: ['Положительный', 'Отрицательный'],
    },
  }),
  computed: {
    ...mapGetters('auth', ['profile']),
  },
  watch: {
    profile(val){
      this.setUserInfo(val)
    }
  },
  created() {
    this.setUserInfo(this.profile)
  },
  methods: {
    // async getUser() {
    //   const [err, data] = await ProfileResource.get();

    //   if (err) {
    //     console.log(err);
    //   }

    //   this.setUserInfo(data);
    // },
    setUserInfo(data) {
      // const clear = (x) => x || '';
      if (isEmpty(data)) return

      const {
        user: { firstName, lastName, email, phone, nickname, dateBirth, avatar },
        isMarried,
        passportSeries,
        passportNumber,
        address,
        unitCode,
        unitName,
        dateIssue,
        workplaces,
        educations,
      } = data;

      // console.log('Profile: setUserInfo', data);

      const processDate = (str) => {
        return moment(str, 'YYYY-MM-DD').toDate();
      };

      this.personal = {
        ...this.personal,
        ...{
          avatar,
          lastName,
          firstName,
          nickname,
          dateBirth: processDate(dateBirth),
          isMarried,
          phone,
          email,
          // group,
          // rhesus,
        },
      };
      this.passport = {
        ...this.passport,
        ...{
          passportSeries,
          passportNumber,
          registration: address,
          docIssuer: unitCode,
          docIssuerName: unitName,
          docDate: processDate(dateIssue),
        },
      };

      if (workplaces.length >= 1) {
        this.workplaces = workplaces.map((wp) => ({
          id: wp.id,
          dateStart: processDate(wp.dateStart),
          dateEnd: processDate(wp.dateEnd),
          employer: wp.employer,
          position: wp.position,
          duties: wp.responsibilities,
        }));
      }

      if (educations.length >= 1) {
        this.educations = educations.map((ed) => ({
          id: ed.id,
          title: ed.title,
          dateStart: processDate(ed.dateStart),
          dateEnd: processDate(ed.dateEnd),
          courses: ed.refresherCourses,
          // coursesStart: new Date(),
          // coursesEnd: new Date(),
          // diploma: null,
        }));
      }
    },
    handleWorkplaceAdd() {
      this.workplaces = [
        ...this.workplaces,
        ...[{
          id: this.workplaces[this.workplaces.length - 1].id + 1,
          dateStart: new Date(),
          dateEnd: new Date(),
          employer: null,
          position: null,
          duties: null,
        }],
      ];
    },
    handleEducationAdd() {
      this.educations = [
        ...this.educations,
        ...[{
          id: this.educations[this.educations.length - 1].id + 1,
          title: null,
          dateStart: new Date(),
          dateEnd: new Date(),
          courses: null,
          coursesStart: new Date(),
          coursesEnd: new Date(),
          diploma: null,
        }],
      ];
    },
    handleWorkplaceDelete(idx) {
      this.workplaces = this.workplaces.filter((x, n) => idx !== n);
    },
    handleEducationDelete(idx) {
      this.educations = this.educations.filter((x, n) => idx !== n);
    },
    async handleSubmit() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
        this.error = 'Пожалуйста исправьте выделенные поля'
        return;
      }

      this.error = ''

      await this.editProfile({
        profile: this.profile, 
        personal: this.personal, 
        passport: this.passport, 
        workplaces: this.workplaces, 
        educations: this.educations
      })
        .then(() => {
          this.$router.push({ name: 'PersonalTrainerProfileComplete'})
        })
        .catch(err => {
          console.log(err);
          if (err.status === 400){
            try{
              Object.keys(err.data).forEach((key) => {
                Object.keys(err.data[key]).forEach(val => {
                  this.error += `${val}: ${JSON.stringify(err.data[key][val][0])} <br/>`;
                })
              });
            } catch(err){
              this.error = 'Ошибка при сохрании! Проверьте поля'
            }
            
          } else {
            this.error = err.data
          }
          
        })
    },
    ...mapActions('auth', ['loadProfile', 'editProfile'])
  },
};
</script>

<style lang="scss">
.profile-table__left {
  height: 100%;
  display: flex;
  align-items: center;
  @include width-flex(10%);
  padding-right: 10px;
}

.profile-title {
  color: #999;
}

.inputs-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.profile-table__left {
  @include width-flex(10%);
  padding-right: 10px;
}

.place__block{
  &:not(:first-child){
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid rgba(gray, .5);
  }
}

.profile-edit-form{
.error{
  border-radius: 8px;
  margin: 8px 0;
  color: white;
  font-size: 13px;
  background: rgba(tomato, .1);
  border: 2px solid rgba(tomato, .5);
  padding: 6px 12px;
}
}

</style>
