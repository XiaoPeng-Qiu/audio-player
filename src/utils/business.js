
export function createSong (obj) {
  const { id, imgUrl, name, singer, album, duration, albumId, mvId , ...args} = obj
  return {
    id,
    imgUrl,
    name,// 歌曲名称
    singer,// 歌手
    singerText: singerText(singer),
    album,// 专辑
    duration,// 时长
    albumId,// 专辑id
    mvId,
    playUrl: getSongPlayUrl(id),
    ...args
  }
}
export function singerText (singer) {
  // console.log(singer)
  return (singer || []).map(item => item.name).join('/')
}
export function getSongPlayUrl (id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}