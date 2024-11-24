import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  permissions: { type: [String], required: true },
});

export default model("Role", RoleSchema);
