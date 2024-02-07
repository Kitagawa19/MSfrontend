<script setup lang="ts">
useHead({
  title: "ホーム",
});

const userName = ref("");
//usernameをローカルストレージから取得
onMounted(() => {
  userName.value = localStorage.getItem("username")!;
});
//ログアウトはlocalStorageのデータを削除するだけで完成
</script>

<template>
  <Container class="ultimate-margin-top">
    <br />
    <b-h2 margin="t-4">機能一覧</b-h2>
    <hr />
    <Row columns="1 md-3" :gutter="4" margin="t-4 b-4">
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle>AI相談<BIcon margin="s-1" icon="bi:robot" /></CardTitle>
            <CardText> 独自でチューニングしたAIが悩みや質問に乗ってくれます </CardText>
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/ai_question"
            >
              <b-p margin="1">
                試してみる
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle
              >ES添削<BIcon margin="s-1" icon="bi:file-earmark-person-fill"
            /></CardTitle>
            <CardText>文章校正にも使えるES添削ができます</CardText>
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/es_correction"
            >
              <b-p margin="1">
                試してみる
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle
              >スケジュール<BIcon margin="s-1" icon="bi:clock"
            /></CardTitle>
            <CardText
              >スケジュールを確認しながら、余裕のある就職活動を行いましょう</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/schedule"
            >
              <b-p margin="1">
                試してみる
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>データはサーバーに保存されます</small
            >
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle
              >面談<BIcon margin="s-1" icon="bi:person-fill-exclamation"
            /></CardTitle>
            <CardText
              >オンラインでの面談なので無駄な時間が無く相談可能です</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to=""
            >
              <b-p margin="1">
                面談する
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>予約サイトに飛びます</small>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle
              >企業情報<BIcon margin="s-1" icon="bi:building-fill"
            /></CardTitle>
            <CardText
              >Teamsに載せられている企業情報を簡単に検索できます</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/inturn"
            >
              <b-p margin="1">
                検索する
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">
          <CardBody>
            <CardTitle
              >意見送信フォーム<BIcon margin="s-1" icon="bi:mailbox"
            /></CardTitle>
            <CardText
              >キャリアセンターの方に何か要望があればいつでも送ってください</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/forms"
            >
              <b-p margin="1">
                確認する
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
    </Row>
      <br />
      <b-h2 margin="t-4">管理者専用機能一覧</b-h2>
      <hr />
    <Row columns="1 md-3" :gutter="4" margin="t-4 b-4">
      <Col>
        <Card text-alignment="center" class="lightShadow">
          <CardBody>
            <CardTitle
              >生徒の進捗状況<BIcon margin="s-1" icon="bi:clock"
            /></CardTitle>
            <CardText
              >生徒の進捗状況を確認できます <br> 管理者以外見れません</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/progress"
            >
              <b-p margin="1">
                確認する
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
      <Col>
        <Card text-alignment="center" class="lightShadow">

          <CardBody>
            <CardTitle
              >生徒の求める意見<BIcon margin="s-1" icon="bi:mailbox"
            /></CardTitle>
            <CardText
              >生徒の意見を確認できます<br>管理者以外見れません</CardText
            >
            <b-a
              button="success"
              class="basicButton"
              margin="b-2"
              to="/opinion_box"
            >
              <b-p margin="1">
                確認する
                <BIcon margin="s-1" icon="bi:arrow-right" />
              </b-p>
            </b-a>
          </CardBody>
          <CardFooter text-color="muted">
            <small>随時更新中</small>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </Container>
</template>

<style scoped>
.ultimate-margin-top {
  margin-top: 50px;
}
</style>
