import { request } from '@/utils'

export const getBanner = () => request('/banner?type=0')
export const getRecPlaylist = () => request('/personalized?limit=10')
export const getNewSong = () => request('/personalized/newsong?limit=9')
export const getRecMv = () => request('/personalized/mv')