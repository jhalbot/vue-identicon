new Vue({
 el: '#root',
 data: {
   textInput: ''
 },
 computed: {
  createIdenticon: function() {
    return jdenticon.toSvg(this.textInput, 350);
  }   
 },
 methods: {
   onInput: function(input) {
     this.textInput = input.target.value;
   }
 }
});