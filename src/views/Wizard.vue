<template lang="pug">
  .div
    ScheduleHeader
      template(v-slot:header-block)
        .block-flex.align-center
          v-breadcrumbs(:items='items')
            template(v-slot:divider='')
              img.breadcrumbs-icon(
                src="@/assets/images/arrow-down.svg"
              )
      template(v-slot:header-right)
        v-avatar(
          height='40px'
          width='40px'
        )
          img(
            src="@/assets/images/avatar.png"
          )
    BaseTimeline
    <!-- TrainingPlanEmpty start -->
    //v-row
    //  v-col(
    //    md='12'
    //  )
    //    .empty-block
    //      .img-wrap.mb-7
    //        img(
    //          src=`@/assets/images/img-content-group.png`
    //        )
    //      .empty-block-text.mb-3 Группы, доступные вам пока не добавлены в систему. Начните с добавления
    //      base-button(classAttr='custom-button button-blue ml-5' label='Добавить группу' tag='a' color="#326BFF")

    <!-- TrainingPlanEmpty end -->


    <!-- TrainingPlanGroup start -->
    //.title-wrap
    //  img.icon-36.mt-n2.mr-3(
    //    src=`@/assets/images/svg/icon-people.svg`
    //  )
    //  .h2 Выберите группу или
    //    a(href='#').span.ml-2.text-blue.border-bottom-dotted-blue игрока
    //v-row(:class="empty ? 'd-none' : 'd-flex'")
    //  v-col(
    //    md='8'
    //  )
    //    v-row
    //      v-col(
    //        v-for='(item, i) in 5' :key='i'
    //        :cols="!isActiveList ? 'md-6' : 'md-12'"
    //      )
    //        TrainingGroupItem(:class="!isActiveList ? 'tiles' : ''")
    //
    //  v-col(
    //    md='3'
    //    offset-md='1'
    //  )
    //    FilterTrainingGroup(
    //      @changeView="listViewActive"
    //
    //    )
    <!-- TrainingPlanGroup end -->

    <!-- TrainingPlanEvent start -->
    .nav-bottom
      v-container(fluid)
        v-row
          v-col(
            md='3'
            offset-md='5'
          )
            .nav-bottom__block
              base-button(label='Группа' classAttr='custom-button mr-6')
              base-button(label='Далее' classAttr='custom-button button-blue mr-6')

    .title-wrap
      .emoji-36.mr-3 🏆
      .h2 Добавьте обязательные мероприятия

    v-row
      v-col(
        md='8'
      )
        info-block(text="В Базовом мезоцикле уже запланированы мероприятия. Вы можете удалить или добавить другие")
          slot
            template
              .target-icon
                div 💡
        add-block.mb-5(text='Добавить меропритие')
        v-row
          v-col(
            md='12'
          )
            TrainingEventItem(:class="!isActiveList ? 'tiles' : ''")
            //TrainingGroupItem(:class="!isActiveList ? 'tiles' : ''")

      v-col(
        md='3'
        offset-md='1'
      )
        FilterTrainingGroup(
          @changeView="listViewActive"

        )
    <!-- TrainingPlanEvent end -->


</template>

<script>


import ScheduleHeader from "@/components/ScheduleHeader";
import BaseTimeline from "@/components/library/old/BaseTimeline";
import TrainingGroupItem from "@/components/Training/TrainingGroupItem";
import FilterTrainingGroup from "@/components/FilterTrainingGroup";
import InfoBlock from "@/components/elements/InfoBlock";
import AddBlock from "@/components/elements/addBlock";
import TrainingEventItem from "@/components/Training/TrainingEventItem";
// import BaseSelectOutline from "@/components/library/BaseSelectOutline";

export default {
  name: 'Wizard',
  components: {
    TrainingEventItem,
    AddBlock,
    InfoBlock,
    FilterTrainingGroup,
    // BaseSelectOutline,
    TrainingGroupItem,
    BaseTimeline,
    ScheduleHeader
  },

  data: () => ({
    // empty: false,
    isActiveList: true,
    items: [
      {
        text: 'расписание',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'создание плана',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    selectItems: ['1', '2', '4', '5'],
    sortingItems: [
      {name: "названию", id: 1},
      {name: "возрасту", id: 2},
      {name: "году подготовки", id: 3},
    ],
  }),
  methods: {
    listViewActive: function () {
      this.isActiveList = !this.isActiveList;

    },

  }


}
</script>

<style lang="scss" scoped>
.empty-block {
  width: 100%;
  margin-top: 100px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.empty-block-text {
  font-size: 14px;
}
</style>