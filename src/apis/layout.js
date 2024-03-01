import http from '@/utils/http'
const getCategoryAPI = () => {
  return http({
    url: 'home/category/head'
  })
}

export { getCategoryAPI }
