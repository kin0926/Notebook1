var app = new Vue({
  el:'#todoapp',
  data:{
    content:['下雨天','今天是晴天','继续就行'],
    // inputValue:'又又又下雨了'
  },
  methods:{
    add:function(){
      this.content.push(this.inputValue);
    },
    remove:function(index){
      this.content.splice(index,1);
    },
    clear:function(){
      this.content=[];
    }
  }
})
// var todoapp = document.querySelector('#todoapp');
// if(todoapp.style.height<=200+'px'){
//   todoapp.style.height=200+'px';
// }else{
//   todoapp.style.height=auto;
// }