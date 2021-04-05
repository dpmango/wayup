<template>
  <div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
    <div class="question">{{ faq.question }}</div>
    <div class="answer">
      <slot></slot>

    </div>
  </div>
</template>

<script>

export default {
  name: 'AccordionTest',
  props: ['faq', 'index', 'open']
}
</script>