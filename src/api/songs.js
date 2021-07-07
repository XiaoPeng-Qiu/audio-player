import { request } from '@/utils'
export const getSongsDetail = ids => request(`/song/detail?ids=${ids}`)