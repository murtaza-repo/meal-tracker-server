import { db } from './db';
import { ObjectID } from 'mongodb';

export const deleteMeal = async (mealId) => {
    const connection = db.getConnection();
    await connection.collection('meals')
        .deleteOne({ _id: ObjectID(mealId) });
}