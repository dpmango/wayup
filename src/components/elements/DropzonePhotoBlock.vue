<template lang="pug">
  vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions')
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'


export default {
  name: "DropzonePhotoBlock",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      // thumbnailWidth: 196,
      // maxFilesize: 0.5,
      headers: {"My-Awesome-Header": "header value"},
      dictDefaultMessage: '',
      maxFiles: '1',
      uploadMultiple: false,
      maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
      }
    }
  }),
}


</script>

<style scoped lang="scss">
.dropzone {
  position: relative;
  height: 350px;
  min-height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #C0C8E0;
  margin-bottom: 25px;
  border-radius: 12px;
  @include background-cover('photo-trainer-empty.png')
  background-color: #F1F3F9;
  max-width: 100%;
  padding: 0;
  ::v-deep {
    .dz-message {
      color: #798CBD;
      display: flex;
      align-items: center;

      &:before {
        content: '';
        background-image: url('~@/assets/images/svg/drop-plus.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: -20px;
        left: 50%;
        margin-left: -20px;
        z-index: 50;
      }
    }
    .dz-preview{
      margin: 0;
      border-radius: 12px;
      overflow: hidden;
      height: 100%;
    }
    .dz-preview,
    .dz-preview .dz-image img{
      width: 100%;
      height: 100%;

    }
    .dz-preview:hover .dz-image img{
      filter: none;
    }
    .dz-preview .dz-details{
      background: transparent;
      display: none;
    }
    .dz-preview.dz-image-preview{
      z-index: 10;
    }
  }



}



.dz-started {
  border: none;

  ::v-deep {
    .dz-message {
      //display: none !important;
    }
  }
}

</style>