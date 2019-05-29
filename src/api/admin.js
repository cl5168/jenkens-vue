import request from '@/utils/request'

export const userLoginAdmin = (data) => request({url: '/api/admin/getUser', method:'post' ,data:data}).then(res => res.data);   