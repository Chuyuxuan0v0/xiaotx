import http from '@/utils/http'
const getCategoryAPI = () => {
  return http({
    url: 'home/category/head'
  })
}

const getBannerAPI = () => {
  return http({
    url: '/home/banner'
  })
}

const getNewAPI = () => {
  return http({
    url: '/home/new'
  })
}
export { getCategoryAPI, getBannerAPI, getNewAPI }
