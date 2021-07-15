/*
 * @Descripttion: 
 * @Author: luxiyuan
 * @Date: 2021-07-15 16:18:50
 * @LastEditors: luxiyuan
 * @LastEditTime: 2021-07-15 16:26:56
 */
module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    'postcss-px2rem': {
      rootValue: 75,
      propList: ['*']
    }
  }
}