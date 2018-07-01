<template>
    <transition name="slide">
     <music-list 
        :songs="songs"
        :title="title"
        :bg-image="bgImage"
      ></music-list>
    </transition>
</template>
<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'
  export default {
    components:{
        MusicList
    },
    data(){
      return  {
        songs:[]
      }
    },
    computed:{
      title(){
        return this.singer.name
      },
      bgImage(){
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    created(){
      console.log(this.singer)
    },
    mounted(){
      this._getSingerDetail(this.singer.id);
    },
    methods:{
      _getSingerDetail(id){
        if (!id) {
            this.$router.push({
              path:'/singer'
            });
            return 
        }
        // 请求数据
        getSingerDetail(id).then((res)=>{
            if (res.code === ERR_OK) {
               this.songs= this._mormalizeSongs(res.data.list);
               // console.log('singer-detail songs',this.songs);
            }
        })
      },
      _mormalizeSongs(list){
          let ret = [];
         list.forEach((item,index)=>{
            let {musicData} = item;
            if (musicData.songid && musicData.albummid) {
                ret.push(createSong(musicData));
            }
         });
        return ret;
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
   
 .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

