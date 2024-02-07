<script setup lang="ts">
import '~/assets/css/default.css'
const InturnData = inturnData();

let nameSearchQuery = ref(''); // 名前検索クエリ
let tagSearchQuery = ref(''); // タグ検索クエリ

const filteredData = computed(() => {
    return InturnData.value.DataList.filter(data =>
        (data.name.includes(nameSearchQuery.value) || !nameSearchQuery.value) &&
        (data.tag.includes(tagSearchQuery.value) || !tagSearchQuery.value)
    );
});

const tags = computed(() => {
    const allTags = InturnData.value.DataList.flatMap(data => data.tag);
    return Array.from(new Set(allTags));
});
</script>
<template>
    <Container class="ultimate-margin-top">
        <b-h2>企業情報一覧</b-h2>
        <hr />
        <BInputGroup margin="b-3" style="width: 50%;">
            <BFormInput v-model="nameSearchQuery" placeholder="企業名で検索" />
            <BFormSelect v-model="tagSearchQuery">
                <option value="">全て</option>
                <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
            </BFormSelect>
        </BInputGroup>
        <Row>
            <TransitionGroup name="fade" tag="div">
                <div v-for="data in filteredData" :key="data.name">
                    <Col>
                    <Alert theme="light">
                        <Row>
                            <Col>
                            <BH4><a :href=data.url target="_blank" rel="noopener noreferrer">{{ data.name }}</a></BH4>
                            <br />
                            {{ data.tag }}</Col>
                            <Col>{{ data.description }}</Col>
                        </Row>
                    </Alert>
                    </Col>
                </div>
            </TransitionGroup>
        </Row>
    </Container>
</template>
<style scoped>
.ultimate-margin-top {
    margin-top: 100px;
}
</style>
```