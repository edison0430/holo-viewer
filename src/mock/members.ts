const members = [
  {
    id: 36,
    name: '鏡見キラ',
    created_at: '2020-09-27T14:07:25.017Z',
    updated_at: '2020-12-04T16:07:56.195Z',
    avatar:
      'https://yt3.ggpht.com/a/AATXAJzr9QwLFAq9sDSM8lnYIqUloCKjJucw2AmXY35O=s96-c-k-c0xffffffff-no-rj-mo',
    color_main: '#96efe6',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 32,
    name: '魔乃アロエ',
    created_at: '2020-08-09T15:52:43.061Z',
    updated_at: '2020-09-27T14:07:24.964Z',
    avatar:
      'https://yt3.ggpht.com/a/AATXAJyYCsfSn428TJHQl090qek59epckWGsjto9ZOad=s96-c-k-c0xffffffff-no-rj-mo',
    color_main: '#f38cc4',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 42,
    name: '月下カオル',
    created_at: '2020-09-27T14:07:25.070Z',
    updated_at: '2020-09-27T14:07:25.072Z',
    avatar:
      'https://yt3.ggpht.com/a/AATXAJzXhF7TW0jDCHcJ1DqeajdhS6IV77FLVfQej1Qq=s96-c-k-c0xffffffff-no-rj-mo',
    color_main: '#f36e68',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 47,
    name: '黒桃影',
    created_at: '2020-09-27T14:07:25.137Z',
    updated_at: '2020-12-04T16:07:56.226Z',
    avatar:
      'https://i2.hdslb.com/bfs/face/b5e82aca42450be98952a72681eccb3a5c7b096b.jpg_96x96.jpg',
    color_main: '#dcadca',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 49,
    name: '阿媂娅',
    created_at: '2020-09-27T14:07:25.152Z',
    updated_at: '2020-12-04T16:07:56.232Z',
    avatar:
      'https://i1.hdslb.com/bfs/face/c8b9d1cb642b0f3223e9d211212543f6b4a00824.jpg_96x96.jpg',
    color_main: '#6b506f',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 23,
    name: '星街すいせい',
    created_at: '2020-08-09T15:52:42.918Z',
    updated_at: '2022-07-30T12:16:59.133Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-0m7dbn-y21dl-MfaM8t36EbRRwib1hnHzCMkwbg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#4a86e8',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 10,
    name: '湊あくあ',
    created_at: '2020-08-09T15:52:42.725Z',
    updated_at: '2022-08-29T16:20:27.038Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_a7aALz9dlVz6u69zsvSx5cRTQEoEzW_SrkPpB8w=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f69bde',
    color_sub: '#63e5ff',
    graduated: false,
  },
  {
    id: 12,
    name: '百鬼あやめ',
    created_at: '2020-08-09T15:52:42.769Z',
    updated_at: '2021-12-20T02:15:18.040Z',
    avatar:
      'https://yt3.ggpht.com/XDGhKwPZcT16Ppg2gQmLHEIYRhw9sY4rqG0HWbeCH68LHkhlVQrrFgxd5hWUuMb2nLfDOhu6=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe0002',
    color_sub: '#ffffff',
    graduated: false,
  },
  {
    id: 33,
    name: '尾丸ポルカ',
    created_at: '2020-08-09T15:52:43.074Z',
    updated_at: '2022-07-29T20:16:55.856Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_n6Fs3YybTJz_o9D1tIRojgZwCgqm9SmbB1Bngnw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#cf2830',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 11,
    name: '癒月ちょこ',
    created_at: '2020-08-09T15:52:42.738Z',
    updated_at: '2022-08-30T21:21:17.587Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_1xaYJtg6QhjcspZ8rYizo7Y14XUDTHmQcUS9_=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ff01ff',
    color_sub: '#f9a8c9',
    graduated: false,
  },
  {
    id: 24,
    name: '天音かなた',
    created_at: '2020-08-09T15:52:42.932Z',
    updated_at: '2021-12-20T02:15:18.048Z',
    avatar:
      'https://yt3.ggpht.com/TlH8nz5O9UYo5JZ_5fo4JfXdT18N0Ck27wWrulni-c1g5bwes0tVmFiSKICzI1SW7itaTkk9GA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#16fefe',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 8,
    name: '赤井はあと',
    created_at: '2020-08-09T15:52:42.698Z',
    updated_at: '2022-05-22T16:10:04.570Z',
    avatar:
      'https://yt3.ggpht.com/B2tq3IQAFxUe9W3MaMc0V62bmlTWCSoTuCk-Y-Ab8yXkZKdIswQhHABZhz2e4YM1-B_Kxen_7w=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe0002',
    color_sub: '#fe00ae',
    graduated: false,
  },
  {
    id: 29,
    name: '雪花ラミィ',
    created_at: '2020-08-09T15:52:43.012Z',
    updated_at: '2022-07-30T02:16:58.326Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_CJGR1wXPJJ20TAXOU53_CWwJFwOSFhsQaXL2TDw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#68cdf7',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 19,
    name: '白銀ノエル',
    created_at: '2020-08-09T15:52:42.863Z',
    updated_at: '2022-08-09T16:17:27.233Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-V3OrC9c7bRRRYrFXZVcRP0ynKaTXP5n3lJIiDvw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ffffff',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 16,
    name: '猫又おかゆ',
    created_at: '2020-08-09T15:52:42.823Z',
    updated_at: '2022-07-30T00:16:59.152Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-4v9u0XW29ThJHrutfQzTDSun8xJbi_d3HT12New=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#9a00ff',
    color_sub: '#4374ff',
    graduated: false,
  },
  {
    id: 13,
    name: '紫咲シオン',
    created_at: '2020-08-09T15:52:42.783Z',
    updated_at: '2021-12-20T02:15:19.027Z',
    avatar:
      'https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#9a00ff',
    color_sub: '#ffd246',
    graduated: false,
  },
  {
    id: 5,
    name: '白上フブキ',
    created_at: '2020-08-09T15:52:42.657Z',
    updated_at: '2022-08-09T16:17:29.989Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu8N2-Pv-aoLpUPGnpry5jMzCk-80pN5sgaSZNPhbA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#16fefe',
    color_sub: '#ffffff',
    graduated: false,
  },
  {
    id: 3,
    name: 'ロボ子さん',
    created_at: '2020-08-09T15:52:42.630Z',
    updated_at: '2022-07-30T06:16:57.708Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu9eatjMyR1RptrFkX_4gBPw_579Iz1Q15gsvE2tFA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ea00eb',
    color_sub: '#fca5cf',
    graduated: false,
  },
  {
    id: 4,
    name: 'さくらみこ',
    created_at: '2020-08-09T15:52:42.643Z',
    updated_at: '2022-08-09T16:17:29.152Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_AMvx3tBfN_xteevqEFXx4AsNpQZyskNR903j-qg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f69bde',
    color_sub: '#f50f3e',
    graduated: false,
  },
  {
    id: 30,
    name: '桃鈴ねね',
    created_at: '2020-08-09T15:52:43.025Z',
    updated_at: '2021-12-20T02:15:19.043Z',
    avatar:
      'https://yt3.ggpht.com/bMBMxmB1YVDVazU-8KbB6JZqUHn4YzmFiQRWwEUHCeqm5REPW7HHQChC5xE6e36aqqnXgK4a=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ffb65d',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 14,
    name: '大空スバル',
    created_at: '2020-08-09T15:52:42.796Z',
    updated_at: '2022-07-30T13:16:57.820Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu__mMZ52MURmhbay8FG8kPRdPu28qRjoRay7BnRXQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ffff01',
    color_sub: '#58eaa3',
    graduated: false,
  },
  {
    id: 40,
    name: '岸堂天真',
    created_at: '2020-09-27T14:07:25.054Z',
    updated_at: '2022-07-29T20:16:55.858Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_pFYgyWIY4kSNfnhU6pA7efeejU8G3izfUr49I=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fbd800',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 59,
    name: 'Kureiji Ollie',
    created_at: '2020-12-04T16:07:56.268Z',
    updated_at: '2022-08-13T15:18:38.293Z',
    avatar:
      'https://yt3.ggpht.com/okAbP3i7wWmBb4JaDuqjkFsGzMCg-05LOu5K0kKGoVwhGWsLUwun8pnXTzQ_uNBoimpiVoLp4D8=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#c81650',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 17,
    name: '戌神ころね',
    created_at: '2020-08-09T15:52:42.836Z',
    updated_at: '2022-07-29T22:17:05.755Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-2FXjG-M8lsNQGRGaUybmuw2sjaOkNx3L8fMkoaA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#feff01',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 26,
    name: '角巻わため',
    created_at: '2020-08-09T15:52:42.963Z',
    updated_at: '2022-06-08T00:10:28.907Z',
    avatar:
      'https://yt3.ggpht.com/yyc42nbIa5iEVfpBUf5nxUb02ljS-C2tOSYNUiKzBHrnYwYTUdOrIpUfc1EcPLJoG2C4AXOV9Q=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ffff01',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 22,
    name: '潤羽るしあ',
    created_at: '2020-08-09T15:52:42.902Z',
    updated_at: '2022-02-28T03:35:19.833Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLS1vIibOCM-xhRmT2qAwQca_hVTz8OnW9c-S9rbJA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b650e4',
    color_sub: '#92f43f',
    graduated: true,
  },
  {
    id: 2,
    name: 'AZKi',
    created_at: '2020-08-09T15:52:42.615Z',
    updated_at: '2022-07-30T00:16:56.946Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu9IveqXjidKC-xeGeLUim29sfMquDmK7nIudIWayw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe0002',
    color_sub: '#58e1f1',
    graduated: false,
  },
  {
    id: 18,
    name: '不知火フレア',
    created_at: '2020-08-09T15:52:42.848Z',
    updated_at: '2021-12-20T02:15:20.197Z',
    avatar:
      'https://yt3.ggpht.com/d9aIrGtZR0eI4k1Wnev5f_R4llIBsWnQOjkdsqkMycoAxA3g_zz-jyeBl8tEHfbm1iTg0SJj=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe9901',
    color_sub: '#ffffff',
    graduated: false,
  },
  {
    id: 7,
    name: '夜空メル',
    created_at: '2020-08-09T15:52:42.684Z',
    updated_at: '2022-07-07T06:11:31.822Z',
    avatar:
      'https://yt3.ggpht.com/I6f2LiL5tEL4ECQhPNJPvBkrf6WrKAS8nheCpTyyQSNKzCwBL2XJSGKxBMc6UNcUr1AR7hrjXw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ffff01',
    color_sub: '#fd760a',
    graduated: false,
  },
  {
    id: 27,
    name: '常闇トワ',
    created_at: '2020-08-09T15:52:42.978Z',
    updated_at: '2021-12-20T02:15:20.201Z',
    avatar:
      'https://yt3.ggpht.com/meRnxbRUm5yPSwq8Q5QpI5maFApm5QTGQV_LGblQFsoO0yAV4LI-nSZ70GYwMZ_tbfSa_O8MTCU=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b650e4',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 41,
    name: '夕刻ロベル',
    created_at: '2020-09-27T14:07:25.064Z',
    updated_at: '2021-12-20T02:15:20.208Z',
    avatar:
      'https://yt3.ggpht.com/yVTO0I6VAXBjBLBPvgLGlBlp1hganldhl6AY3PW_ZWOJ0sYwfLo1yc2Sqr5SMjXQf7Dm4U-2=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#e67700',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 6,
    name: '夏色まつり',
    created_at: '2020-08-09T15:52:42.671Z',
    updated_at: '2022-06-01T12:10:30.370Z',
    avatar:
      'https://yt3.ggpht.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe9901',
    color_sub: '#3be898',
    graduated: false,
  },
  {
    id: 20,
    name: '宝鐘マリン',
    created_at: '2020-08-09T15:52:42.876Z',
    updated_at: '2022-08-03T17:17:03.362Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu8CxDCEDrsPl0qLatamE8oCa-gOVwJgyBK8kn0RsA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fe0002',
    color_sub: '#ff811d',
    graduated: false,
  },
  {
    id: 31,
    name: '獅白ぼたん',
    created_at: '2020-08-09T15:52:43.048Z',
    updated_at: '2022-07-30T12:16:59.898Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-DWVTmOl_sIEgYjNGsAJOZoAycESBNZQTTvSjAxg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#a4e5cf',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 21,
    name: '兎田ぺこら',
    created_at: '2020-08-09T15:52:42.889Z',
    updated_at: '2022-07-29T16:16:58.203Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu9QrCPT5A0zE49EHvoS_gs2XBxzXSLs_OkIoTawkw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#16fefe',
    color_sub: '#ff7f34',
    graduated: false,
  },
  {
    id: 15,
    name: '大神ミオ',
    created_at: '2020-08-09T15:52:42.811Z',
    updated_at: '2022-02-20T08:19:37.499Z',
    avatar:
      'https://yt3.ggpht.com/Z78RNXxUqpOGYKFt-VrJV7nlehOHzl7Ta-l1cgPx5Ewucmr5kY64iGxmPSe7QqIdM1ZhvPlEOg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#34a951',
    color_sub: '#f7002f',
    graduated: false,
  },
  {
    id: 28,
    name: '姫森ルーナ',
    created_at: '2020-08-09T15:52:42.992Z',
    updated_at: '2022-01-16T15:17:20.950Z',
    avatar:
      'https://yt3.ggpht.com/O7m_5HMY_O8yxR3Jhn9cEO1fLNL_GifMERExnAmfY7JrdTRsTjNijTcNYTPN97Llj3zGn8Susw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ff01ff',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 38,
    name: '律可',
    created_at: '2020-09-27T14:07:25.034Z',
    updated_at: '2021-12-20T02:15:21.374Z',
    avatar:
      'https://yt3.ggpht.com/0MLL-S2KKu4PlhedunMhvg4VPJGm6Fpx2C4QV2PWJvkcG1eA6XqUYULUZGqBF2M4iNY7FxBt=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#e890b2',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 35,
    name: '奏手イヅル',
    created_at: '2020-09-27T14:07:25.007Z',
    updated_at: '2021-12-24T15:15:25.838Z',
    avatar:
      'https://yt3.ggpht.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#243d75',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 45,
    name: '夜霧',
    created_at: '2020-09-27T14:07:25.120Z',
    updated_at: '2020-12-30T13:28:15.520Z',
    avatar:
      'https://i1.hdslb.com/bfs/face/0d86c9462ccaab2a5ca416138c092df729c82012.jpg_96x96.jpg',
    color_main: '#eb9ba9',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 48,
    name: '朵莉丝',
    created_at: '2020-09-27T14:07:25.144Z',
    updated_at: '2020-12-30T13:28:15.533Z',
    avatar:
      'https://i2.hdslb.com/bfs/face/60dae3c34da1569bd0f9f696dd9aca2d2914bf85.jpg_96x96.jpg',
    color_main: '#47a3d5',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 50,
    name: '罗莎琳',
    created_at: '2020-09-27T14:07:25.160Z',
    updated_at: '2020-12-30T13:28:15.541Z',
    avatar:
      'https://i1.hdslb.com/bfs/face/38ed261b885c7ebdc5e17d530024530bd1c3eddb.jpg_96x96.jpg',
    color_main: '#313b7b',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 46,
    name: '希薇娅',
    created_at: '2020-09-27T14:07:25.127Z',
    updated_at: '2020-12-04T16:07:56.221Z',
    avatar:
      'https://i0.hdslb.com/bfs/face/c9f78a8befcf08e32bfbc741ee8d2eac5d7ff550.jpg_96x96.jpg',
    color_main: '#5370c3',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 25,
    name: '桐生ココ',
    created_at: '2020-08-09T15:52:42.949Z',
    updated_at: '2021-07-04T08:45:29.594Z',
    avatar:
      'https://yt3.ggpht.com/a/AGF-l7-UWVGytfW-cAiCvg8r2C_6Gk2SnqSkJP9Cqg=s96-c-k-c0xffffffff-no-rj-mo',
    color_main: '#fe9901',
    color_sub: '#4de4ff',
    graduated: true,
  },
  {
    id: 76,
    name: '風真いろは',
    created_at: '2021-11-26T04:47:27.363Z',
    updated_at: '2021-11-26T04:47:27.364Z',
    avatar:
      'https://yt3.ggpht.com/YK_UCAbw_pFBHSOw_LGWI-WCJDdvMP3y9mmODQ1IFEnNVvcf-M3-q22Db5TLWuAbfboMNFTMIg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b3c8bf',
    color_sub: '#fdcba8',
    graduated: false,
  },
  {
    id: 53,
    name: 'Airani Iofifteen',
    created_at: '2020-09-27T14:07:25.182Z',
    updated_at: '2022-05-17T08:09:55.556Z',
    avatar:
      'https://yt3.ggpht.com/bF91weVtAIL7Uhnr2HVwtCTLVKK5kVsn4FC_Ze3Gl8rkSsEjDwyey3AbQ1PDfJQ1Oeac5cePeg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fdfebf',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 61,
    name: 'Pavolia Reine',
    created_at: '2020-12-04T16:07:56.366Z',
    updated_at: '2022-01-05T09:17:12.839Z',
    avatar:
      'https://yt3.ggpht.com/sG7Yb1kCxTEP9ft03E-1Tr2Rho8GhMZ0_Kq9rf5MojWY9pf8vSL24xPG8e8GaE4jOxQKYlSvaL0=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#1c50a3',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 64,
    name: 'Hololive Indonesia',
    created_at: '2021-05-22T15:39:10.887Z',
    updated_at: '2022-07-30T00:16:59.884Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu8aac2EJS9DCkeCOaVmv-CFxunb3KbSp5DGQdwpcQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#fc7c4d',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 74,
    name: '博衣こより',
    created_at: '2021-11-26T04:47:27.347Z',
    updated_at: '2022-03-16T17:09:36.110Z',
    avatar:
      'https://yt3.ggpht.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f5bbc7',
    color_sub: '#ffe8dd',
    graduated: false,
  },
  {
    id: 39,
    name: 'アステル・レダ',
    created_at: '2020-09-27T14:07:25.044Z',
    updated_at: '2021-12-28T00:15:26.577Z',
    avatar:
      'https://yt3.ggpht.com/sr2RTZaWAFF20tSTiXUXp-BYRqWz4dZhFKbCzFS2dneTN5uSE53sSDjePN5dIM_sEz2U9-2qtRs=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#1449ac',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 72,
    name: 'ラプラス・ダークネス',
    created_at: '2021-11-26T04:47:27.323Z',
    updated_at: '2021-12-22T18:15:21.582Z',
    avatar:
      'https://yt3.ggpht.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b092d2',
    color_sub: '#9160cd',
    graduated: false,
  },
  {
    id: 51,
    name: 'Ayunda Risu',
    created_at: '2020-09-27T14:07:25.167Z',
    updated_at: '2022-07-30T00:16:59.156Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_WBKt0fYv-RMkoGFJWgX2-wzZrbRbhEivY8Tv7Ow=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f690a9',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 58,
    name: 'Watson Amelia',
    created_at: '2020-09-27T14:07:25.230Z',
    updated_at: '2022-08-04T01:17:06.056Z',
    avatar:
      'https://yt3.ggpht.com/RZ4Fp3L6_zyq6YA7s5WnH8-22iezMLwdJhtkBgs_EAb06mvMCnF59JKMNu9YPCqb7nhaeXMdPvY=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f4da90',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 34,
    name: '花咲みやび',
    created_at: '2020-09-27T14:07:24.972Z',
    updated_at: '2022-03-09T07:24:56.145Z',
    avatar:
      'https://yt3.ggpht.com/O6KhIGX91d99vduasQsqIQNvt1tC9DjDlTlLQr_k0aq0EtvgF4hM1YNAOmEOz9Vtqs1yyAkfkw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f45252',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 69,
    name: 'Ouro Kronii',
    created_at: '2021-08-18T02:32:27.751Z',
    updated_at: '2022-04-22T21:57:00.106Z',
    avatar:
      'https://yt3.ggpht.com/ntCVYU9_M3j3G_lYEKTaBsIRmB2ZA1W6uu3n7bHCwaT2HvzqL1t5ABhGaZ3ucfm1yP3-9hFQuw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#2f2f31',
    color_sub: '#0769eb',
    graduated: false,
  },
  {
    id: 63,
    name: 'ホロスターズ',
    created_at: '2021-05-22T15:39:10.783Z',
    updated_at: '2022-01-27T20:17:24.175Z',
    avatar:
      'https://yt3.ggpht.com/5Jn_OHkOZhZssXXwWopUQZVwnL16EJivvxTDGqVmp4Cah3nLmVTgZMQmfF-SyuMhtFkncyT9Lw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#742aff',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 71,
    name: 'Hakos Baelz',
    created_at: '2021-08-18T02:32:27.762Z',
    updated_at: '2022-02-28T10:24:36.211Z',
    avatar:
      'https://yt3.ggpht.com/7gFSRIM3_DhczV8AYjeP4EaS0OL-u_xLvIh9JhG9zJhPYEfVwsoUOK61L6eBlLjnPHN-EDvytQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#d2251e',
    color_sub: '#332d2a',
    graduated: false,
  },
  {
    id: 52,
    name: 'Moona Hoshinova',
    created_at: '2020-09-27T14:07:25.174Z',
    updated_at: '2022-07-30T00:16:59.875Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-RitUGw045SER_nviRPtb3KQXvaPd2y2BEdkGYxA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#8d74ff',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 9,
    name: 'アキ・ローゼンタール',
    created_at: '2020-08-09T15:52:42.712Z',
    updated_at: '2022-07-30T13:16:57.818Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_qlJmoLYrHrNR3wUIw0YfcSGS-ivagX_u7zIZbAQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#34a857',
    color_sub: '#ffa3cf',
    graduated: false,
  },
  {
    id: 56,
    name: "Ninomae Ina'nis",
    created_at: '2020-09-27T14:07:25.209Z',
    updated_at: '2022-02-08T23:19:01.427Z',
    avatar:
      'https://yt3.ggpht.com/f4uYWHJxiGwyXm8NUlm818N1MRnywtgL6wM8JdWqWsKBzI7v1eg8dxDWG7igkWuukUSiufydqPg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#61567f',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 65,
    name: 'Hololive English',
    created_at: '2021-05-22T15:39:10.896Z',
    updated_at: '2022-07-29T17:16:55.782Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu8qlq9NWNSS3MkVGlcPUqdh2wynSXf6a2BfTBeIUA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ff4747',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 1,
    name: 'ときのそら',
    created_at: '2020-08-09T15:52:42.578Z',
    updated_at: '2022-07-30T04:16:56.117Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-Uc3gukr4oNSY05KL9_N5H6pbOZxq7X7Ce6wzh9A=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#4a86e8',
    color_sub: '#fc01b3',
    graduated: false,
  },
  {
    id: 67,
    name: 'Tsukumo Sana',
    created_at: '2021-08-18T02:32:27.726Z',
    updated_at: '2022-08-02T02:52:45.606Z',
    avatar:
      'https://yt3.ggpht.com/zczPLp_sj4Qq3CyoGzfXifOdwE7aMHRpUdqbMD9UKvjddBG2NdMrCKElCMUOS6x85BMr2VGuAA=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f2d7c4',
    color_sub: '#fedf49',
    graduated: true,
  },
  {
    id: 73,
    name: '鷹嶺ルイ',
    created_at: '2021-11-26T04:47:27.337Z',
    updated_at: '2022-03-05T18:24:43.141Z',
    avatar:
      'https://yt3.ggpht.com/R_IzGiw1xDQp0y9zVvGkF9e8Gj8wtr2_551Ez3X6gOMIj3e6jra1I1suuK_jH9FqigBj8ywg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#ce93af',
    color_sub: '#951e64',
    graduated: false,
  },
  {
    id: 43,
    name: '影山シエン',
    created_at: '2020-09-27T14:07:25.074Z',
    updated_at: '2021-12-20T02:15:21.376Z',
    avatar:
      'https://yt3.ggpht.com/N20GfJbuG8BBl9CexUek023y2DXQAYqgYoRRqsVGAYoS-gZsGuH7W1Il0y-8TnIul19rBPG78Jo=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b082d1',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 66,
    name: 'IRyS',
    created_at: '2021-07-07T16:21:36.839Z',
    updated_at: '2022-03-14T16:09:33.144Z',
    avatar:
      'https://yt3.ggpht.com/oC30wBZ04ibFN7AQVHAjdUX-3nS-h4DDjJBYVlsKt0OF6t1CZwrgzWlr3rS6Q12kXrw3-mt9gg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#8d0432',
    color_sub: '#333333',
    graduated: false,
  },
  {
    id: 57,
    name: 'Gawr Gura',
    created_at: '2020-09-27T14:07:25.219Z',
    updated_at: '2021-12-20T02:15:21.381Z',
    avatar:
      'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#6182c8',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 62,
    name: 'ホロライブ',
    created_at: '2020-12-30T13:28:15.587Z',
    updated_at: '2022-07-28T10:16:57.495Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-FamPA8ofQShmCKY6njRuT9zfTPeY1399Y9yUs1w=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#64e8cb',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 60,
    name: 'Anya Melfissa',
    created_at: '2020-12-04T16:07:56.334Z',
    updated_at: '2022-07-28T15:16:56.081Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_Kj0ZJ_ImZWqaCfHW2IuflYaQ1TF6mbxoAvKHS=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#eac35c',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 75,
    name: '沙花叉クロヱ',
    created_at: '2021-11-26T04:47:27.355Z',
    updated_at: '2021-12-21T19:15:19.179Z',
    avatar:
      'https://yt3.ggpht.com/_xNtPLKQcQxMTnOr4tAcGz0GEeESsi0bQX9mJEP3fx_50a8GUfUyOG1eyLIld2cCz6GvKABwpQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#a2a19f',
    color_sub: '#c24a57',
    graduated: false,
  },
  {
    id: 70,
    name: 'Nanashi Mumei',
    created_at: '2021-08-18T02:32:27.756Z',
    updated_at: '2021-12-29T01:15:27.127Z',
    avatar:
      'https://yt3.ggpht.com/owZmjfnG_SGVmfkl3eS7Lv47pGvIr2SrS36imh6O8i0H3Wy41fYKD26U7wnyRB627fXoq0aQ0Q=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#998274',
    color_sub: '#4699a5',
    graduated: false,
  },
  {
    id: 55,
    name: 'Takanashi Kiara',
    created_at: '2020-09-27T14:07:25.199Z',
    updated_at: '2022-08-30T21:21:15.111Z',
    avatar:
      'https://yt3.ggpht.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f45016',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 54,
    name: 'Mori Calliope',
    created_at: '2020-09-27T14:07:25.189Z',
    updated_at: '2022-05-19T04:10:00.546Z',
    avatar:
      'https://yt3.ggpht.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#c00b40',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 37,
    name: 'アルランディス',
    created_at: '2020-09-27T14:07:25.024Z',
    updated_at: '2022-07-30T00:16:58.366Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_IUv1bSONN9GxhiY9Cz9qQEMppz-TpWLhTpl4qCw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#2a401f',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 77,
    name: '夜十神封魔',
    created_at: '2022-03-22T13:15:21.703Z',
    updated_at: '2022-04-01T15:58:37.142Z',
    avatar:
      'https://yt3.ggpht.com/HGqJ7mPwkE1frsJ1Gf0jFWAigC1mLGYEpj2N1L8CdD6QFTxCC7aNyuf1frR8AwSa_MJh58TioQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f4be00',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 68,
    name: 'Ceres Fauna',
    created_at: '2021-08-18T02:32:27.739Z',
    updated_at: '2022-03-22T21:02:10.037Z',
    avatar:
      'https://yt3.ggpht.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#a4e5cf',
    color_sub: '#f6bcb8',
    graduated: false,
  },
  {
    id: 44,
    name: '荒咬オウガ',
    created_at: '2020-09-27T14:07:25.113Z',
    updated_at: '2022-07-30T00:16:58.368Z',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu-Ks_z62XBwAzENn2yjGOaSameBejuHdlhzL3X0=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#d8ef54',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 81,
    name: 'Vestia Zeta',
    created_at: '2022-03-24T16:34:11.941Z',
    updated_at: '2022-03-24T16:34:11.945Z',
    avatar:
      'https://yt3.ggpht.com/-IdVo-vK7pr0VRjJDdza1-t1Edjce1Rd1R1hon_3SRIzuQ-XVBTWOJj-UfwYPp8y40KM197_y4o=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#4b5da6',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 82,
    name: 'Kaela Kovalskia',
    created_at: '2022-03-24T16:34:11.956Z',
    updated_at: '2022-03-24T16:34:11.959Z',
    avatar:
      'https://yt3.ggpht.com/PxkGgLvMEUgmme35T0VPLR8d5brJw4YTzJC5PE48mkYRdy-mq8FsKv_Sy-bJmxqvlgtitqMWtg=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#c08400',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 79,
    name: '緋崎ガンマ',
    created_at: '2022-03-22T13:24:27.277Z',
    updated_at: '2022-04-01T07:58:39.465Z',
    avatar:
      'https://yt3.ggpht.com/JsoYuC0s3Qt763erntvZpmadxIhgmi6IGYxi1636heIf8SS6_DEBfU17epYL5WmGSdynEy1T=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#dc000e',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 78,
    name: '羽継烏有',
    created_at: '2022-03-22T13:24:27.267Z',
    updated_at: '2022-05-09T07:57:54.858Z',
    avatar:
      'https://yt3.ggpht.com/neUPMbtKMBEQKyfOOUT84tGmBg6w7R25l-5aQfLXR28p-zjZ4fEpwtJB80_m7K-DI9RD-FZC=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#f7f6f4',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 83,
    name: 'Kobo Kanaeru',
    created_at: '2022-03-24T16:34:11.972Z',
    updated_at: '2022-05-16T13:09:51.177Z',
    avatar:
      'https://yt3.ggpht.com/Zi6DMbqTrk8jpNKnJgbw_NxGnggsKX1omQnPeHxrZTmrVmon7zfmg5Q4XbqsHO9AMidW49zCPw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#3aaaaf',
    color_sub: '#4de4ff',
    graduated: false,
  },
  {
    id: 84,
    name: 'Regis Altare',
    created_at: '2022-07-25T03:18:05.466Z',
    updated_at: '2022-07-27T05:16:54.659Z',
    avatar:
      'https://yt3.ggpht.com/pZD_QHSP7ctIgipDz-fOMJcknud5odVSDT4nBAHNTXB6Q-EwvU30bHWMXSOF-lmuqbZQHmFd=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#588acc',
    color_sub: '#000000',
    graduated: false,
  },
  {
    id: 85,
    name: 'Magni Dezmond',
    created_at: '2022-07-25T03:18:05.487Z',
    updated_at: '2022-07-27T05:16:55.422Z',
    avatar:
      'https://yt3.ggpht.com/2wjE3HijJ3UV60HTi8rG-sgDHLVxEWaGl8TJyVYdAmJ_razbmxvwN5zuf4NP2eDDK5YmeU3spw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#6d4c9c',
    color_sub: '#000000',
    graduated: false,
  },
  {
    id: 86,
    name: 'Axel Syrios',
    created_at: '2022-07-25T03:18:05.496Z',
    updated_at: '2022-07-27T06:16:56.889Z',
    avatar:
      'https://yt3.ggpht.com/BcfKD35tQ053FmocAwANErU1pqdCeU0Eri4i0OOWe3whPDOUUhz-7mQs0oE9jNROdC2kODIn3w=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#e98d00',
    color_sub: '#000000',
    graduated: false,
  },
  {
    id: 87,
    name: 'Noir Vesper',
    created_at: '2022-07-25T03:18:05.505Z',
    updated_at: '2022-07-27T07:16:57.694Z',
    avatar:
      'https://yt3.ggpht.com/EzGR0TGwFiV5CFt2nrKSzL7RFxLOaYQXIBVCj2FXaN-aHv0nhM1D1VaP4Eg7Xj8Cc-ltrRqG=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#b0b2b3',
    color_sub: '#000000',
    graduated: false,
  },
  {
    id: 80,
    name: '水無世燐央',
    created_at: '2022-03-22T13:24:27.286Z',
    updated_at: '2022-07-27T16:16:56.325Z',
    avatar:
      'https://yt3.ggpht.com/k3AK3r8wYjKakhMMRXsc-CWMwtwPaXzkOz_RdutB9hmb5gB0h9l_PAHDfeT8CNatTcbUreCcyw=s96-c-k-c0x00ffffff-no-rj',
    color_main: '#a5a8d6',
    color_sub: '#4de4ff',
    graduated: false,
  },
];

export default members;