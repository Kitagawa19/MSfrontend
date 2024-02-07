<script setup lang="ts">
useHead({
  title: "AI質問",
});

//composablesの読み込み
const Chat = userChatData();

const userInputText = ref("");

const showStatus = ref("default");
const token = localStorage.getItem("authToken");
const username = localStorage.getItem("username");
//console.log(username);
//送信ボタンを押した時の処理
const send = async (text: string) => {
  sendButtonDisabled.value = true;
  if (userInputText.value === "") {
    alert("何か入力してください");
  } else {
    try {
      showStatus.value = "loading";
      addUserTextData(text);
      scroll();
      //ここら辺にChatGptのやつ書いて、
      const res = await fetch("http://127.0.0.1:8000/chat_app/",{
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInputText: userInputText.value,
          username: username,
        }),
      });
      if(res.ok){
        const data = await res.json();
        AiUserTextData(data.answer);
        showStatus.value = "default";
        userInputText.value = "";
      }else{
        throw new Error("Server response was not ok");
      }
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
      showStatus.value = "default";
    } finally {
      sendButtonDisabled.value = false;
    }
  }
};

//ユーザーのテキストデータを追加する処理
const addUserTextData = (text: string) => {
  if (Chat && Chat.value) {
    Chat.value.dataList.push({
      type: "user",
      text: text,
    });
  }
};

//AIのテキストデータを追加する処理
const AiUserTextData = (text: string) => {
  if (Chat && Chat.value) {
    Chat.value.dataList.push({
      type: "ai",
      text: text,
    });
  }
};

//画面下にスクロールする処理
const scroll = () => {
  window.scrollTo(0, document.documentElement.scrollHeight);
};
//送信中にボタンを押せないようにする処理
const sendButtonDisabled = ref(false);
</script>

<template>
  <Container class="ultimate-margin">
    <Row align-items="center">
      <TransitionGroup name="fade" tag="div">
        <div v-for="data in Chat.dataList" :key="data.text">
          <Col
            align-self="center"
            margin="t-4"
            col="auto"
            offset="md-5"
            v-if="data.type === 'user'"
            class="user-text-border"
          >
            <BH6 class="text-right"
              >あんた:<BIcon margin="s-1" icon="bi:person-circle"
            /></BH6>
            <BH5 margin="t-2" class="userChat">{{ data.text }}</BH5>
          </Col>
          <Col
            align-self="center"
            margin="t-4"
            col="md-7"
            v-else
            class="ai-text-border"
          >
            <BH6
              ><BIcon margin="e-1" icon="bi:wrench-adjustable-circle" />:AI</BH6
            >
            <BH5 class="aiChat">{{ data.text }}</BH5>
          </Col>
        </div>
        <Col
          margin="t-4"
          col="7"
          class="ai-text-border"
          v-if="showStatus === 'loading'"
        >
          <BH6
            ><BIcon margin="e-1" icon="bi:wrench-adjustable-circle" />:AI</BH6
          >
          <BH5 class="aiChat"
            ><Spinner margin="s-2 e-2" padding="2"></Spinner
            >考え中なの・・・！</BH5
          >
        </Col>
      </TransitionGroup>
      <BInputGroup size="lg" class="textBox">
        <BInputGroupText margin="s-4" id="BInputGroup-sizing-lg"
          >あなた</BInputGroupText
        >
        <input type="text" class="form-control" id="userInput" name="userInput" v-model="userInputText" />
        <b-button
          @click="send(userInputText)"
          margin="e-4"
          button="success"
          type="button"
          class="basicButton"
          :disabled="sendButtonDisabled"
        >
          送信ですの<BIcon margin="s-3" icon="bi:arrow-up-circle-fill"
        /></b-button>
      </BInputGroup>
    </Row>
  </Container>
</template>

<style scoped>
.textBox {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #3a3a3a;
  padding: 1%;
}

.ai-text-border {
  border: 1px solid #25d58f;
  border-radius: 10px;
  padding: 10px;
}

.user-text-border {
  border: 1px solid #25acd5;
  border-radius: 10px;
  padding: 10px;
}

.text-right {
  text-align: right;
}

.ultimate-margin {
  margin-top: 60px;
  margin-bottom: 400px;
}

</style>
