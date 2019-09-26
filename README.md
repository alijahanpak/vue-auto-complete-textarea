# vue-auto-complete-textarea

## Install
```
$ npm install --save vue-auto-complete-textarea
```

Register the component : 
```html
import "vue-auto-complete-textarea";
import 'vue-auto-complete-textarea/dist/vue-auto-complete-textarea.css';

```
### How to use : 
```html
<label>Lable
    <vue-auto-complete-textarea
            style="height: 150px"
            :name="'description'"
            :options = "[{'id':'', 'text' : ''}]"
            v-model="input.description">
    </vue-auto-complete-textarea>
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
    <vue-auto-complete-textarea
            style="height: 150px"
            :name="'description'"
            v-validate="'required'"
            :class="{'input': true, 'error-border': errors.has('description')}"
            :options = "[{'id':'', 'text' : ''}]"
            v-model="input.description">
    </vue-auto-complete-textarea>
    <span v-show="errors.has('description')" class="error-font">Error Text!</span>
</label>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
