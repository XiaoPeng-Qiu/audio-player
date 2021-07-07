import { request } from '@/utils'

export const getSearchHos = () => request('/search/hot')
export const getSearchSuggest = key => request(`/search/suggest?keywords=${key}`)
