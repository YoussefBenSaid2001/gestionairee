export const news = (req , res)=>{
    try{
        const content = req.body.content;
        // const newContent = new new;
    }catch(err){
            res.status(500).json(err)
    }
}