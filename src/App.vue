<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <div class="title">拖拽元素</div>
        <draggable :options="optionsLeft" v-model="elementList">
          <p v-for="(item,i) in elementList" :key="item.id+i">{{item.name}}</p>
        </draggable>
      </el-aside>
      <el-main>
        <el-input v-model="input" placeholder="请输入报表名称" class="classinput"></el-input>
        <p>第(一)期</p>
        <div class="box">
          <draggable :options="optionsRight" v-model="elementListRight">
              <li v-for="(item,i) in elementListRight" :key="item.id+i">
                <componentsList :id="item.id" @removeElement="removeElement" :index='i' :name='item.name'></componentsList>
              </li>
            <div class="title-tag" v-if="elementListRight.length==0">
              <h1>添加元素</h1>
              <p>选中左侧元素，拖动这里</p>
            </div>
          </draggable>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import componentsList from "./components/index.js";
import {debounce} from 'lodash'
export default {
  components: {
    draggable,
    componentsList
  },
  data() {
    return {
      input: "",

      elementList: [
        {
          name: "文本框",
          id: 1
        },
        {
          name: "表格",
          id: 2
        }
      ],
      elementListRight: []
    };
  },
  computed: {
    optionsLeft() {
      return {
        animation: 150,
        group: {
          name: "people",
          pull: "clone",
          put: false
        },
        ghostClass: "ghost",
        sort: false
      };
    },
    optionsRight() {
      return {
        animation: 200,
        group: "people",
           sort: true
      };
    }
  },
  methods: {
    removeElement(i) {
      this.elementListRight.splice(i,1)
    }
  }
};
</script>
<style lang="stylus">
.el-container {
  padding: 50px;
  height: 100%;

  .title {
    height: 50px;
    background: #ccc;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    p {
      padding: 10px 14px;
      cursor: move;

      &:hover {
        background: #ccc;
      }
    }

    border: 1px solid #ccc;
  }

  .el-main {
    margin-left: 50px;
    border: 1px solid #ccc;
    height: 1224px;

    .classinput {
      text-align: center;
      color: red;

      input {
        text-align: center;
        width: 600px;
        height: 80px;
        font-weight: bold;
        font-size: 20px;
      }

      input::-webkit-input-placeholder {
        color: #fc697a;
      }
    }

    p {
      margin: 10px 0;
      text-align: center;
      font-size: 12px;
    }

    .box {
      margin-top: 100px;
      height: 100%;

      div {
        height: 100%;
      }

      .title-tag {
        text-align: center;
        padding-top: 88px;
        border: dashed 1px #DCDCDC;

        h1 {
          font-weight: normal;
        }
      }
    }
  }
}
</style>
