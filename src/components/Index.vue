<template>
  <div class="index">
      <div  class="loading" v-if="boolean">
          正在加载中<img src="../assets/img/loading.gif"/>
      </div>
      <div v-else id="movieList">
          <ul class="movieList" ref="scroll">
              <li v-for="item in movieList" :key="item">
                  <img :src="item.images.medium"/>
                  <p>{{item.title}}</p>
              </li>
          </ul>
          <div  class="loading" v-if="booleans">
            正在加载中<img src="../assets/img/loading.gif"/>
          </div>
      </div>
  </div>
</template>

<script>
import api from '../api/api'
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      boolean:true,
      movieList:'',
      booleans:false,
      start:0,
      count:20
    }
  },
  methods:{
      getHotMovieList(){
          this.start++
          api.getHotMovieList({start:this.start,count:20}).then(res=>{
            if(res.status==200){
                this.booleans=false
                this.movieList=this.movieList.concat(res.data.subjects)
            }
            })
      }
  },
  created(){
      api.getHotMovieList({start:0,count:20}).then(res=>{
          if(res.status==200){
              this.boolean=false
              this.movieList=res.data.subjects
          }
        })
  },
  mounted(){
      window.addEventListener('scroll', ()=> {
          let doc=document.getElementById('movieList')
          let  sh=doc.scrollHeight
          let  ch=document.documentElement.clientHeight
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll)
            if((sh-ch)%this.scroll==0){
                this.booleans=true
                if(this.start==3){
                    return false;
                }
                this.getHotMovieList()
            }
        })     
  },

}
</script>


<style scoped>
.loading{
    display: flex;
    align-items: center;
    justify-content: center;
}
.movieList{
    display: flex;
    flex-wrap: wrap;
}
.movieList li{
    width: 25%;
    font-size: 14px;
    text-align: center;
}
.movieList li img{
    height: 128px;
    width: 100%;
}
</style>
