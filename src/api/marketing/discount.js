import request from '@/utils/request'

/**
 * 添加一个商品折扣
 * @param {Object} data
 * @returns
 */
export function addDiscountItem(data) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'add.discount.item'
    },
    data
  })
}

/**
 * 编辑一个商品折扣
 * @param {Object} data
 * @returns
 */
export function setDiscountItem(data) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'set.discount.item'
    },
    data
  })
}

/**
 * 获取一个商品折扣
 * @param {Number} discount_id
 * @returns
 */
export function getDiscountItem(discount_id) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'get.discount.item'
    },
    data: {
      discount_id
    }
  })
}

/**
 * 批量删除商品折扣
 * @param {Array} discount_id
 * @returns
 */
export function delDiscountList(discount_id) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'del.discount.list'
    },
    data: {
      discount_id
    }
  })
}

/**
 * 批量设置商品折扣状态
 * @param {Array} discount_id
 * @param {Number} status
 * @returns
 */
export function setDiscountStatus(discount_id, status) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'set.discount.status'
    },
    data: {
      discount_id,
      status
    }
  })
}

/**
 * 获取商品折扣列表
 * @param {Object} data
 * @returns
 */
export function getDiscountList(data) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'get.discount.list'
    },
    data
  })
}

/**
 * 根据商品编号获取折扣信息
 * @param {Array} goods_id
 * @returns
 */
export function getDiscountGoodsInfo(goods_id) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'get.discount.goods.info'
    },
    data: {
      goods_id
    }
  })
}

/**
 * 根据编号获取折扣商品明细
 * @param {Array} discount_id
 * @returns
 */
export function getDiscountGoodsList(discount_id) {
  return request({
    url: '/v1/discount',
    method: 'post',
    params: {
      method: 'get.discount.goods.list'
    },
    data: {
      discount_id
    }
  })
}
