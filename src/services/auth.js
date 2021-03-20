import { CookieStorage } from 'cookie-storage'

import jwtDecode from 'jwt-decode'

const TOKEN = 'token'

const listeners = []

export const addAuthListener = (callback = () => {}) => {
  listeners.push(callback)

  return () => {
    const indexToRemove = listeners.length - 1

    listeners.splice(indexToRemove, 1)
  }
}

export const makeCookieStorage = () => {
  const date = new Date()
  const expires = new Date(new Date(date).getTime() + 60 * 60 * 24 * 1000)
  return new CookieStorage({
    expires,
  })
}
const cookieStorage = makeCookieStorage()

const getStorageAuthKey = (key) => key

export const getAccessToken = () => cookieStorage.getItem(getStorageAuthKey(TOKEN)) || null

export const decodedToken = () => (getAccessToken() && jwtDecode(getAccessToken())) || {}

export const onLogout = () => {
  cookieStorage.clear()
  listeners.forEach((callback) => callback(false))
}
export const login = ({ token }) => {
  cookieStorage.setItem(getStorageAuthKey(TOKEN), token)

  listeners.forEach((callback) => callback(true))
}
export const updateToken = (token) => {
  cookieStorage.setItem(TOKEN, token)
}
