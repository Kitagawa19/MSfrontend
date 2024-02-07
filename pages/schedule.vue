<script setup lang="ts">
useHead({
  title: "スケジュール",
});

const Data = scheduleData()
const userSData = userScheduleData()
const token = localStorage.getItem("authToken");
const username = localStorage.getItem("username");

const nextProgression = () => {
    userSData.value.progression++
} 

const previousProgression = () => {
    userSData.value.progression--
} 

const send = async (userSData: any) => {
  let item = Data.value.scheduleDataList[userSData.progression];
    try {
        const res = await fetch("http://127.0.0.1:8000/schedule/",{
          method: "POST",
          headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: item.title,
            description: item.description,
            time: item.time,
            username: username,
          }),
        });
      if(res.ok){
        console.log("ok");
        }else{
          throw new Error("Server response was not ok");
    } }catch (error) {
        console.error(error);
        alert("エラーが発生しました");
      }
    };
</script>

<template>
    <Container class="ultimate-margin-top">
        <div>進行度:{{ userSData.progression }}</div>
        <div>次の目標:{{ Data.scheduleDataList[userSData.progression].title }}</div>
        <div>期限: {{ Data.scheduleDataList[userSData.progression].time }}</div>
        <div>内容: {{ Data.scheduleDataList[userSData.progression].description }}</div>
        <Row justify-content="md-center">
          <Col>
              <b-button button="primary" @click="nextProgression">Next Step</b-button>
          </Col>
          <Col>
              <b-button button="primary" @click="previousProgression">Previous Step</b-button>
          </Col>
          <Col>
            <b-button button="success" class="basicButton"  @click="send(userSData)">次の目標に進んだら押してね</b-button>
          </Col>
        </Row>
    </Container>
</template>

<style scoped>
.ultimate-margin-top {
  margin-top: 90px;
}
</style>