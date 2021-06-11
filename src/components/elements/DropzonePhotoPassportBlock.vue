<template lang="pug">
  .dropzone-wrap
    vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions')
    .dropzone-warning Необходимо загрузить диплом об образовании,<br/> сертификаты, грамоты
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'


export default {
  name: "DropzonePhotoPassportBlock",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      // thumbnailWidth: 196,
      // maxFilesize: 0.5,
      headers: {"My-Awesome-Header": "header value"},
      dictDefaultMessage: 'Прикрепить файл',
      maxFiles: '1',
      // uploadMultiple: false,
      // maxfilesexceeded: function(file) {
      //   this.removeAllFiles();
      //   this.addFile(file);
      // }
    }
  }),
}


</script>

<style scoped lang="scss">
.dropzone {
  position: relative;
  height: 120px;
  min-height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid #C0C8E0;
  border-radius: 12px;
  @include background-cover('passport-empty.png')
  background-color: #F1F3F9;
  width: 120px;
  max-width: calc(100% - 200px);
  //max-width: 100%;
  padding: 0;
  ::v-deep {
    .dz-message {
      color: #000;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      white-space: nowrap;
      font-size: 12px;
      font-family: $FiraSansBold;
      position: absolute;
      left: 136px;
      background: #F1F3F9;
      border-radius: 4px;
      padding: 4px 6px 4px 12px;
      &:before {
        content: '';
        background-image: url('~@/assets/images/svg/upload-icon.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        @include width-flex(16px)
        height: 16px;
        margin-left: 5px;
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
.dropzone-wrap{
  position: relative;
}

.dropzone-warning{
  position: absolute;
  left: 145px;
  bottom: 5px;
  font-size: 12px;
  color: $red;
  display: flex;

  &:before {
    content: '';
    background-image: url('~@/assets/images/svg/Icon-Error.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @include width-flex(16px)
    height: 16px;
    margin-right: 5px;
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