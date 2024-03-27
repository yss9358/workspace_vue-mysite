<template>

<div id="header" class="clearfix">
    <h1>
        <router-link to='/'>Mysite</router-link>
    </h1>
    <ul v-if="this.$store.state.authUser != null">
        <li>{{ this.$store.state.authUser.name }}님 안녕하세요^^</li>
        <li><button v-on:click="logout" type="button" class="btn_s">로그아웃</button></li>
        <li><router-link to="/user/modifyform" class="btn_s">회원정보수정</router-link></li>
    </ul>
    <ul v-if="this.$store.state.authUser == null">
        <li><router-link to="/user/loginform" class="btn_s">로그인</router-link></li>
        <li><router-link to="/user/joinform" class="btn_s">회원가입</router-link></li>
    </ul>
</div>
<!-- //header -->

<div id="nav">
    <ul class="clearfix">
        <li><router-link to="/">입사지원서</router-link></li>
        <li><a href="">게시판</a></li>
        <li><router-link to="/gallery">갤러리</router-link></li>
        <li><router-link to="/guestbook">방명록</router-link></li>
    </ul>
</div>
<!-- //nav -->

</template>

<script>
export default{
    name : "AppHeader",
    components : {},
    data (){
        return {

        };
    },
    methods : {
        logout(){
            // console.log("logout");
            this.$store.commit("setAuthUser", null);
            this.$store.commit("setToken", null);
            this.$router.push('/');
        }
    },
    created (){

    }    
}
</script>

<style>

</style>