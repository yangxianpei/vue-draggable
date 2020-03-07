import InputComp from './Input'
import Layout from './Layout'
import './index.css'
export default {
    components: {
        InputComp,
    },
    props: {
        id: {
            type: Number,
            default: -1
        }
    },
    methods:{
        btn(){
            this.$emit('removeElement',this.id)
        }
    },
    render() {
        let content;
        switch (this.id) {
            case 1:
                 content = <InputComp></InputComp>
                 break;
            case 2:
                 content = <Layout id={this.id+parseInt(Math.random()*10)}></Layout>
                 break;
        }
        return (
            <div class='aaa'>
                {content}
                <div onClick={this.btn} class='del'>删除</div>
            </div>

        )
    }
}
