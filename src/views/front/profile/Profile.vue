<template>
  <div class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div class="block">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>
        <el-timeline :reverse="reverse">

          <el-timeline-item timestamp="2018/4/12" placement="top" >
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

    </div>
  </div>
</template>

<script>
  import Count from "components/common/count/Count";
  import ProfileItem from "./profileItem/ProfileItem";
  export default {
    name: "Profile",
    components: {
      Count,
      ProfileItem
    },
    data(){
      return {
        reverse : true
      }
    }
  }
</script>

<style scoped>

</style>
