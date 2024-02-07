
export const userChatData = () => {
  return useState('chatdata', () => ref({
      dataList:[
          {type:"user",text:'おはよう'},
          {type:"ai",text:'おはようございます！京都テックのKyotoTECH君で す。何かお手伝いできますか？'},
      ]
  }))
}