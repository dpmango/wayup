<template lang="pug">
  v-btn(
    :class='classAttr'
    elevation='0'
    :tag="tag"
    @click="handleOnClick($event)"
    :disabled='disabled'
  )
    span(v-html='label')


</template>

<script>
export default {
  name: "baseSegment",
  props: {
    label: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    },
    classAttr: {
      type: String,
      default: 'segment-default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOnClick: function () {
      this.$emit("click");
      this.$emit("select", this.label);
    }
  }
}
</script>

<style scoped lang="scss">

.button-active {
  .segment-default {
    background: #FFFFFF !important;

    ::v-deep .v-btn__content {
      color: $blue;

    }
  }

}


.segment-default {
  min-width: 0;

  text-transform: none;
  border-radius: rem(2px);
  background: #F1F3F9 !important;
  margin-right: rem(4px);

  ::v-deep .v-btn__content {
    font-size: rem(16px);
    letter-spacing: normal;
    color: #000;

    span {
      font-family: $FiraSansMedium;

    }
  }

  &:hover {
    cursor: pointer;
  }

}

.segment-big {
  font-family: $FiraSansMedium;
  min-height: rem(40px);
}

.segment-small {
  min-height: rem(24px);
  height: 24px !important;

  ::v-deep {
    .v-btn__content {
      font-size: 12px;
    }
  }
}

.v-item--active {
  .segment-default {
    background: transparent !important;

    ::v-deep .v-btn__content {
      color: $blue;
    }
  }

}

.segments-block {
  display: flex;

  a,
  .segments-item {
    &:first-child {

      .segment-default {
        border-radius: rem(8px) rem(2px) rem(2px) rem(8px);
      }
    }

    &:last-child {
      .segment-default {
        border-radius: rem(2px) rem(8px) rem(8px) rem(2px);
      }
    }
  }
}


</style>
