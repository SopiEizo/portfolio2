const { createClient } = microcms;

const client = createClient({
  serviceDomain: 'sopieizo', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: '9lPSDQ5HBKeqjmrI1Ul1MzNA5dIPP5MprAaE',
});

client.get({ endpoint: 'news2'})
  .then(response => {
    // お知らせコンテンツをリスト形式で表示する
    const list = document.querySelector('#news-list');
    response.contents.forEach((content, index) => {
      // リストに項目を追加する
      const item = document.createElement('h1');
        
      //日付フォーマット変換
      var date =
      // URL を埋め込む
      item.innerHTML = `<h1 class="Bd newscf">
                            <span class="newscfitem01">*${content.class}*</span>
                            <span class="newscfitem02">${moment(content.createdAt).format("YYYY/MM/DD")}</span>
                            <span class="newscfitem03"><a href="${content.url}" class="newsa">${content.title}</a></span>
                        </h1>`;

      list.appendChild(item);
    });
  });
