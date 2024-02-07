<script setup lang="ts">

const userContentInput = ref('')
const showStatus = ref("default");
const token = localStorage.getItem("authToken");
const username = localStorage.getItem("username");

const send = async () => {
    if(userContentInput.value === ''){
        alert('意見を入力してください');
    }else{
        try{
            const res = await fetch("http://127.0.0.1:8000/opinion/",{
                method: "POST",
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: userContentInput.value,
                    username: username,
                }),
            });
            if(res.ok){
                console.log("ok");
                alert("送信しました");
                showStatus.value = "default";
                userContentInput.value = "";
        }else{
            throw new Error("Server response was not ok");
        }
    }catch(error){
        console.error(error);
        alert("エラーが発生しました");
        showStatus.value = "default";
        }
    }
}
</script>
<template>
    <Container class="ultimate-margin-top">
        <Card margin="t-4 b-4" text-alignment="center" style="width: 500px; margin: auto;" >
            <CardBody>
                <CardTitle>
                    <h2>意見送信フォーム</h2>
                </CardTitle>
                <CardText>
                    <p><code>自分が知りたい情報やほしい情報など意見を書いてください</code></p>
                </CardText>
                <BInputGroup margin="b-4">
                    <BInputGroupText>
                        意見
                    </BInputGroupText>
                    <BFormInput size="lg" type="text" placeholder="入力してください" aria-label="userInput" v-model="userContentInput" />
                </BInputGroup>
                <b-button button="success" class="basicButton" margin="b-2" @click="send">
                    <b-p margin="1">送信する
                        <BIcon margin="s-1" icon="bi:person-circle" />
                    </b-p>
                </b-button>
            </CardBody>
        </Card>
    </Container>
</template>

<style scoped>
.ultimate-margin-top {
    margin-top: 90px;
}
</style>