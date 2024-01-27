import http from '@/utils/http';

function getCategoryAPI () {
    return http({
      url: 'home/category/head'
    })
  }

export default {
    getCategoryAPI
}