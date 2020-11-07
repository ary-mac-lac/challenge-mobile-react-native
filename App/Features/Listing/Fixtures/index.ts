import success from './success.json'
import small from './small.json'

import { buildResponse } from '../../../Utils'
import { CharacterDataWrapper } from '../../../Entities'

export default {
  success: buildResponse<CharacterDataWrapper>({
    ok: true,
    data: success,
  }),
  small: buildResponse<CharacterDataWrapper>({
    ok: true,
    data: small,
  }),
  error: buildResponse<CharacterDataWrapper>({
    ok: false,
    data: null,
  }),
}
