<template>
    <div>
        <el-input  type="textarea" :rows="4" placeholder="请输入内容" v-model="msg"></el-input>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:''
        }
    }
}
</script>