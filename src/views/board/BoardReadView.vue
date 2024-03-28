<template>

<div id="wrap">

    <AppHeader />
    <!-- //header -->

    <div id="container" class="clearfix">
        <div id="aside">
            <h2>게시판</h2>
            <ul>
                <li><a href="">일반게시판</a></li>
                <li><a href="">댓글게시판</a></li>
            </ul>
        </div>
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
                <div id="read">
                    <form aciton="" method="">
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
                            <span class="form-text">제 목</span>
                            <span class="form-value">{{ boardVo.title }}</span>
                        </div>
                    
                        <!-- 내용 -->
                        <div id="txt-content">
                            <span class="form-value" >
                                {{ boardVo.content }}
                            </span>
                        </div>
                        
                        <router-link v-if="(this.$store.state.authUser.no) == (boardVo.userNo)" id="btn_modify" v-bind:to="`/board/modifyform/${boardVo.no}`">수정</router-link>
                        <router-link id="btn_modify" to="/board">목록</router-link>
            
                    </form>
                    <!-- //form -->
                </div>
                <!-- //read -->
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
import axios from 'axios';

export default{
    name : "BoardReadView",
    components : {
        AppHeader,
        AppFooter
    },
    data (){
        return {
            boardVo : {}
        };
    },
    methods : {
        // 한명데이터 가져오기
        getBoardOne(){
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/boards/read',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: this.$route.params, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.boardVo = response.data.apiData
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });

        }// 한명데이터 가져오기 끝
    }, 

    created (){
        this.getBoardOne();
    }    
};
</script>

<style>

</style>