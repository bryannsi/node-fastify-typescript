export const userSchema = {
  title: "Users schema",
  type: "object",
  params: {
    properties: {
      dni: { type: "string" }
    }
  },
  additionalProperties: false,
  required: ["dni"]
}

export default { userSchema }
