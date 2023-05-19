import {Request,Response} from 'express'
import {pool} from '../database'
import {QueryResult} from 'pg'

export const getVideoGames = async (req:Request,res:Response):Promise<Response> =>{
    try{
        const response: QueryResult = await pool.query('SELECT * FROM public."Videogames"')
        return res.status(200).json(response.rows);
    } catch(e){
        console.log(e)
        return res.status(500).json('Internal Server Error')
    }
    
}

export const getVideoGameById = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM public."Videogames" WHERE id = $1', [id])
    return res.json(response.rows)
}

export const createVideoGame = async (req:Request,res:Response):Promise<Response> =>{
    let {name,release_year,developer,genre} = req.body
    release_year = parseInt(release_year)
    const response: QueryResult = await pool.query('INSERT INTO public."Videogames" (name,release_year,developer,genre) VALUES ($1,$2,$3,$4)',[name,release_year,developer,genre])
    return res.json({ message: 'Se creo el videojuego'})
}

export const updateVideoGame = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id)
    let {name,release_year,developer,genre} = req.body
    release_year = parseInt(release_year)
    const response: QueryResult = await pool.query('UPDATE public."Videogames" SET name = $1, release_year = $2, developer = $3, genre = $4 WHERE id = $5', [name,release_year,developer,genre,id])
    return res.json({message:'Se actualizo el videojuego'})
}

export const deleteVideoGame = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('DELETE FROM public."Videogames" WHERE id = $1', [id]);
    return res.json('Se elimino el videojuego '+ id);

    
}