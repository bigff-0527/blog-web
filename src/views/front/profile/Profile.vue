<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div class="block">
        <div class="radio" style="margin-bottom: 50px">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>
        <el-timeline :reverse="reverse">

          <el-timeline-item :color="item.create_time === item.update_time ? '#009dbd' : '#00BD64'" v-for="item in blogList.list" :timestamp="item.update_time" placement="top" >
            <el-card>

              <h4>{{item.title}}</h4>
              <p>{{item.user.username}} <span>{{item.create_time === item.update_time ? '创建' : '更新'}}</span>  </p>
            </el-card>
          </el-timeline-item>
<!--          <el-timeline-item timestamp="2018/4/3" placement="top">-->
<!--            <el-card>-->
<!--              <h4>更新 Github 模板</h4>-->
<!--              <p>王小虎 提交于 2018/4/3 20:46</p>-->
<!--            </el-card>-->
<!--          </el-timeline-item>-->
<!--          <el-timeline-item timestamp="2018/4/2" placement="top">-->
<!--            <el-card>-->
<!--              <h4>更新 Github 模板</h4>-->
<!--              <p>王小虎 提交于 2018/4/2 20:46</p>-->
<!--            </el-card>-->
<!--          </el-timeline-item>-->
        </el-timeline>
      </div>

    </div>
  </div>
</template>

<script>
  import Count from "components/common/count/Count";
  import ProfileItem from "./profileItem/ProfileItem";

  import {getProfileData} from "network/profile";

  export default {
    name: "Profile",
    components: {
      Count,
      ProfileItem
    },
    data(){
      return {
        reverse : true,
        blogList: {
          pageNum: 0,
          pageSize: 0,
          list: [],
        },

      }
    },
    methods: {
      getProfileData(pageSize){
        const page = this.blogList.pageNum + 1
        getProfileData(page,pageSize).then( res => {
          this.blogList.list.push(...res.data.list)
          console.log(  this.blogList.list)
        })
      }
    },
    created() {
      this.getProfileData(8)
    }
  }
</script>

<style scoped>

</style>
