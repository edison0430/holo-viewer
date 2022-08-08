# Holo Viewer

## 介紹

Holo Viewer 是一個讓使用者方便觀賞 Hololive 的網站，藉由`多窗閱覽`功能，更可以在同一個頁面同時觀看多個 Hololive 影片。

## 功能說明

### 首頁

1. 首頁中包含`直播中`及`預定直播`列表，點擊項目後，會自動開啟 Youtube 分頁。

2. Header 右方有 Dark Mode 的切換按紐。

### 多窗閱覽

1. Header 左方會列出目前直播中的頻道，點擊頭像後即可將影片加入下方閱覽區。
   開啟影片後，頭像會以紅圈包住，表示該影片正在觀看中。再次點擊頭像可關閉此影片。

2. 若想觀看未在清單中的影片，也可點擊 Header 右方中的`增加影片`，輸入 Youtube 影片的 URL 。

例：https://www.youtube.com/watch?v=5qap5aO4i9A

![add video button](/public/img/intro-addVideo-btn.png)

![add video modal](/public/img/intro-addVideo-modal.png)

3. Header 右方有`控制面板`的開啟按紐，開啟後可針對目前正在閱覽區的影片執行暫停、禁音、開關聊天室、移除影片等功能。

![control button](/public/img/intro-control-btn.png)

![control modal](/public/img/intro-control-modal.png)

## Thanks

特別感謝 YunzheZJU 的 [Non-stop-story](https://github.com/YunzheZJU/non-stop-story) 開源項目所提供的 API

## Develop

### install dependencies

```
yarn install
```

### run application with development mode

```
npm run start
```
