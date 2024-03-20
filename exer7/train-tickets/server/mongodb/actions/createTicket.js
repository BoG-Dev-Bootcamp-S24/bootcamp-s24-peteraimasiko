import { ObjectId } from "mongodb";
import connectDB from "..";
import Ticket from "../models/Ticket";

async function createTicket(TicketInfo) {
    try {
        await connectDB();
        const newTicket = new Ticket({lineColor: TicketInfo.lineColor, station: TicketInfo.station, userId: new ObjectId(TicketInfo.userId)});
        await newTicket.save();
        return true
        
    } catch (error) {
        return false
    }
    
}

export default createTicket
