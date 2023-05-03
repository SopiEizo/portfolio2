const { createClient } = microcms;

const client = createClient({
  serviceDomain: 'sopieizo', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: '9lPSDQ5HBKeqjmrI1Ul1MzNA5dIPP5MprAaE',
});

client.get({endpoint: 'news2'})
  .then(response => {
    // お知らせコンテンツをリスト形式で表示する
    const list = document.querySelector('#news-list');
    response.contents.forEach((content, index) => {
      // リストに項目を追加する
      const item = document.createElement('p');
        
      //日付フォーマット変換
      var date =
      // URL を埋め込む
      item.innerHTML = `<p class="newstext">
                            <span>*${content.class}*</span>
                            <span">${moment(content.createdAt).format("YYYY/MM/DD")}</span>
                            <br>
                            <span><a href="${content.url}" class="newsa">${content.title}</a></span>
                        </p>`;

      list.appendChild(item);
    });
  });