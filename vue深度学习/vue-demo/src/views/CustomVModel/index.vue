<template>
    <div>
        <!-- 自定义 v-model -->
        <p>{{name}}</p>
        <CustomVModel v-model="name"/>
    </div>
</template>

<script>
import CustomVModel from './CustomVModel'

export default {
    components: {
        CustomVModel
    },
    data() {
        return {
            name:'',    
        }
    }
}
</script>