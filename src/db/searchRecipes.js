import { db } from './db';

export const searchRecipes = async (searchString) => {
    const connection = db.getConnection();
    let meals = [];

    if(searchString.toLowerCase() === 'all'){
        meals = await connection.collection('recipes')
            .find({})
            .toArray();
    } else {
        meals = await connection.collection('recipes')
            .find({ $text: { $search: searchString }})
            .toArray();
    }
        
    return meals;
}