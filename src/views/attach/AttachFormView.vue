<template>

<div id="wrap">

    <AppHeader />

    <div id="container" class="clearfix">
        <AppAttachAside />
        <!-- //aside -->

        <div id="content">

            <div id="content-head">
                <h3>첨부파일연습</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>갤러리</li>
                        <li class="last">첨부파일연습</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="file">
                <form v-on:submit.prevent="uploadFile" enctype="multipart/form-data">
                    <table>
                        <colgroup>
                            <col style="width: 600px;">
                            <col style="width: 220px;">
                        </colgroup>
                        <tr>
                            <!-- 파일업로드 이벤트잡기 - v-on:change -->
                            <td class="text-left"><input v-on:change="selectFile" type="file" name="file"></td>
                            <td v-if="this.$store.state.authUser != null" class="text-right"><button type="submit">파일업로드</button></td>
                        </tr>
                    </table>
                </form>
            </div>
            <!-- //file -->
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
import '@/assets/css/gallery.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAttachAside from '@/components/AppAttachAside.vue'
import axios from 'axios';

export default{
    name : "AttachFormView",
    components : {
        AppHeader,
        AppFooter,
        AppAttachAside
    },
    data (){
        return {
            file : ""
        };
    },
    methods : {
        // 파일을 선택했을때
        selectFile(event){
            // console.log("selectFile")
            // 파일은 배열로 선택됨. -> 0번째방이 첫번째 파일
            this.file = event.target.files[0];
            // console.log(this.file);
        }, 

        // 파일 올리기
        uploadFile(){
            // console.log("uploadFile");

            // 데이터 서버전송용 폼데이터를 메모리에 올린다
            let formData = new FormData();
            formData.append("file", this.file);
            formData.append("userNo", this.$store.state.authUser.no);
            // -> data로 보낸다. (json방식이 아님.)

            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9000/api/attach',
                headers: {  "Content-Type": "multipart/form-data"
                }, // 파일을 보낼때는 멀티파트로 바꿔준다.
                // params: guestbookVo, 
                data: formData, // 데이터를 폼데이터로 작성

                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == "success"){
                    // 받아온 데이터를 넘겨야해서 따로 저장
                    this.$router.push(
                        {
                            path : '/attach/result',
                            query : {saveName : response.data.apiData}
                        }
                    );
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