import success from './success.json'
import { buildResponse } from '../../../Utils'

import { CharacterDataWrapper } from '../../../Entities'

export default {
  success: buildResponse<CharacterDataWrapper>({
    ok: true,
    data: success,
  }),
  error: buildResponse<CharacterDataWrapper>({
    ok: false,
    data: null,
  }),
}
