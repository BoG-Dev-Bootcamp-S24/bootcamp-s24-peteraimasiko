import connectDB from "..";
import User from "../models/User";

async function createUser(userInfo) {
    try {
        await connectDB();
        const newUser = new User(userInfo)
        await newUser.save()
        return true
    } catch (error) {
        return false
    }
    
}

export default createUser
