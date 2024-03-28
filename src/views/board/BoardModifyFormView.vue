<template>

<div id="wrap">

    <AppHeader />
    <!-- AppHeader -->

    <div id="container" class="clearfix">
        <AppBoardAside />
        <!-- //aside -->

        <div id="content">

            <div id="content-head">
                <h3>일반게시판</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>게시판</li>
                        <li class="last">일반게시판</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="board">
                <div id="modifyForm">
                    <form v-on:submit.prevent="modifyBoard">
                        <!-- 작성자 -->
                        <div class="form-group">
                            <span class="form-text">작성자</span>
                            <span class="form-value">{{ boardVo.name }}</span>
                        </div>
                        
                        <!-- 조회수 -->
                        <div class="form-group">
                            <span class="form-text">조회수</span>
                            <span class="form-value">{{ boardVo.hit }}</span>
                        </div>
                        
                        <!-- 작성일 -->
                        <div class="form-group">
                            <span class="form-text">작성일</span>
                            <span class="form-value">{{ boardVo.regDate }}</span>
                        </div>
                        
                        <!-- 제목 -->
                        <div class="form-group">
                            <label class="form-text" for="txt-title">제목</label>
                            <input type="text" id="txt-title" name="title" v-model="boardVo.title">
                        </div>

                        <!-- 내용 -->
                        <div class="form-group">
                            <textarea id="txt-content" v-model="boardVo.content">
                               
                            </textarea>
                        </div>
                        
                        <router-link v-bind:to="`/board/read/${boardVo.no}`" id="btn_cancel">취소</router-link>
                        <button v-if="(this.$store.state.authUser.no) == boardVo.userNo" id="btn_modify" type="submit">수정</button> 
                    </form>
                    <!-- //form -->
                </div>
                <!-- //modifyForm -->
            </div>
            <!-- //board -->
        </div>
        <!-- //content  -->
    </div>
    <!-- //container  -->
    <AppFooter />
    <!-- //footer -->
</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/board.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppBoardAside from '@/components/AppBoardAside.vue'
import axios from 'axios';

export default{
    name : "BoardModifyFormView",
    components : {
        AppHeader,
        AppFooter,
        AppBoardAside
    },
    data (){
        return {
            boardVo : {}
        };
    },
    methods : {
        // 수정폼 
        modifyForm(){
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/boards/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                params: this.$route.params, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.boardVo = response.data.apiData;
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }, // 수정폼 끝

        // 수정
        modifyBoard(){
            axios({
                method: 'put', // put, post, delete
                url: 'http://localhost:9000/api/boards/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                // params: this.$route.params, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.boardVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.$router.push('/board');
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });

        } // 수정 끝
    },
    created (){
        this.modifyForm();
        
    }    
};
</script>

<style>

</style>