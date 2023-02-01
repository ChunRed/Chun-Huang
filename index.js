
Vue.createApp({
    data: function(){
        return{

            Header:{

                title: "林俊遑 | Chun-Huang, Lin",

                about:
                "About With supporting text below as a natural lead-in to additional content.With supporting text below as a lead-in to additional content.With supporting text below as a natural lead-in to additional content.",

                cv:{
                    
                    l4: "2022.12 「TK科藝獎」 銀獎",
                    l3: "2022.11    「洄瀾獎」 入圍",
                    l2: "2021.7 「東京威力科創機器人大賽」 入圍",
                    l1: "2021.1 「美國機械工程學會ASME機器人競賽」 世界第八",
                },
            },

            Card1:{

                title: 'Tool',

                image: 'image/img_tool.jpg',

                item: {
                    l1: '互動裝置',
                    l2: '動力藝術',
                    l3: '人機互動',
                },

                link: '',

            },

            Card2:{
                title: 'Light',

                image: 'image/img_light.jpg',

                item: {
                    l1: '戶外裝置',
                    l2: '現地製作',
                    l3: '空間實驗',
                },

                link: '',

            },

            Card3:{
                title: 'Virtual',

                image: 'image/img_virtual.jpg',

                item: {
                    l1: '生成式藝術',
                    l2: 'AR / VR',
                    l3: '互動式網頁設計',
                },

                link: '',

            },

            Card4:{
                title: 'Technology ',

                image: 'image/img_technology.jpg',

                item: {
                    l1: '移動通訊',
                    l2: '系統整合',
                    l3: '機電整合',
                },

                link: '',

            },
            

        }
    },
    methods: {

    },
    mounted: function(){

    },
}).mount('.container-fluid')