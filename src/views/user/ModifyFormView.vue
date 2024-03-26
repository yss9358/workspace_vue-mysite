<template>

<div id="wrap">

<AppHeader/>
<!-- header -->

<div id="container" class="clearfix">
    <AppUserAside/>
    <!-- //aside -->

    <div id="content">
    
        <div id="content-head">
            <h3>회원정보</h3>
            <div id="location">
                <ul>
                    <li>홈</li>
                    <li>회원</li>
                    <li class="last">회원정보</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
         <!-- //content-head -->

        <div id="user">
            <div id="modifyForm">
                <form v-on:submit.prevent="modifyUser">

                    <!-- 아이디 -->
                    <div class="form-group">
                        <label class="form-text" for="input-uid">아이디</label> 
                        <span class="text-large bold">{{ userVo.id }}</span>
                    </div>

                    <!-- 비밀번호 -->
                    <div class="form-group">
                        <label class="form-text" for="input-pass">패스워드</label> 
                        <input type="password" id="input-pass" name="password" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
                    </div>

                    <!-- 이메일 -->
                    <div class="form-group">
                        <label class="form-text" for="input-name">이름</label> 
                        <input type="text" id="input-name" name="name" v-model="userVo.name" placeholder="이름을 입력하세요">
                    </div>

                    <!-- //나이 -->
                    <div class="form-group">
                        <span class="form-text">성별</span> 
                        
                        <label for="rdo-male">남</label> 
                        <input type="radio" id="rdo-male" name="gender" value="male" v-model="userVo.gender"> 
                        
                        <label for="rdo-female">여</label> 
                        <input type="radio" id="rdo-female" name="gender" value="female" v-model="userVo.gender"> 

                    </div>

                    <!-- 버튼영역 -->
                    <div class="button-area">
                        <button type="submit" id="btn-submit">회원정보수정</button>
                    </div>
                </form>
            </div>
            <!-- //modifyForm -->
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
import '@/assets/css/user.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppUserAside from '@/components/AppUserAside.vue'
import axios from 'axios';

export default{
    name : "ModifyFormView",
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
        getAuthUser(){ // 수정폼 - 한명 데이터 불러오기
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/users/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token 
                }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response.data); //수신데이타
                if(response.data.result == "success"){
                    this.userVo = response.data.apiData;
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }, // getAuthUser() 끝

        modifyUser(){ // 수정 
            axios({
                method: 'put', // put, post, delete
                url: 'http://localhost:9000/api/users/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response);
                if(response.data.result == "success"){ // 결과가 성공이면 vuex의 authUser의 name값을 바꿔준다.
                    this.$store.commit("setAuthUserName", this.userVo.name);
                    this.$router.push('/');
                } else{ // 결과가 실패면 vuex의 token,authUser 값 삭제, 로그인alert발동
                    this.$store.commit("setAuthUser", null);
                    this.$store.commit("setToken", null);
                    alert("로그인 하세요.");
                    this.$router.push('/user/loginform');
                }
            }).catch(error => {
                console.log(error);
            });
        } // modifyUser()끝 
    },    
    created (){
        if(this.$store.state.authUser != null){
            this.getAuthUser();
        } 
    }    
};   

</script>

<style>

</style>