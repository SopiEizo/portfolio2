const { createClient } = microcms;

const client = createClient({
  serviceDomain: 'sopieizo', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: '9lPSDQ5HBKeqjmrI1Ul1MzNA5dIPP5MprAaE',
});

let allcontents = 0; // let キーワードで宣言

const PKget = async (limit=10, offset=0) => {
  client.get({
    endpoint: 'works',
    queries: {
      offset,
      limit
    }
  })
  .then(respnose => {
    console.log(respnose)
    const list = document.querySelector('#works-list');
    respnose.contents.forEach((content, index) => {
      const item = document.createElement('div');
      item.innerHTML =  `<a class="flexia" href="${content.url}"><div class="flex-itemA"><img src="${content.img.url}" class="simg"><h2 class="contentstitle">${content.title}</h2></div></a>`;
      list.appendChild(item);
      }
    )
    console.log("コンテンツ数　　" + respnose.contents.length)

    allcontents = allcontents + respnose.contents.length; // 再代入するだけで var キーワードは不要
    console.log("ALLコンテンツ　 " + allcontents)
    console.log("トータルカウント" + respnose.totalCount)
    if(allcontents < respnose.totalCount){
      console.log("まだ")
      PKget(respnose.limit, respnose.offset + respnose.limit);
    }
    else{
      console.log("おしまい")
    }
  });
}
PKget()