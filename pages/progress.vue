<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

let showContent = ref(false);
let studentData = reactive({ students: [] });
const token = localStorage.getItem("authToken");
const username = localStorage.getItem("username");

//username '00'を一旦教師用アカウントとして使う
onMounted(async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/schedule/", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        studentData.students = data;
        if (username === 'ktc') {
            showContent.value = true;
        }
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <Container class="ultimate-margin-top">
        <b-h2>生徒の進捗状況</b-h2>
        <div v-if="showContent">
            <div v-for="student in studentData.students" :key="student.id">
            <h2>{{ student.username }}</h2>
            <p>{{ student.title }}</p>
            <p>{{ student.message }}</p>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.ultimate-margin-top {
    margin-top: 100px;
}
</style>
```