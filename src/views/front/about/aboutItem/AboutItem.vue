<template>
  <div class="m-container m-padded-tb-big">
    <div class="ui container">
      <div class="ui stackable grid">
        <div class="eleven wide column">
          <img src="https://picsum.photos/seed/picsum/800/600" alt="" class="ui rounded image">
        </div>
        <div class="five wide column">
          <div class="ui top attached segment">
            <div class="ui header">关于我</div>
          </div>
          <div class="ui attached segment">
            <p class="m-text">范佳乐</p>
            <slot name="desc"></slot>
          </div>
          <div class="ui attached segment">
            <slot name="hobby"></slot>

          </div>
          <div class="ui attached segment">
            <slot name="knowledge"></slot>

          </div>
          <div class="ui bottom attached segment">
            <a href="#" class="ui circular icon button" data-tooltip="http://github/bigff"><i class="github icon"></i></a>
            <a href="#" class="ui wechat circular icon button"><i class="weixin icon"></i></a>
            <a href="#" class="ui qq circular icon button" ><i class="qq icon"></i></a>
          </div>

          <div class="ui wechat-qr flowing popup transition hidden">
            <slot name="weacht"></slot>
          </div>
          <div class="ui qq-qr flowing popup transition hidden">
            <slot name="qq"></slot>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>


  export default {
    name: "AboutItem",

  };


</script>



<style scoped>

</style>
