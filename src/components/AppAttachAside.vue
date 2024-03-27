<template>

<div id="aside">
    <h2>갤러리</h2>
    <ul>
        <li><router-link to="/attach/form">일반갤러리</router-link></li>
        <li><router-link to="/attach/form">파일첨부연습</router-link></li>
    </ul>
</div>

</template>

<script>
export default{
    name : "AppAttachAside",
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