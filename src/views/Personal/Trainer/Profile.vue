<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(md='12')
        h1.title-big.mb-5 Мой профиль

        v-row
          v-col(md='2')
            dropzone-photo-block

          v-col(md='10')
            base-button(label='Скачать резюме'  classAttr='button-default button-blue button-big mb-6')

            form(@submit.prevent="handleSubmit")
              // 1 - Личные
              EditPersonal(:form="personal" :select="select")

              // 2 - Пасспорт
              EditPassport(:form="passport" :select="select")
              
              // 3 - Работа
              EditWorkplaces(:form="workplaces" :select="select")
              
              //- // 4 - Образование
              EditEducations(:form="educations" :select="select")
              
              // submit
              base-button(
                type="submit"
                classAttr='button-default button-blue button-big w-100'
                label="Сохранить"
              )


</template>

<script>
import {mapGetters} from 'vuex';
import moment from 'moment';
import ScheduleHeader from '@/components/ScheduleHeader';
import HeaderTrainerAccount from '@/components/elements/HeaderTrainerAccount';
import DropzonePhotoBlock from '@/components/elements/DropzonePhotoBlock';
import DropzonePhotoPassportBlock from '@/components/elements/DropzonePhotoPassportBlock';

import { ProfileResource } from '@/store/api'
import EditPersonal from './EditSections/EditPersonal'
import EditPassport from './EditSections/EditPassport'
import EditWorkplaces from './EditSections/EditWorkplaces'
import EditEducations from './EditSections/EditEducations'


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
    EditEducations
  },
  data: () => ({
    personal: {
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
    workplaces: [{
      id: 1,
      dateStart: new Date(),
      dateEnd: new Date(),
      employer: null,
      position: null,
      duties: null
    }],
    educations: [{
      title: null,
      dateStart: new Date(),
      dateEnd: new Date(),
      courses: null,

      coursesStart: new Date(), // todo - api
      coursesEnd: new Date(), // todo - api
      diploma: null, // todo - api
    }],
    select: {
      marriage: ['Да', 'Нет'],
      group: ['|', '||', '|||', '||||'],
      rhesus: ['Положительный', 'Отрицательный'],
    },
  }),
  computed: {
    ...mapGetters('auth', ['profile'])
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const [err, data] = await ProfileResource.get()

      if (err){
        console.log(err)
      }

      this.setUserInfo(data);

    },
    setUserInfo(data) {
      // const clear = (x) => x || '';
      const {
        user: {firstName, lastName, email, phone, nickname, dateBirth},
        isMarried, passportSeries, passportNumber, address, unitCode, unitName, dateIssue,
        workplaces,
        educations,
      } = data;

      console.log('TODO:: ProfileResouce.get', data)

      const processDate = (str) => {
        return moment(str, 'DD-MM-YYY').toDate()
      }

      this.personal = {
        ...this.personal,
        ...{
          lastName,
          firstName,
          nickname,
          dateBirth: processDate(dateBirth),
          isMarried,
          phone,
          email,
          // group,
          // rhesus,
        }
      }
      this.passport = {
        ...this.passport,
        ...{
          passportSeries,
          passportNumber,
          registration: address,
          docIssuer: unitCode,
          docIssuerName: unitName,
          docDate: processDate(dateIssue)
        }
      };

      if (workplaces.length >= 1){
        this.workplaces = workplaces.map(wp => ({
          id: wp.id,
          dateStart: processDate(wp.dateStart),
          dateEnd: processDate(wp.dateEnd),
          employer: wp.employer,
          position: wp.position,
          duties: wp.responsibilities
        }))

      }

      if (educations.length >= 1){
        this.educations = educations.map(ed => ({
          id: ed.id,
          title: ed.title,
          dateStart: processDate(ed.dateStart),
          dateEnd: processDate(ed.dateEnd),
          courses: ed.refresherCourses,
          // coursesStart: new Date(),
          // coursesEnd: new Date(),
          // diploma: null,
        }))
      }

    },

    async handleSubmit() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
        return;
      }

      const {
        personal: {
          lastName,
          firstName,
          nickname,
          dateBirth,
          email,
          phone,
          isMarried,
          // group,
          // rhesus,
        },
        passport: {
          passportSeries,
          passportNumber,
          docIssuer,
          docIssuerName,
          registration,
          docDate,
        },
        workplaces,
        educations,
      } = this;
        

      const patchObject = {
        ...this.profile, 
        ...{
          user: {
            ...this.profile.user,
            ...{
              lastName,
              firstName,
              dateBirth,
              nickname,
              email,
              phone
              // patronymic // TODO - no input or conflict with firstName
            },
            ...{
              isMarried,
              passportSeries,
              passportNumber,
              address: registration,
              unitCode: docIssuer,
              unitName: docIssuerName,
              dateIssue: docDate
            }
          },
          workplaces: workplaces.map((x) => ({
            coach: null,
            dateEnd: x.dateStart.format('YYYY-MM-DD'),
            dateStart: x.dateEnd.format('YYYY-MM-DD'),
            employer: x.employer,
            // id: 1, // todo - should ids be created on backend ?
            position: x.position,
            responsibilities: x.duties,
          })),
          educations: educations.map((x) => ({
            coach: null,
            dateEnd: x.dateStart.format('YYYY-MM-DD'),
            dateStart: x.dateStart.format('YYYY-MM-DD'),
            employer: x.employer,
            // id: 1 // todo - should ids be created on backend ?
            refresherCourses: x.courses,
            title: x.title
          })),
          
          sportsmans: this.profile.sportsmans.map(x=> x.id)
        },
      }

      console.log('ProfileResource.edit', patchObject)

      await ProfileResource.edit(patchObject)
      .then(response => {
        console.log({response})
      })
      .catch(err => {
        console.log(err)
        throw err.response
      })

    },

  },
};
</script>

<style scoped lang="scss">
.profile-table__left {
  height: 100%;
  display: flex;
  align-items: center;
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

.profile-table__right {
  @include width-flex(90%);
}
</style>
