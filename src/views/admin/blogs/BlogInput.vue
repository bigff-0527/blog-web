<template>
<!--  <div class="m-container m-padded-tb-big">-->
<!--    <div class="ui container">-->
      <!--      <form id="blog-form" action="#"   method="POST" class="ui form">-->
      <!--        <input type="hidden" name="published" :dat-value="blogInput.published" :value="blogInput.published">-->
      <!--        <input type="hidden" name="id"  :value="blogInput.id">-->
      <!--        <div class="required field">-->
      <!--          <div class="ui left labeled input">-->
      <!--            <div class="ui selection compact teal basic dropdown label">-->
      <!--              <input type="hidden"  v-model.lazy="blogInput.flag">-->
      <!--              <i class="dropdown icon"></i>-->
      <!--              <div class="text">{{blogInput.flag}}</div>-->
      <!--              <div class="menu">-->
      <!--                <div class="item" data-value="原创">原创</div>-->
      <!--                <div class="item" data-value="转载">转载</div>-->
      <!--                <div class="item" data-value="翻译">翻译</div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <input type="text" name="title" v-model="blogInput.title"  placeholder="标题">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="required field">-->
      <!--          <div id="md-content" style="z-index:1 !important">-->
      <!--            <textarea placeholder="博客内容" name="content" style="display: none;" ></textarea>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="two fields">-->
      <!--          <div class=" required field">-->
      <!--&lt;!&ndash;            <div class="ui left labeled action input">- &ndash;&gt;-->
      <!--&lt;!&ndash;            <label class="ui left labeled">分类</label>&ndash;&gt;&ndash;&gt;-->
      <!--            <el-select label="分类" class="item" v-model="blogInput.type_id"  placeholder="请选择">-->
      <!--              <el-option-->
      <!--                v-for="item in classList"-->
      <!--                :key="item.typeId"-->
      <!--                :label="item.typeName"-->
      <!--                :value="item.typeId"-->
      <!--              >-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--&lt;!&ndash;            <div class="ui left labeled action input">&ndash;&gt;-->

      <!--&lt;!&ndash;              <label class="ui compact teal basic label">分类</label>&ndash;&gt;-->


      <!--&lt;!&ndash;&lt;!&ndash;              <div class="ui fluid selection dropdown">&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                <input type="hidden" name="type.id" v-model.lazy="blogInput.type_id" >&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                <i class="dropdown icon"></i>&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                <div class="default text">分类</div>&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                <div class="menu">&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                  <div v-for="item in classList" class="item" :data-value="item.typeId" >{{item.typeName}}</div>&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;                </div>&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;              </div>&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;            </div>&ndash;&gt;-->
      <!--          </div>-->

      <!--          <div class=" required field">-->
      <!--          <el-select value-key="tagId" v-model="blogInput.tags" multiple placeholder="请选择">-->
      <!--            <el-option-->
      <!--              v-for="item in tagList"-->
      <!--              :key="item.tagId"-->
      <!--              :label="item.tagName" :value="item"-->
      <!--            >-->
      <!--            </el-option>-->
      <!--          </el-select>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="required field">-->
      <!--          <div class="ui left labeled input">-->
      <!--            <label class="ui teal basic label">首图</label>-->
      <!--            <input type="text" name="firstPicture" :value="blogInput.first_picture" placeholder="首图引用地址" >-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="required field">-->
      <!--          <textarea name="description" v-model="blogInput.description" placeholder="博客描述...." maxlength="200px"></textarea>-->
      <!--        </div>-->

      <!--        <div class="inline fields">-->
      <!--          <div class="field">-->
      <!--            <div class="ui checkbox">-->
      <!--              <input type="checkbox" id="recommend" v-model="blogInput.recommend" name="recommend"  class="hidden">-->
      <!--              <label for="recommend">推荐</label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="field">-->
      <!--            <div class="ui checkbox">-->
      <!--              <input type="checkbox" id="shareStatement" v-model="blogInput.share_statement" name="shareStatement"  class="hidden">-->
      <!--              <label for="shareStatement">转载声明</label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="field">-->
      <!--            <div class="ui checkbox">-->
      <!--              <input type="checkbox" id="appreciation" v-model="blogInput.appreciation" name="appreciation" class="hidden">-->
      <!--              <label for="appreciation">赞赏</label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="field">-->
      <!--            <div class="ui checkbox">-->
      <!--              <input type="checkbox" id="commentabled" v-model="blogInput.commentabled" name="commentabled"  class="hidden">-->
      <!--              <label for="commentabled">评论</label>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="ui error message"></div>-->
      <!--        <div class="ui right aligned container">-->
      <!--          <button type="button" class="ui button" onclick="window.history.go(-1)">返回</button>-->
      <!--          <div @click="published(0)" id="save-btn" class="ui secondary button">保存</div>-->
      <!--          <div @click="published(1)" id="publish-btn" class="ui teal button">发布</div>-->
      <!--        </div>-->
      <!--      </form>-->

  <el-row style="width:100%">

    <el-col :span="15" style="margin:0 auto"><div class="grid-content bg-purple-dark">
      <el-form ref="form" :model="blogInput" label-width="100px">
        <el-form-item label-width="100px">
