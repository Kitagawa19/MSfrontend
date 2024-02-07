<script setup lang="ts">
useHead({
  title: "ES添削",
});
const userEsData = esData();

const userInputES = ref("");

const showStatus = ref("start");
const token = localStorage.getItem("authToken");
const username = localStorage.getItem("username");

//採点ボタンを押した際の処理
const send = async (text: string) => {
  if (userInputES.value === "") {
    alert("何か入力してください");
  } else {
    try {
      showStatus.value = "loading";
      //ここら辺にChatGptのやつ書いて、
      const res = await fetch("https://ktc-chat.azurewebsites.net/chat_app/",{
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInputText: userInputES.value,
          username: username,
        }),
      });
      if(res.ok){
        showStatus.value = "end";
        const data = await res.json();
        addEsData(data.answer);
        userInputES.value = "";
      }else{
        throw new Error("Server response was not ok");
      }
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
      showStatus.value = "start";
    } 
  }
};

const addEsData = (
  text: string,
) => {
  userEsData.value.text = text;
};

//再採点ボタンを押した際の処理
const retry = () => {
  showStatus.value = "start";
};
</script>

<template>
  <Container class="ultimate-margin">
    <Transition name="card">
      <div v-if="showStatus === 'start'">
          <BH3>ここに入力してください</BH3>
          <hr />
          <BInputGroup size="lg" margin="b-4">
            <input class="form-control" type="text" v-model="userInputES" />
            <b-button
              @click="send(userInputES)"
              margin=""
              button="success"
              type="button"
              class="basicButton"
            >
              添削
              <BIcon margin="s-3" icon="bi:file-check-fill" />
            </b-button>
          </BInputGroup>
          <BH5>下に添削結果が表示されます</BH5>
      </div>
    </Transition>
    <!-- v-ifの値によって変化するよ～。Scriptを^~ -->
    <!-- ロード中の画面 -->
    <Transition name="card">
      <div v-if="showStatus === 'loading'" class="spinner-container">
        <Spinner margin="5"></Spinner>
        <b-p text-alignment="center"> お待ちを～ </b-p>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="showStatus === 'end'">
        <!-- <div v-if="showStatus === 'end'"> -->
        <Card margin="t-2 b-3" class="easypadding">
          <CardHeader>
            添削結果
            <BIcon icon="bi:file-earmark-text-fill" />
          </CardHeader>
          <CardText margin="s-2 t-2 b-2">{{ userEsData.text }}</CardText>
          <CardFooter>※AIによる採点なので過信しない方がいいです。</CardFooter>
        </Card>
        <BH3>講評</BH3>
        <hr />
        <b-p>なんかもうちょっとがんばれ</b-p>
        <b-button
          button="success"
          type="button"
          class="basicButton"
          @click="retry"
          >もう一度採点する</b-button
        >
      </div>
    </Transition>
  </Container>
</template>

<style scoped>
.ultimate-margin {
  margin-top: 100px;
}

.card-enter-active,
.card-leave-active {
  transition: opacity 0.3s;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
}

.card-leave-active {
  position: absolute;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 画面全体の高さに設定 */
}
</style>
