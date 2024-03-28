<template>
<div id="wrap">

    <AppHeader/>

    <div id="container" class="clearfix">
        <div id="aside">
            <h2>방명록</h2>
            <ul>
                <li>일반방명록</li>
                <li>ajax방명록</li>
            </ul>
        </div>
        <!-- //aside -->

        <div id="content">
            
            <div id="content-head" class="clearfix">
                <h3>일반방명록</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>방명록</li>
                        <li class="last">일반방명록</li>
                    </ul>
                </div>
            </div>
            <!-- //content-head -->

            <div id="guestbook">
                <form v-on:submit.prevent="guestAdd">
                    <table id="guestAdd">
                        <colgroup>
                            <col style="width: 70px;">
                            <col>
                            <col style="width: 70px;">
                            <col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><label class="form-text" for="input-uname">이름</label></th>
                                <td><input id="input-uname" type="text" name="name" v-model="guestVo.name"></td>
                                <th><label class="form-text" for="input-pass">패스워드</label></th>
                                <td><input id="input-pass" type="password" name="password" v-model="guestVo.password"></td>
                            </tr>
                            <tr>
                                <td colspan="4"><textarea name="content" cols="72" rows="5" v-model="guestVo.content"></textarea></td>
                            </tr>
                            <tr class="button-area">
                                <td colspan="4" class="text-center"><button type="submit">등록</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- //guestWrite -->
                </form>	
                    <table class="guestRead" v-for="(listVo, i) in guestList" v-bind:key="i">
                        <colgroup>
                            <col style="width: 10%;">
                            <col style="width: 40%;">
                            <col style="width: 40%;">
                            <col style="width: 10%;">
                        </colgroup>
                        <tr>
                            <td>{{ listVo.no }}</td>
                            <td>{{ listVo.name }}</td>
                            <td>{{ listVo.regDate }}</td>
                            <td><router-link v-bind:to='`/gb/deleteform/${listVo.no}`'>[삭제]</router-link></td>
                        </tr>
                        <tr>
                            <td colspan=4 class="text-left">{{ listVo.content }}</td>
                        </tr>
                    </table>
                <!-- //guestRead -->
            </div>
            <!-- //guestbook -->
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
import '@/assets/css/guestbook.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import axios from 'axios';

export default{
    name : "AddListView",
    components : {
        AppHeader,
        AppFooter
    },
    data (){
        return {
            guestVo : {},
            guestList : []
        };
    },
    methods : {
        guestAdd(){
            // console.log("guestAdd");
            // console.log(this.guestVo);
            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.guestList.unshift(response.data.apiData);
                    this.guestVo.name = null;
                    this.guestVo.password = null;
                    this.guestVo.content = null;
                } else {
                    this.guestVo.name = null;
                    this.guestVo.password = null;
                    this.guestVo.content = null;
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getList(){
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.apiData != null){
                    this.guestList = response.data.apiData;
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created (){
        this.getList();
    }    
};
</script>

<style>

</style>