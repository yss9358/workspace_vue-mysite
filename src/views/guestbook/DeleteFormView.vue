<template>

<div id="wrap">

    <AppHeader />
    <!-- // header -->

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
        
            <div id="content-head">
                <h3>일반방명록</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>방명록</li>
                        <li class="last">일반방명록</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="guestbook">
                <form v-on:submit.prevent="deleteOne">
                    <table id="guestDelete">
                        <colgroup>
                            <col style="width: 10%;">
                            <col style="width: 40%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                        </colgroup>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="password" v-model="guestVo.password"></td>
                            <td class="text-left"><button type="submit">삭제</button></td>
                            <td><router-link to="/guestbook">[방명록으로 돌아가기]</router-link></td>
                        </tr>
                    </table>
                </form>
            </div>
            <!-- //guestbook -->
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
import '@/assets/css/guestbook.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default{
    name : "DeleteFormView",
    components : {
        AppHeader,
        AppFooter
    },
    data (){
        return {
            guestVo : {
                password: "",
                no : this.$route.params.no
            }
        };
    },
    methods : {
        deleteOne(){
            axios({
                method: 'delete', // put, post, delete
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response);
                if(response.data.result == "success"){
                    this.guestVo.password = null;
                    this.$router.push('/guestbook');
                } else {
                    this.guestVo.password = null;
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