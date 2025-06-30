import mongoose from "mongoose";

//que es esto?
import mongoosePaginate from "mongoose-paginate-v2";

const userCollection = "users";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        trim: true
    },
    last_name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
        min: 0,
        max: 120
    },
    password: {
        //Falta agregar FORMATO HASH
        type: String,
        require: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    }
});

//Para que quiero paginar usuario? que significa y que es coherente hacer segun un caso tradicional de userSchema en la industria?
userSchema.plugin(mongoosePaginate);

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;