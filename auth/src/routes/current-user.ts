import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('hi mate!');
})

export {router as currentUserRouter}