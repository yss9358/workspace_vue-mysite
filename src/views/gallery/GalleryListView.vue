<template>

<div id="wrap">

    <AppHeader />

    <div id="container" class="clearfix">
        <AppAttachAside />
        <!-- //aside -->
        
        <div id="content">
            <div id="content-head">
                <h3>일반갤러리</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>갤러리</li>
                        <li class="last">일반갤러리</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->
            
            <div id="gallery">
                <div id="list">            
                        <button v-if="this.$store.state.authUser != null" id="btnImgUpload">이미지올리기</button>
                        <div class="clear"></div>
                    <ul id="viewArea">                 
                        <!-- 이미지반복영역 -->
                            <li v-bind:key="i" v-for="(img, i) in imgList">
                                <div class="view" >
                                    <img class="imgItem" v-bind:src="`http://localhost:9000/image/${img.saveName}`">
                                    <div class="imgWriter">작성자: <strong>{{ img.name }}</strong></div>
                                    <input type="hidden" name="userNo" v-model="img.userNo">
                                </div>
                            </li>
                        <!-- 이미지반복영역 -->    
                    </ul>
                </div>
                <!-- //list -->
            </div>
            <!-- //	gallery -->
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
import '@/assets/css/gallery.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAttachAside from '@/components/AppAttachAside.vue';
import axios from 'axios';

export default{
    name : "GalleryListView",
    components : {
        AppHeader,
        AppFooter,
        AppAttachAside
    },
    data (){
        return {
            imgList : []
        };
    },
    methods : {
        getAttachList(){
            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/galleries',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                // data: this.guestVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    this.imgList = response.data.apiData;
                } else {
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created (){
        this.getAttachList();
    }    
};
</script>

<style>

</style>