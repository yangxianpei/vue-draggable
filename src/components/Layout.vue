<template>
  <div >
    <div :id="id" style="width:100%;height:400px;" class="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
 props:['id'],
  data() {
    return {
      option: {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [1,1,1,1,1,1]
          }
        ]
      }
    };
  },
  mounted() {
     let myChart = echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option);
  }
};
</script>

<style lang="stylus">

</style>