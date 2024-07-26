import { ObjectId } from "mongodb";
import { model, Schema, SchemaTypes } from "mongoose";

const commentSchema = new Schema({
    email: { type: SchemaTypes.String, ref: 'User', required: true },
    movie_id: { type: ObjectId, required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
});

const Comment = model("comments", commentSchema);

export default Comment;
