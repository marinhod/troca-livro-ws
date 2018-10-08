import * as mongoose from 'mongoose';
import { LoanSchema } from '../schema/Usuario';
import { Loan, LoanDocument } from '../entities/Autor';

const LoanModel = mongoose.model<LoanDocument>(
    'Loan', 
    LoanSchema, 
    'loans'
);

class LoanRepo {
    static async create(loan: Loan): Promise<Loan> {
        let newItem = new LoanModel(loan);
        return newItem.save();
    }
    static async list(): Promise<Loan[]> {
        let list = await LoanModel.find().lean().exec();
        return list;
    }
}

export default LoanRepo;
