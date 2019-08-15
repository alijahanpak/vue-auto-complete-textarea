# vue-auto-complete-textarea

## Install
```
$ npm install --save vue-auto-complete-textarea
```

Register the component : 
```html
import vueAutoCompleteTextArea from "vue-auto-complete-textarea";
import 'vue-auto-complete-textarea/dist/vue-auto-complete-textarea.css';

```
### How to use : 
```html
<label>Lable
    <vueAutoCompleteTextArea
            style="height: 150px"
            :name="'description'"
            :options = "[{'id':'', 'text' : ''}]"
            v-model="input.description">
    </vueAutoCompleteTextArea>
</label>
```
### props:

| Name          | Type            | Description  
| ------------- |---------------  |------------:
| option        | Array of object | option list
| name          | String          | textarea name attribute

### v-validate:

```html
<label>Lable
    <vueAutoCompleteTextArea
            style="height: 150px"
            :name="'description'"
            v-validate="'required'"
            :class="{'input': true, 'error-border': errors.has('description')}"
            :options = "[{'id':'', 'text' : ''}]"
            v-model="input.description">
    </vueAutoCompleteTextArea>
    <span v-show="errors.has('description')" class="error-font">Error Text!</span>
</label>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
