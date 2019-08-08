<template>
  <div id="app">
    <autoComplete_textArea
            style="height: 150px;"
            :name="'description'"
            :options = "arrayOption"
            v-model="description">
    </autoComplete_textArea>
  </div>
</template>

<script>
    import autoComplete_textArea from './components/autoComplete-textArea.vue'

    export default {
        name: 'app',
        components: {
            autoComplete_textArea
        },
        data () {
            return {
                arrayOption : [
                    {id : 1 , text : 'hello, my name is Ali'},
                    {id : 2 , text : 'hello, my name is Morteza'},
                    {id : 3 , text : 'hello, my name is Morteza'},
                    {id : 4 , text : 'hello, my name is Morteza'},
                    {id : 5 , text : 'hello, my name is Morteza'},
                    {id : 6 , text : 'hello, my name is Morteza'},
                    {id : 7 , text : 'hello, my name is Morteza'},
                    {id : 8 , text : 'hello, my name is Morteza'},
                    {id : 9 , text : 'hello, my name is Morteza'},
                    {id : 10, text : 'hello, my name is Morteza'},
                    {id : 11, text : 'hello, my name is Morteza'},
                    {id : 12, text : 'hello, my name is Morteza'},
                    {id : 13, text : 'hello, my name is Morteza'},
                    {id : 14, text : 'hello, my name is Morteza'},
                    {id : 15, text : 'hello, my name is Morteza'},
                    {id : 16, text : 'hello, my name is Morteza'},
                    {id : 17, text : 'hello, my name is Morteza'},
                    {id : 18, text : 'hello, my name is Morteza'},
                ],
                description : '',
            }
        },
    }
</script>
