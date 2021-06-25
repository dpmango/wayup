<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        .widget-header__title 📊 Таймлайн, отображающий стаж и события
    .widget-content.pb-16
      // timeline component
      .timeline
        .timeline__events
          .timeline__events-row(v-for="ev in events" :key="ev.id")
            .timeline__event(v-for="event in ev.events" top :key="event.id" v-tooltip="event.title")
            
        .timeline__baseline

        .timeline__dates
          .timeline__date(v-for="date in dates") {{date}}

  
</template>


<script>
import moment from 'moment';

export default {
  name: 'WidgetTrainerTimeline',
  components: {  },
  props: {
    workplaces: Array,
    educations: Array
  },
  data() {
    return {}
  },
  computed: {
    getWorkplaces(){
      return [ 
        { "id": 1, "dateStart": "2014-06-11", "dateEnd": "2015-06-11", "employer": "CSKA", "position": "Coach", "responsibilities": "Caoching", "coach": 1 } ,
        { "id": 2, "dateStart": "2017-06-11", "dateEnd": "2021-06-11", "employer": "CSKA", "position": "Coach", "responsibilities": "Caoching", "coach": 1 } 
      ]
    },
    getEducations(){
      return [ 
        { "id": 1, "title": "Институт", "dateStart": "2010-06-11", "dateEnd": "2012-06-11", "refresherCourses": "Никаких )", "coach": 1 },
        { "id": 2, "title": "Институт", "dateStart": "2008-06-11", "dateEnd": "2015-06-11", "refresherCourses": "Никаких )", "coach": 1 }
      ]
    },
    dates(){
      const workplaces = this.getWorkplaces
      const educations = this.getEducations

      let years = [];
      
      [...workplaces, ...educations].forEach(x =>{
        const dateStart = moment(x.dateStart)
        const dateEnd = moment(x.dateEnd)

        years.push(parseInt(dateStart.format('YYYY')))
        years.push(parseInt(dateEnd.format('YYYY')))
      });

      // unique array and sort ASC
      return [...new Set(years)].sort((a,b) => a - b)
    },
    events(){
      // TEMPORARY DATA for testing
      // const workplaces = this.workplaces
      const workplaces = this.getWorkplaces

      // .sort((a,b) => a.dateStart > b.dateStart)
      // const educations = this.educations
      const educations = this.getEducations

      return [
        {
          id: 'workplaces',
          events: workplaces.map((x => {
            return {
              id: x.id,
              title: `${x.employer} : ${x.position} : ${x.responsibilities}`,
            }
          }))
        },
        {
          id: 'educations',
          events: educations.map((x => {
            return {
              id: x.id,
              title: `${x.title} : ${x.Никаких}`,
            }
          }))
        }
      ]

    },
    
  },
}
</script>

<style lang="scss" scoped>
.timeline{
  &__events{
    padding-top: 16px;
    display: flex;
    flex-direction: column;
  }
  &__events-row{
    margin-bottom: 20px;
    display: flex;
  }
  &__event{
    width: 80px;
    background: rgba(50, 107, 255, 0.2);
    border-radius: 4px;
    height: 18px;
  }

  &__baseline{
    height: 6px;
    background: #326BFF;
    border-radius: 3px;
  }
  &__dates{
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
  }
  &__date{
    font-size: 16px;
    line-height: 24px;
    color: #7C86A4;
  }
}
 

</style>