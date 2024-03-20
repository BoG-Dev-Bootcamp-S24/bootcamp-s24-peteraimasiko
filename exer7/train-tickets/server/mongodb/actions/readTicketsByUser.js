import mongoose from "mongoose";
import connectDB from "..";
import Ticket from "../models/Ticket";
import { ObjectId } from "mongodb";
import User from "../models/User";


export default async function readTicketsByUser(info) {
    try {
        await connectDB();
        if (! (await User.findById({_id: info.userId}))) {
            return ["nouser"]
        }
        const query = await Ticket.find({userId: new ObjectId(info.userId)});
        console.log(query)
        return query
    } catch (error) {
        return false
    }
    

}