<template>
  <aside :style="containerClass" class="aside-m">
    <ul class="item-ul ">
      <li-m v-for="(v,i) in 5" :key="i" @click.native="fn">
        <template slot="lichild">
          <ul class="d-none ul-children" data-index="2" @click.stop>
            <li v-for="(v,i) in 10" :key="i">
              <a href="">{{i}}</a>
            </li>
          </ul>
        </template>
      </li-m>
    </ul>
  </aside>
</template>

<script>
  import liM from './liM'
  export default {
    data() {
      return {

      }
    },
    methods: {
      fn() {
        let el = event.currentTarget;
        let h = el.querySelector('.ul-children');
        h.classList.remove('d-none');
        let height = h.clientHeight;
        let num = 0;
        let ii = h.getAttribute('data-index');
        if (parseInt(h.getAttribute('data-index')) % 2 === 1) {
          //第二次点击li隐藏下面的元素
          h.setAttribute('data-index', '2')
          let ulheight = height;
          let fn = function () {
            ulheight -= 10;
            h.style.height = ulheight + 'px';
            if (ulheight > 0) {
              requestAnimationFrame(fn)
            } else {
              //隐藏动画完成后重新给ul的height复制，否则height等于0，下次显示ul就不正常了
              h.style.height = height + 'px';
              h.classList.add('d-none');
            }
          }
          requestAnimationFrame(fn);
        } else {
          //第一次点击显示下面的元素
          h.setAttribute('data-index', '3')
          let fn = function () {
            num += 10;
            h.style.height = num + 'px';
            if (num < height) {
              requestAnimationFrame(fn)
            }
          }
          requestAnimationFrame(fn)
        }
      }
    },
    components: {
      liM
    },
    props: {
      containerClass: {
        type: Object,
        default () {
          return {
            "width": "200px",
            "backgroundColor": "#2B2C31",
            "height": "100%",
          }
        }
      }
    },
    mounted() {
      console.log(5 % 2)
      // console.log(document.getElementById('lll').children)
    }

  }
</script>

<style lang="less" scoped>
  .aside-m {
    color: red;
    overflow: auto;
  }

  .item-ul {
    padding: 15px 0;

  }

  .ul-children {
    overflow: hidden;
  }
</style>