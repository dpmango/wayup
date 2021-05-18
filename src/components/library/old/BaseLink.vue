<template lang="pug">
     router-link(
        :to="link"
        active-class="button-active"
      )
        base-button(
            :label="label"
            classAttr="custom-button mr-1"
            tag="div"
        )
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                default: '/'
            },
            isActive: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                required: true
            },
        },

        name: "BaseLink",

    }
</script>