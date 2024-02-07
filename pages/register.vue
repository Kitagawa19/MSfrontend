<script setup lang="ts">
//Error文は無視で大丈夫..


definePageMeta({
  layout: false,
});


//cssの読み込み
import '~/assets/css/default.css'

//定義
const userName = ref('')
const password = ref('')

//userNameとpasswordの値が空の場合の処理
const login = async () => {
  if (userName.value === '' || password.value === '') {
    alert('ユーザー名とパスワードを入力してください');
  } else {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/auth/users/', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName.value,
          password: password.value,
        }),
      });
      if (res.ok) {
        alert('登録しました');
        // トークンをlocalStorageに保存
        navigateTo('/');
      } else {
        alert('このパスワードは短すぎます。最低 8 文字以上必要です。');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <Container>
    <Card margin="t-4 b-4" text-alignment="center" style="width: 500px; margin: auto;" class="basicShadow">
      <CardImgTop margin="x-auto t-4" src="/icon.png" alt="..."
        style="width: 200px; height: 200px; object-fit: cover;" class="rounded-circle text-center" />
      <CardBody>
        <CardTitle>
          <h2>就活アシスタント</h2>
        </CardTitle>
        <CardText>
          <p><code>アカウント登録ページ</code></p>
        </CardText>
        <BInputGroup margin="b-4">
          <BInputGroupText>
            ユーザー名
          </BInputGroupText>
          <BFormInput size="lg" type="text" placeholder="入力してください" aria-label="userNameInput" v-model="userName" />
        </BInputGroup>
        <BInputGroup margin="b-4">
          <BInputGroupText>
            パスワード
          </BInputGroupText>
          <BFormInput size="lg" type="password" placeholder="入力してください" aria-label="userNameInput" v-model="password" />
        </BInputGroup>
        <b-button button="success" class="basicButton" margin="b-2" @click="login">
          <b-p margin="1">登録
            <BIcon margin="s-1" icon="bi:person-circle" />
          </b-p>
        </b-button>
      </CardBody>
    </Card>
    <p>ユーザー名: {{ userName }}</p>
    <p>パスワード: {{ password }}</p>
  </Container>
</template>
