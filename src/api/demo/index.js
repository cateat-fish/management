import request from '@/utils/request'

/**
 * 添加一个广告位置
 * @param {Object} data
 * @returns {AxiosPromise}
 */
export function addAdsPositionItem(data) {
  return request({
    url: '/v1/ads_position',
    method: 'post',
    params: {
      method: 'add.ads.position.item'
    },
    data
  })
}
