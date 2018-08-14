new Vue({
 el: '#root',
 data: {
   textInput: ''
 },
 computed: {
  createIdenticon: function() {
    return jdenticon.toSvg(this.textInput, 160);
  }   
 },
 methods: {
   onInput: function(input) {
     this.textInput = input.target.value;
   }
 }
});