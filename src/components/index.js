import Vue from "vue";
import vueAutoCompleteTextArea from "./autoCompleteTextarea.vue";

const Components = {
    vueAutoCompleteTextArea,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
