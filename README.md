# マルチステップフォームを試す
複数画面のフォームはユーザビリティの視点から提案されることがあるが、<br>
クライアントサイドとしては処理が煩雑で、サーバーサイドを意識したコーディングをしいられる。<br>
サーバーサイドとしても細切れのデータをもらっても困るはず。<br>
<br>
システム設計上も都度サーバーとやりとりすると密結合となり全員が不幸になる。<br>
<br>
ReactやVueを導入するのは大げさな場合もあり、<br>
クライアントサイド（プレーンHTML）でのマルチステップフォームを試しておく。

## とりあえずHTMLだけ確認したい場合
publicフォルダの中身を任意のWebサーバーにアップロードする。

ローカル環境で確認したい場合はVSCodeのプレビュープラグインがおすすめ
[LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)

## node.jsのサーバーサイドもセットアップする場合

### 環境構築
node.jsがインストール済みの環境にて
```
$ npm install
```

### 実行
```
$ npm start
```


