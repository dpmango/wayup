<template lang="pug">
  v-combobox.user-select(
    v-model="selected"
    :items='items'
    label='Выберите аккаунт'
    height=56
    hide-details
    solo
  )
    template(v-slot:selection='{ item, index }')
      .user-info__wrap
        img.user-logo(:src='item.image')
        .user-info-menu
          .user-name {{ item.name }}
          .user-email {{ item.email }}

    template(v-slot:item='{ item }')
      .user-info__wrap
        dots-menu
        img.user-logo(:src='item.image')
        .user-info
          .user-name {{ item.name }}
          .user-email {{ item.email }}
    template(v-slot:append-item)
      .add-account(@click="$router.push(\"/registration\");")
        img.add-account-img(
          src="@/assets/images/svg/icon-plus.svg"
        )
        | Добавить аккаунт


</template>

<script>
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "select-user",
  components: {DotsMenu},


  data() {
    return {
      selected: null,
      items: [
        {
          name: 'Даниил Брызгалов',
          image: 'https://cdn.vuetifyjs.com/images/john.jpg',
          email: 'dbryzgalov@gmail.io',
          id: 1
        },
      ]
    }
  },

}
</script>

<style scoped lang="scss">
.user-logo {
  @include width-flex(40px)
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
}

::v-deep {
  .v-list-item--active:after {
    display: none !important;
  }

  .v-list-item,
  .add-account {
    padding: 10px 15px !important;
  }

  .add-account {
    display: flex;
    align-items: center;
    color: #000;

    &:hover {
      cursor: pointer;
    }

  }

  .add-account-img {
    @include width-flex(40px)
    height: 40px;
    margin-right: 12px;
  }

  .v-list-item--link:before {
    background: none;
  }

  .v-input__append-inner {
    margin-right: 9px;
    margin-top: 7px;

    .v-icon {
      background-image: url('~@/assets/images/arrow-down_blue.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: rem(16px);
      height: rem(16px);
    }

  }

  .v-input__control > .v-input__slot:before {
    &:before {
      border-color: transparent;
    }
  }


  .dots-img {
    stroke: #000000;
  }

  .v-list-item {
    position: relative;

    .dropdown-menu__wrap {
      right: 19px;
      top: 19px;
    }
  }

}

.v-autocomplete.v-select.v-input--is-focused ::v-deep input {
  display: none;
}

.user-info__wrap {
  display: flex;
  align-items: center;
  max-width: 80%;
  overflow: hidden;

}

.user-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-info-menu {
  max-width: 84%;
}

.v-menu__content {
  max-width: 342px !important;

  ::v-deep {
    max-width: 330px;
  }
}

.v-text-field > ::v-deep .v-input__control > .v-input__slot:before,
.v-text-field > ::v-deep .v-input__control > .v-input__slot:after {
  display: none;
}

.user-email {
  font-size: 12px;
  color: #666666;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > ::v-deep .v-input__control > .v-input__slot {
  box-shadow: none;
  background: #F1F3F9;
  border-radius: 8px;
}

</style>