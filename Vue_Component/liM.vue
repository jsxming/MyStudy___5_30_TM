<template>
  <li class="item-li px-15">
    <a class="c-white item-a flex" @click="rotate0($event)">
      111
      <span class="icon iconfont icon-xia"></span>
    </a>
    <slot name="lichild" ref="lichild">

    </slot>
  </li>
</template>

<script>
  export default {
    name: "liM",
    data() {
        return {
            eli: null
        }
    },

    methods: {
      //箭头旋转动画
      rotate0(e) {
        let eparent = e.currentTarget.parentNode;
        let i = e.currentTarget.getElementsByClassName('icon-xia')[0];
        if (this.eli !== null && i !== this.eli) {
          this.eli.classList.remove('rotate0');
          return false;
        }
        this.eli = i;
        i.classList.contains('rotate0') ? i.classList.remove('rotate0') : i.classList.add('rotate0');
      },
    },
    mounted(){
      
    }
  }
</script>

<style lang="less" scoped>
  .item-li {
    margin: 5px 0;
    overflow: auto;
    &:first-child {
      margin: 0;
    }
    &:hover {
      background: #36383C;
    }
  }

  .item-a {
    justify-content: space-between;
    padding: 10px 0;
  }

  .icon-xia {
    transform: rotate(90deg);
    transition: all .5s;
    height: 17px;
    width: 17px;
  }

  .rotate0 {
    transform: rotate(0);
  }
</style>