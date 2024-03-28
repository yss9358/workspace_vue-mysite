<template>

<div id="wrap">

    <AppHeader />
    <!-- appheader -->

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
                <div id="writeForm">
                    <form v-on:submit.prevent="boardWrite">
                        <!-- 제목 -->
                        <div class="form-group">
                            <label class="form-text" for="txt-title">제목</label>
                            <input type="text" id="txt-title" name="" v-model="boardVo.title" placeholder="제목을 입력해 주세요">
                        </div>
                    
                        <!-- 내용 -->
                        <div class="form-group">
                            <textarea id="txt-content" v-model="boardVo.content"></textarea>
                        </div>
                        
                        <router-link to="/board" id="btn_cancel">취소</router-link>
                        <button id="btn_add" type="submit">등록</button>
                    </form>
                    <!-- //form -->
                </div>
                <!-- //writeForm -->
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
    name : "BoardWriteFormView",
    components : {
        AppHeader,
        AppFooter,
        AppBoardAside
    },
    data (){
        return {
            boardVo : {
                userNo : this.$store.state.authUser.no,
                title : "",
                content : ""
            }
        };
    },
    methods : {
        boardWrite(){
            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.boardVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.boardVo.title = null;
                    this.boardVo.content = null;
                    this.$router.push('/board');
                } else {
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