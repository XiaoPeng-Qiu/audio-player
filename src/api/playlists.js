import { request } from '@/utils'
// params
// ?limit=1&cat=民谣
export const getTopPlaylists = params => request('/top/playlist/highquality', {params})
// order cat limit offset
export const getPlaylists = params => request('/top/playlist',{ params })
export const getPlaylistDetail = id => request(`/playlist/detail?id=${id}`)
// /comment/music
// /lyric


// /simi/playlist
// /simi/song