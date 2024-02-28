import Cookies from 'js-cookie'
// 用的Cookies  用了js-cookie模块
const TokenKey = 'Admin-Token'

export function getToken() { // 获取token
  return Cookies.get(TokenKey)
}

export function setToken(token) { // 设置token
  return Cookies.set(TokenKey, token)
}

export function removeToken() { // 移除token
  return Cookies.remove(TokenKey)
}
