import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fuser-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg&tbnid=hmy6sO63nVxONM&vet=12ahUKEwizhdCcntKEAxW8TKQEHR6XAYsQMygAegQIARBx..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&docid=ZyFeK2BRducuvM&w=626&h=626&q=user%20profile&ved=2ahUKEwizhdCcntKEAxW8TKQEHR6XAYsQMygAegQIARBx"
      },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
