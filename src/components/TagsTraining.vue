<template lang="pug">
  mixin tags-item(data)
    .tags-item
      img.tag-icon(
        src=`@/assets/images/svg/${data.img}`
      )
      .tag-text !{data.text}

  .tags
    +tags-item({
     img:'icon-people.svg',
      text:'ССМ-2'
    })
    +tags-item({
     img:'icon-ice.svg',
      text:'Лёд'
    })
    +tags-item({
     img:'icon-book.svg',
      text:'План 12'
    })
    +tags-item({
     img:'icon-hokey.svg',
      text:'Развитие технических навыков'
    })
    +tags-item({
     img:'icon-man.svg',
      text:'Индивидуальное'
    })
    +tags-item({
     img:'icon-power.svg',
      text:'Физическое'
    })










</template>

<script>
export default {
name: "TagsTraining"
}
</script>

<style lang="scss" scoped>

.tags{
  margin-bottom: 27px;
}
.tags-item{
  display: inline-flex;
  align-items: center;
  background: #F1F3F9;
  border-radius: 4px;
  padding: 4px 8px 3px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.tag-text{
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 3px;
}
.tag-icon{
  @include width-flex(12px)
  height: 15px;
}


</style>