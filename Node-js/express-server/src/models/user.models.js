import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({

  email: {
    required: true,
    unique: true
  },
  password: {
    required: true
  }
}, { timestamps: true })


const User = mongoose.model("User", userSchema)

export default User