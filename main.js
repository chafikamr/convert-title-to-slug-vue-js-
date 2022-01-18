

var vm = new Vue({
    el : '#app',
    data : {
      input : '',
      output : ''
    }
  ,
  methods : {
    convertToSlug(){
      // Cache The Input 
      var result = this.input;
      // turn the input to lowerCase 
      result = result.toLowerCase()
      // replace white sppace with dsh 
      result = result.replace(/\s+/g,"-")
      //replace & with -and-
      result = result.replace(/&/g,"-and-")
      // assign result to output 
      this.output = result 


      
    }
  }
})