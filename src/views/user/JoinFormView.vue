<template>

<div id="wrap">

    <AppHeader/>
    <!-- header -->

    <div id="container" class="clearfix">
        <AppUserAside/>
        <!-- //aside -->

        <div id="content">
        
            <div id="content-head">
                <h3>회원가입</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>회원</li>
                        <li class="last">회원가입</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="user">
                <div id="joinForm">
                    <form v-on:submit.prevent="join">

                        <!-- 아이디 -->
                        <div class="form-group">
                            <label class="form-text" for="input-uid">아이디</label> 
                            <input type="text" id="input-uid" name="id" v-model="userVo.id" placeholder="아이디를 입력하세요">
                            <button type="button" id="">중복체크</button>
                        </div>

                        <!-- 비밀번호 -->
                        <div class="form-group">
                            <label class="form-text" for="input-pass">패스워드</label> 
                            <input type="text" id="input-pass" name="password" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
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

                        <!-- 약관동의 -->
                        <div class="form-group">
                            <span class="form-text">약관동의</span> 
                            
                            <input type="checkbox" id="chk-agree" value="" name="">
                            <label for="chk-agree">서비스 약관에 동의합니다.</label> 
                        </div>
                        
                        <!-- 버튼영역 -->
                        <div class="button-area">
                            <button type="submit" id="btn-submit">회원가입</button>
                        </div>
                        
                    </form>
                </div>
                <!-- //joinForm -->
            </div>
            <!-- //user -->
        </div>
        <!-- //content  -->
    </div>
    <!-- //container  -->

    <AppFooter/>
    <!-- //footer -->

</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/user.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppUserAside from '@/components/AppUserAside.vue';
import axios from 'axios';

export default{
    name : "JoinFormView",
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
        join(){
            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/users/join',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    // console.log("성공");
                    this.$router.push('/user/joinok');
                } else {
                    this.userVo = null;
                    this.$router.push('/user/joinform');
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