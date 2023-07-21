export const userSchema = {
  params: {
    type: 'object',
    properties: {
      dni: { type: 'string' },
    }
  }
}

export default { userSchema }