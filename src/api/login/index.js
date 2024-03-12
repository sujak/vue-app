import request from '@/axios'

export const loginApi = (data) => {
  return request.post({ url: '/mock/user/login', data })
}

export const loginOutApi = () => {
  return request.get({ url: '/mock/user/loginOut' })
}

export const getUserListApi = ({ params }) => {
  // <{
  //   code: string
  //   data: {
  //     list: UserType[]
  //     total: number
  //   }
  // }>
  return request.get({ url: '/mock/user/list', params })
}

export const getAdminRoleApi = (params) => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params) => {
  return request.get({ url: '/mock/role/list2', params })
}