<!--          <div class="required field">-->
<!--            <div class="ui left labeled input">-->
<!--              <div class="ui selection compact teal basic dropdown label">-->
<!--                <input type="hidden" v-model.lazy="blogInput.flag">-->
<!--                <i class="dropdown icon"></i>-->
<!--                <div class="text">{{blogInput.flag}}</div>-->
<!--                <div class="menu">-->
<!--                  <div class="item" data-value="原创">原创</div>-->
<!--                  <div class="item" data-value="转载">转载</div>-->
<!--                  <div class="item" data-value="翻译">翻译</div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <el-input v-model="blogInput.title"></el-input>-->
<!--            </div>-->
<!--          </div>-->
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入标题" v-model="blogInput.title" class="input-with-select">

              <el-select   style="width: 100px" v-model.lazy="blogInput.flag" slot="prepend" placeholder="请选择">
                <el-option label="原创" value="1"></el-option>
                <el-option label="转载" value="2"></el-option>
                <el-option label="翻译" value="3"></el-option>
              </el-select>
            </el-input>
<!--            </el-input>-->
          </div>

        </el-form-item>
        <el-form-item>
          <div class="required field">
            <div class="ui left labeled input">
              <label class="ui teal basic label">分类</label>
              <el-select v-model="blogInput.type_id" placeholder="请选择">
                <el-option
                  v-for="item in classList"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </el-form-item>

        <el-form-item>
          <div class="required field">
            <div class="ui left labeled input">
              <label class="ui teal basic label">标签</label>
              <el-select value-key="tagId" v-model="blogInput.tags" multiple placeholder="请选择">
                <el-option
                  v-for="item in tagList"
                  :key="item.tagId"
                  :label="item.tagName" :value="item"
                >
                </el-option>
              </el-select>
            </div>
          </div>

        </el-form-item>

          <div class="required field">
            <el-form-item>
            <div class="ui left labeled input">
              <label class="ui teal basic label">首图</label>
              <el-input v-model="blogInput.first_picture"></el-input>

            </div>
            </el-form-item>
          </div>


        <el-form-item>
          <div class="required field">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="博客描述..."
              v-model="blogInput.description">
            </el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="inline fields">

                <el-switch
                  active-text="推荐"
                  v-model="blogInput.recommend"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>

            <el-switch
              active-text="转载声明"
              v-model="blogInput.share_statement"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

            <el-switch
              active-text="赞赏"
              v-model="blogInput.appreciation"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

            <el-switch
              active-text="评论"
              v-model="blogInput.commentabled"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>

          </div>
        </el-form-item>
        <el-form-item>
          <div class="ui right aligned container">
            <button type="button" class="ui button" onclick="window.history.go(-1)">返回</button>
            <div @click="published(0)" id="save-btn" class="ui secondary button">保存</div>
            <div @click="published(1)" id="publish-btn" class="ui teal button">发布</div>
          </div>
        </el-form-item>
      </el-form>
<!--    </div>-->
<!--  </div>-->
    </div></el-col>
  </el-row>
</template>

<script>
  import {findBlogById} from "network/admin";
  import {dropdown} from "assets/js/pop";
  import {saveBlog} from "network/admin";

  export default {
    name: "BlogAdd",
    data() {
      return {
        blogInput: {
          appreciation: '',
          commentabled: '',
          comments: [],
          content: "",
          create_time: "",
          description: "",
          first_picture: "",
          flag: "原创",
          id: null,
          published: false,
          recommend: false,
          share_statement: false,
          tags: [],
          title: "",
          type_id: "",
          update_time: "",
          user_id: "",
          views: 0,
        },

      }
    },
    props: {
      classList: Array,
      tagList: Array,
      id: Number,
    },
    methods: {
      //点击事件
      published(p) {
        this.blogInput.published = p
        saveBlog(this.blogInput).then(res => {
          console.log(res)
        })
      },
      //网络请求
      findBlogById() {
        console.log(this.id)
        // var date = new Date()
        if (this.id != 0) {
          findBlogById(this.id).then(res => {
            console.log(res.data)
            this.blogInput = res.data

            // this.blogInput.update_titme = date
          })
        }else {
          // this.blogInput.create_time=date
          // this.blogInput.update_time=date
        }

      },
    },
    mounted() {
      dropdown()
      this.findBlogById()

    }
  }
</script>

<style scoped >
  /*.el-select .el-input {*/
  /*  width: 130px;*/
  /*}*/


</style>
