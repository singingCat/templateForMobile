/*
 * @Descripttion: 
 * @Author: luxiyuan
 * @Date: 2021-07-15 15:53:30
 * @LastEditors: luxiyuan
 * @LastEditTime: 2021-07-15 16:54:03
 */
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/reset.scss'
import axios from '@/assets/js/axios'

const app = createApp(App)

//全局配置
app.config.globalProperties.$axios=axios

app.mount('#app')
