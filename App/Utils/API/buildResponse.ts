import { ApiResponse } from 'apisauce'

const buildResponse = ({ ok, data }: { ok: boolean; data: unknown }): ApiResponse<unknown, null> => {
  // @ts-ignore
  return {
    ok,
    data,
    problem: null,
    originalError: null,
  }
}

export default buildResponse
