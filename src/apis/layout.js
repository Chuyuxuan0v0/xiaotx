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
export { getCategoryAPI, getBannerAPI }
