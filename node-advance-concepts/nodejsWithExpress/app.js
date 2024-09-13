//IMPORT PACKAGE
const { application } = require('express');
const express = require('express');
const fs = require('fs')
// const morgan = require('morgan');
// const moviesRouter = require('./Routes/moviesRoutes');

let app = express();


const logger = function(req, res, next){
    console.log('Custom middleware called');
    next();
}

app.use(express.json());

// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'))
// }

// app.use(express.static('./public'))
app.use(logger);
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
})

// app.use('/api/v1/movies', moviesRouter)

// module.exports = app;



// const express = require('express');
// const fs = require('fs')


// TOPIC 17 : Intro to Express JS
// let app = express();
// // ROUTE= HTTP METHOD + URL
// app.get('/', (req, res)=>{
//     res.status(200).send("<h3>Hello from express js !!</h3>")
// })



// // TOPIC 20 : REST - USING ROUTES
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

// TOPIC 21 : HTTP- verbs using express

//GET - /api/v1/movies
// app.get('/api/v1/movies', (req,res)=>{
//     res.status(200).json({
//         status: "success",
//         count: movies.length,
//         data: {
//             moviesList: movies
//         }
//     })
// })


//POST - /api/v1/movies
// app.use(express.json());
app.post('/api/v1/movies', (req,res)=>{
    console.log(req.body)
    const newId = movies[movies.length -1].id + 1;
    const newMovie = Object.assign({id: newId}, req.body)
    movies.push(newMovie);

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err)=> {
        res.status(200).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })
    })
})

//GET - /api/v1/movies/:id?
// app.get('/api/v1/movies/:id', (req,res)=>{
//     console.log(req.params)
//     const id = req.params.id * 1;
//     let movie = movies.find(el=> el.id===id)

//     if(!movie){
//         return res.status(404).json({
//             status: "failed",
//             message: `Movie object not found for given id:${id}`
//         })
//     }

//     res.status(200).json({
//         status: "success",
//         data: {
//             movie: movie
//         }
//     })
// })

//PATCH - /api/v1/movies/:id
app.patch('/api/v1/movies/:id', (req,res)=>{
    console.log(req.params)
    const id = req.params.id * 1;
    let moviesToUpdate = movies.find(el=> el.id===id)

    if(!moviesToUpdate){
        return res.status(404).json({
            status: "failed",
            message: `Movie object not found for given id:${id}`
        })
    }
    let index = movies.indexOf(moviesToUpdate);

    Object.assign(moviesToUpdate, req.body)
    movies[index] = moviesToUpdate

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err)=> {
        
        res.status(200).json({
            status: "success",
            data: {
                movie: moviesToUpdate
            }
        })
    })
})

//DELETE - /api/v1/movies/:id
app.delete('/api/v1/movies/:id', (req,res)=>{
    console.log(req.params)
    const id = req.params.id * 1;
    
    let moviesToDelete = movies.find(el=> el.id===id)

    if(!moviesToDelete){
        return res.status(404).json({
            status: "failed",
            message: `Movie object not found for given id:${id}`
        })
    }
    
    let index = movies.indexOf(moviesToDelete);
    movies.splice(index,1)

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err)=> {
        
        res.status(204).json({
            status: "success",
            data: {
                movie: null
            }
        })
    })
})

// Router handler restructured 1

const getAllMovies = (req,res)=>{
    return res.status(200).json({
        status: "success",
        count: movies.length,
        data: {
            moviesList: movies
        }
    })
}

const getMovie =(req,res)=>{
    console.log(req.params)
    const id = req.params.id * 1;
    let movie = movies.find(el=> el.id===id)

    if(!movie){
        return res.status(404).json({
            status: "failed",
            message: `Movie object not found for given id:${id}`
        })
    }

    return res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }
    })
}

// app.get('/api/v1/movies', getAllMovies)
// app.get('/api/v1/movies/:id', getMovie)
// app.post('/api/v1/movies', createMovie)
// app.patch('/api/v1/movies/:id', updateMovie)
// app.delete('/api/v1/movies/:id', deleteMovie)


// // Router handler restructured 2
app.route('/api/v1/movies')
    .get(getAllMovies)
    // .post(createMovie)

app.route('/api/v1/movies/:id')
    .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

// CREATE A SERVER
const port =  3000;
app.listen(port, ()=>{
    console.log("server has strted........")
})
