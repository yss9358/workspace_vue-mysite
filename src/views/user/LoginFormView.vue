<template>

<div id="wrap">

<AppHeader/>
<!-- header -->

<div id="container" class="clearfix">
    <AppUserAside/>
    <!-- //aside -->

    <div id="content">
    
        <div id="content-head">
            <h3>로그인</h3>
            <div id="location">
                <ul>
                    <li>홈</li>
                    <li>회원</li>
                    <li class="last">로그인</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <!-- //content-head -->

        <div id="user">
            <div id="loginForm">
                <form v-on:submit.prevent="login">
                    <!-- 아이디 -->
                    <div class="form-group">
                        <label class="form-text" for="input-uid">아이디</label> 
                        <input type="text" id="input-uid" name="id" v-model="userVo.id" placeholder="아이디를 입력하세요">
                    </div>

                    <!-- 비밀번호 -->
                    <div class="form-group">
                        <label class="form-text" for="input-pass">비밀번호</label> 
                        <input type="password" id="input-pass" name="password" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
                    </div>
                    
                    <!-- 버튼영역 -->
                    <div class="button-area">
                        <button type="submit" id="btn-submit">로그인</button>
                    </div>
                </form>
            </div>
            <!-- //loginForm -->
        </div>
        <!-- //user -->
    </div>
    <!-- //content  -->
</div>
<!-- //container  -->

<AppFooter/>
<!-- footer -->

</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/user.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppUserAside from '@/components/AppUserAside.vue'
import axios from 'axios'

export default{
    name : "LoginFormView",
    components : {
        AppHeader,
        AppFooter,
        AppUserAside
    },
    data (){
        return {
            userVo : {}
        };
    },
    methods : {
        login(){
            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/users/login',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response.data); //수신데이타
                // 로그인 사용자 정보
                if(response.data.result == "success"){
                    let authUser = response.data.apiData;
                    this.$store.commit("setAuthUser",authUser);// vuex에 저장
                
                    // token은 응답문서의 헤더에 있음. "Authorization", "Bearer" + ""
                    const token = response.headers.authorization.split(" ")[1];
                    this.$store.commit("setToken", token);// vuex에 저장
                    
                    this.$router.push('/');
                } else{
                    this.userVo.id = null;
                    this.userVo.password = null;
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created (){

    }    
};
</script>

<style>

</style>