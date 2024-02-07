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
      const res = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName.value,
          password: password.value,
        }),
      });
      if (res.ok) {
        const token = await res.json(); // Djangoから返されたトークンを取得
        // トークンをlocalStorageに保存
        localStorage.setItem('authToken', token.access);
        localStorage.setItem('username', userName.value);
        navigateTo('/homepage');
      } else {
        alert('ログインに失敗しました');
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
          <p><code>ログインページ</code></p>
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
          <b-p margin="1">ログイン
            <BIcon margin="s-1" icon="bi:person-circle" />
          </b-p>
        </b-button>
        <CardText margin="2">
          <b-a to="/register">アカウント登録はこちら☜</b-a>
        </CardText>
      </CardBody>
    </Card>
  </Container>
</template>
