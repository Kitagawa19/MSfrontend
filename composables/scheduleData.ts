export const scheduleData = () => {
  return useState('scheduledata', () => ref({
      scheduleDataList:[
          {title:"自己分析",description:"自己分析を始めて自分のキャリアの目標を明確にしよう",time:"3年生",},
          {title:"業界職種研究",description:"様々な業界について調べる事でいろいろな職種についてしりましょう",time:"3年生",},
          {title:"履歴書の準備",description:"就職活動・インターンに参加するための準備をしよう",time:"3年生",},
          {title:"企業のリストアップ・エントリー",description:"志望する企業をリストアップしてエントリーを始めましょう",time:"4年生",},
          {title:"就職説明会",description:"就職説明会やキャリアフェアに参加してネットワーキングを行いましょう",time:"4年生",}
      ]
  }))
}