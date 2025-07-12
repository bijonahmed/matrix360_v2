// plugins/tinymce.js

import Vue from 'vue';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
//import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/autoresize';

Vue.component('tinymce', {
  template: '<textarea :id="editorId"></textarea>',
  props: {
    value: String,
    editorId: {
      type: String,
      default: 'default-tinymce-editor',
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    value(newValue) {
      if (this.editor && this.editor.getContent() !== newValue) {
        this.editor.setContent(newValue);
      }
    },
  },
  mounted() {
    const self = this;

    tinymce.init({
      target: this.$refs.editor,
      skin: false,
      content_css: false,
      plugins: ['paste', 'link', 'autoresize'],
      toolbar: 'undo redo | bold italic | link',
      setup(editor) {
        self.editor = editor;

        editor.on('init', () => {
          editor.setContent(self.value);
        });

        editor.on('input', () => {
          self.$emit('input', editor.getContent());
        });
      },
    });
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
});

export default function (Vue) {
  Vue.component('tinymce', Vue.options.components.tinymce);
}
