import request from '@/utils/request'

export const getValue = (data) => request({url: '/api/getValue', method: 'get' ,params:data}).then(res => res.data);   
export const setValue = (data) => request({url: '/api/setValue', method:'post' ,data:data}).then(res => res.data);            