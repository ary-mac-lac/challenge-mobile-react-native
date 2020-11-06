import { ApiResponse } from 'apisauce'

export type ReactQueryWrapper<T> = ApiResponse<T, null>[] | undefined
