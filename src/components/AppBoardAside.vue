<template>
<div id="aside">
    <h2>게시판</h2>
    <ul>
        <li><router-link to="/board">일반게시판</router-link></li>
        <li><a href="">댓글게시판</a></li>
    </ul>
</div>


</template>

<script>
export default{
    name : "AppBoardAside",
    components : {},
    data (){
        return {

        };
    },
    methods : {

    },
    created (){

    }    
};
</script>

<style>

</style>