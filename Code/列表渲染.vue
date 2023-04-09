<script>
export default {
    data(){
        return{
            listMessage1:[1,2,3,4,5,6,7,8,9,10],
            listMessage2:[
                {id:1,message:'value1'},
                {id:2,message:'value2'},
                {id:3,message:'value3'},
            ]
        }
    }
}
</script>
<template>
    <div>
        <ul>
            <!--            渲染列表-->
            <li v-for="list in listMessage1">
                {{list}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="list in listMessage2">
                {{list.id}} {{list.message}}
            </li>
        </ul>
    </div>
</template>
<style>

</style>