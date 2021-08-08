<template>
<div>
    <editor
        initialValue="<p>Initial editor content</p>"
        :init="{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar:
        'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
    >
    </editor>
</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'app',
    components: {
        editor: Editor
    },
    data(){
        return {
            content: ''
        }
    }
}
</script>
<style scoped>

</style>
