<template>
<div id="wrap">

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
            <li><a href="" class="btn_s">회원가입</a></li>
        </ul>
    </div>
    <!-- //header -->

    <div id="nav">
        <ul class="clearfix">
            <li><router-link to="/">입사지원서</router-link></li>
            <li><a href="">게시판</a></li>
            <li><a href="">갤러리</a></li>
            <li><a href="">방명록</a></li>
        </ul>
    </div>
    <!-- //nav -->

    <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content">
        
            <!-- content-head 없음 -->
            <div id="index"> 
            
                <img id="profile-img" src="@/assets/image/profile.jpg">
                
                <div id="greetings">
                    <p class="text-xlarge">
                        <span class="bold">안녕하세요!!<br>
                        <span v-if="this.$store.state.authUser != null">{{this.$store.state.authUser.name}}의 MySite에 오신 것을 환영합니다.</span>
                        <span v-if="this.$store.state.authUser == null">MySite에 오신 것을 환영합니다.</span>
                        <br>
                        <br>
                        이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br>
                        </span>
                        <br>
                        사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br>
                        SpringBoot & Vue-js 방식으로 제작되었습니다.<br>
                        <br>
                        자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br>
                        배운 거 있는거 없는 거 다 합쳐서 만들어 놓은 사이트 입니다.<br>
                        <br>
                        (자유롭게 꾸며보세요!!)<br>
                        <br><br>
                        <a class="" href="">[방명록에 글 남기기]</a>
                    </p>	
                </div>
                <!-- //greetings -->
                
                <div class="clear"></div>
            </div>
            <!-- //index -->
        </div>
        <!-- //full-content -->
    </div>
    <!-- //container -->

    <div id="footer">
        Copyright ⓒ 2024 유승수. All right reserved
    </div>
    <!-- //footer -->

</div>
<!-- //wrap -->
</template>

<script>
import "@/assets/css/main.css"

export default{
    name : "MainView",
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
        }
    },
    created (){

    }    
}
</script>

<style>

</style>