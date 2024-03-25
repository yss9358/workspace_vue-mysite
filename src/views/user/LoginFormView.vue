<template>
<div id="wrap">

    <div id="header" class="clearfix">
        <h1>
            <a href="">MySite</a>
        </h1>

        <!-- 
        <ul>
            <li>황일영 님 안녕하세요^^</li>
            <li><a href="" class="btn_s">로그아웃</a></li>
            <li><a href="" class="btn_s">회원정보수정</a></li>
        </ul>
        -->	
        <ul>
            <li><a href="" class="btn_s">로그인</a></li>
            <li><a href="" class="btn_s">회원가입</a></li>
        </ul>
        
    </div>
    <!-- //header -->

    <div id="nav">
        <ul class="clearfix">
            <li><a href="">입사지원서</a></li>
            <li><a href="">게시판</a></li>
            <li><a href="">갤러리</a></li>
            <li><a href="">방명록</a></li>
        </ul>
    </div>
    <!-- //nav -->

    <div id="container" class="clearfix">
        <div id="aside">
            <h2>회원</h2>
            <ul>
                <li>회원정보</li>
                <li>로그인</li>
                <li>회원가입</li>
            </ul>
        </div>
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

    <div id="footer">
        Copyright ⓒ 2024 유승수. All right reserved
    </div>
    <!-- //footer -->

</div>
<!-- //wrap -->

</template>

<script>
import axios from 'axios'
import "@/assets/css/user.css"

export default{
    name : "Ex00View",
    components : {},
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
                let authUser = response.data;
                this.$store.commit("setAuthUser",response.data);// vuex에 저장
                
                // token은 응답문서의 헤더에 있음. "Authorization", "Bearer" + ""
                const token = response.headers.authorization.split(" ")[1];
                this.$store.commit("setToken", token);// vuex에 저장

                console.log(authUser);
                console.log(token);
                
                this.$router.push('/');

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created (){

    }    
}
</script>

<style>

</style>