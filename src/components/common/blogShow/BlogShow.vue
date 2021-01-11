<template>
  <div class="container">
    <div class="row justify-content-between">
      <img class="col-md-12 rounded" :src="blog.first_picture" alt="">
      <h1 class=" col-md-12 m-padded-tb-large text-center">{{blog.title}}</h1>
      <div class="markdown-body col-md-12">
        <VueMarkdown class="m-shadow-small" :source="blog.content" v-highlight></VueMarkdown>
        <el-tag effect="dark">{{blog.flag}}</el-tag>
        <br/><br/>
        <el-tag type="success" effect="plain">{{blog.type.typeName}}</el-tag>
        <div class="tag" v-for="item in blog.tags">
          <span class=" badge  badge-success">{{item.tagName}}</span>
        </div>
      </div>
      <div class="col-md-12">
        <span v-if="blog.share_statement"><i class="fa fa-ban" aria-hidden="true">未经过本人许可,禁止转载</i></span>
      </div>
      <div class="col-md-12 m-padded-big m-margin-top m-shadow-small">
        <p class="d-sm-block">评论</p>
        <!--        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->


        <el-form :inline="true"
                 :model="comment" ref="comment"
                 :rules="rules"
                 class="demo-form-inline">
          <el-form-item prop="nickname">
            <el-input v-model="comment.nickname" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item
            prop="email"
          >
            <el-input v-model="comment.email" placeholder="邮箱"></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="postComment">评论</el-button>
          </el-form-item>
          <br/>
          <el-form-item prop="content">
            <el-input

              type="textarea"
              :rows="2"
              placeholder="请输入评论内容"
              v-model="comment.content">
            </el-input>
          </el-form-item>
        </el-form>
        <span v-if="this.comments === null || this.comments.length === 0">暂时还没人评论~抢一楼!</span>
        <div v-else class="col-md-12">
          <div v-for="item in comments" style="width: 100%">
            <el-avatar :src="item.avatar"></el-avatar>
            <span class="m-margin-lr-mini ">{{item.nickname}}</span>:
            <span class="text-black-50">{{item.content}}</span>
            <a @click="reply(item.id,item.nickname)" class="text-black-50  m-right">回复</a>
            <br/>
            <div v-if="item.replyComments !==null">
              <div style="margin-left: 5%" v-for="item in item.replyComments">
                <el-avatar :src="item.avatar"></el-avatar>
                <span class="m-margin-lr-mini">{{item.nickname}}</span>
                <span class="text-black-50">@{{item.parentNickname}}</span>:
                <span class="text-black-50">{{item.content}}</span>
                <a @click="reply(item.id,item.nickname)" class="text-black-50  m-right">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    queryBlogById, getCommentList,
    postComment

  } from 'network/blogShow'
  import VueMarkdown from 'vue-markdown'

  export default {
    name: "BlogShow",
    data() {
      return {
        blog: {
          appreciation: '',
          commentabled: false,
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
          type: {
            typeName: ''
          },
          update_time: "",
          user_id: "",
          views: 0,
        },
        id: -1,
        comments: null,
        comment: {
          id: '',
          nickname: '',
          email: '',
          content: '',
          blogId: '',
          parentComment: {
            id: ''
          },
          replyComments: null
        },
        rules: {
          nickname: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          content: [
            {required: true, message: '请输入评论信息', trigger: 'blur'},
          ]
        },
      }
    },
    components: {
      VueMarkdown
    },
    methods: {
      getBlogId() {
        this.id = this.$store.getters.getBlogId
        queryBlogById(this.id).then(res => {
          console.log(res.data);
          this.blog = res.data
        })
      },
      getCommentList() {
        getCommentList(this.id).then(res => {
          console.log(res.data);
          this.comments = res.data
        })
      },
      postComment() {
        this.comment.blogId = this.$store.getters.getBlogId
        postComment(this.comment).then(res => {
          this.comments = res.data
        })
      },
      reply(id, nickname) {
        this.comment.content = '@' + nickname
        this.comment.parentComment.id = id;
      }
    },
    created() {
      this.getBlogId()
      this.getCommentList()
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
