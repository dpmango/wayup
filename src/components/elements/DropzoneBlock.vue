<template lang="pug">
  vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions')
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'


export default {
  name: "DropzoneBlock",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 196,
      // maxFilesize: 0.5,
      headers: {"My-Awesome-Header": "header value"},
      dictDefaultMessage: 'Загрузить видео'
    }
  }),
}


</script>

<style scoped lang="scss">
.dropzone {
  height: 92px;
  min-height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(121, 140, 189, 0.6);
  overflow: hidden;
  border-radius: 12px;

  ::v-deep {
    .dz-message {
      color: #798CBD;
      display: flex;
      align-items: center;

      &:before {
        content: '';
        background-image: url('~@/assets/images/svg/icon-video.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
  .dz-preview:hover .dz-image img{
    filter: none;
  }

}

.dz-started {
  border: none;

  ::v-deep {
    .dz-message {
      display: none !important;
    }
  }
}

</style>