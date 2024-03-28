<template>

<div id="wrap">

    <AppHeader />
    <!-- AppHeader -->

    <div id="container" class="clearfix">
        <div id="aside">
            <h2>게시판</h2>
            <ul>
                <li><router-link to="/board">일반게시판</router-link></li>
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
                <div id="list">
                    <form action="" method="">
                        <div class="form-group text-right">
                            <input type="text">
                            <button type="submit" id=btn_search>검색</button>
                        </div>
                    </form>
                    <table >
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>조회수</th>
                                <th>작성일</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list,i) in boardList" v-bind:key="i" >
                                <td>{{ list.no }}</td>
                                <td class="text-left"><router-link v-bind:to="`/board/read/${list.no}`" >{{ list.title }}</router-link></td>
                                <td>{{ list.name }}</td>
                                <td>{{ list.hit }}</td>
                                <td>{{ list.regDate }}</td>
                                <td v-if="this.$store.state.authUser != null && (this.$store.state.authUser.no == list.userNo)">
                                    <button type="button" v-on:click="deleteBoard" class="btn_s" v-bind:data-no="list.no" v-bind:data-num="i">삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <router-link v-if="this.$store.state.authUser != null" to="/board/writeform" id="btn_write">글쓰기</router-link>
                    </div>
                    <div class="clear"></div>
                    <div>
                        <button id="btn_moreBoard" type="button">글 가져오기</button>
                    </div>   
                </div>
                <!-- //list -->
            </div>
            <!-- //board -->
        </div>
        <!-- //content  -->
    </div>
    <!-- //container  -->
    <AppFooter />
    <!-- AppFooter -->
</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/board.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default{
    name : "BoardListView",
    components : {
        AppHeader,
        AppFooter
    },
    data (){
        return {
            boardList : []
        };
    },
    methods : {
       
        // 리스트 가져오기
        getBoardList(){
            // console.log("getBoardList");
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.boardList = response.data.apiData;
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }, // 리스트 가져오기 끝

        // 삭제버튼 클릭했을때
        deleteBoard(event){
            // console.log(event.target.dataset.num); // 삭제버튼 클릭했을때 배열의 i값
            // console.log(event.target.dataset.no); // 삭제버튼 클릭했을때 글의 no값

            axios({
                method: 'delete', // put, post, delete
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token 
                }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: event.target.dataset.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.boardList.splice(event.target.dataset.num, 1);
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        } // 삭제버튼 클릭했을때 끝
        
    },
    created (){
        this.getBoardList();
    }    
};
</script>

<style>

</style>