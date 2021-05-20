<template lang="pug">
  div(:class="open ? 'accordion-big open' : 'accordion-big'")
    .accordion-big__header-wrap(@click="$emit('SidebarWidgetsOpen', index)")
      slot(name='accord-header')
    .accordion-big__body
      slot(name='accord-body')

</template>

<script>

export default {
  name: 'AccordionBig',
  props: ['classAttr', 'index', 'open']
}
</script>


<style scoped lang="scss">
/* accordion-big */
.accordion-big__header{

}

.accordion-subtitle{
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  margin-bottom: 8px;
}


.accordion-big {
  display: block;
  width: 100%;
  margin-bottom: 48px;
  //max-width: 768px;
  //margin: 15px auto;
  //padding: 15px;
  //border-radius: 8px;
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  //background-color: #FFF;
}

.accordion-big__header {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
  &:hover{
    cursor: pointer;
  }
}
.accordion-big__header-title{
  font-size: 20px;
  font-family: $FiraSansMedium;
  margin-right: 8px;

}
.accordion-big__header{
  padding-left: 30px;

  display: flex;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%) rotate(0deg);
    @include width-flex(18px)
    height: 18px;
    @include background-contain('arrow-down.svg')

    transition: all 0.2s linear;
  }
}

.accordion-big.open .accordion-big__header {
  margin-bottom: 15px;
}

.accordion-big.open .accordion-big__header::after {
  transform: translateY(-50%) rotate(180deg);
}

.accordion-big .accordion-big__body {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  margin-left: -50px;
  padding-left: 50px;
  transition: all 0.4s ease-out;
}

.accordion-big.open .accordion-big__body {
  opacity: 1;
  max-height: 100000px;
}


</style>