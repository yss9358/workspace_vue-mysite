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
                        <button type="button" id="btnImgUpload" v-if="this.$store.state.authUser != null" v-on:click="imgUpload">이미지올리기</button>
                        <div class="clear"></div>
                    <ul id="viewArea">                 
                        <!-- 이미지반복영역 -->
                            <li v-bind:key="i" v-for="(img, i) in imgList">
                                <div class="view" >
                                    <img class="imgItem" v-bind:src="`http://localhost:9000/image/${img.saveName}`" v-on:click="showImage" v-bind:data-imgno="i">
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

            <!-- 이미지 등록 팝업(모달) -->
            <div id="addModal" class="modal">
                <div class="modal-content">
                    <form v-on:submit.prevent="saveFile" enctype="multipart/form-data">
                        <div class="closeBtn" v-on:click="closeBtn">×</div>
                        <div class="m-header">이미지등록</div>
                        <div class="m-body">
                            <div>
                                <label class="form-text">글작성</label> 
                                <input id="addModalContent" type="text" name="content" v-model="content">
                            </div>
                            <div class="form-group">
                                <label class="form-text">이미지선택</label> 
                                <input id="file" type="file" name="file" v-on:change="selectFile">
                            </div>
                        </div>
                        <div class="m-footer">
                        <button type="submit">저장</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- //이미지 등록 팝업(모달) -->
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
            imgList : [],
            content : "",
            file : ""
        };
    },
    methods : {
        // 리스트 가져오기
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
        }, // 리스트 가져오기 끝

        // 이미지 보기
        showImage(event){
            console.log(event.target.dataset.imgno);
        }, // 이미지 보기 끝

        // 이미지 올리기 버튼 선택했을때 
        imgUpload (){
            let addModal = document.querySelector("#addModal");
            addModal.style.display = "block";
        }, // 이미지 올리기 버튼 선택했을때 끝
        
        // 닫기 버튼 눌렀을때
        closeBtn(){
            let addModal = document.querySelector("#addModal");
            addModal.style.display = "none";
        },
        // 닫기 버튼 눌렀을때 끝

        // 파일 선택했을때 
        selectFile(event) {
            this.file = event.target.files[0];
        },
        // 파일 선택했을때 끝

        // 이미지 저장
        saveFile(){
            let formData = new FormData();
            formData.append("file",this.file);
            formData.append("content",this.content);
            formData.append("userNo",this.$store.state.authUser.no);
            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/galleries',
                headers: { "Content-Type": "multipart/form-data",
                           "Authorization": "Bearer " + this.$store.state.token,
                }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.result);
                console.log(response.data.apiData);
                if(response.data.result == "success"){
                    this.imgList.push(response.data.apiData);
                    this.file = null;
                    this.content = null;
                    this.closeBtn();
                } else {
                    this.file = null;
                    this.content = null;
                    this.closeBtn();
                    alert(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        } // 이미지 저장끝
    },
    created (){
        this.getAttachList();
    }    
};
</script>

<style>
.modal {
    display: none;
    width : 100%;
    height : 100%;
    position : fixed;
    left : 0;
    top : 0;
    z-index: 999;
    overflow : auto;
    background-color: rgba(0,0,0,0.4);
}

.modal .modal-content {
    width : 500px;
    margin: 100px auto 100px auto;
    padding : 0px 20px 20px 20px;
    background-color: #ffffff;
    border: 1px solid #888888;
}

.modal .modal-content .closeBtn {
    text-align: right;
    color : #aaaaaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

</style>