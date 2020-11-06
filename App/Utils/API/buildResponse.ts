// @ts-nocheck
import { ApiResponse } from 'apisauce'

const buildResponse = <T>({ ok, data }: { ok: boolean; data: unknown }): ApiResponse<T, null> => {
  return {
    ok,
    data,
    problem: null,
    originalError: null,
  }
}

export default buildResponse
