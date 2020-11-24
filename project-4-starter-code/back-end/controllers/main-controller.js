const articles = [
    {
    id: 1,
    title: 'eat fried chicken',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 4,
    title: 'how to studey react',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 7,
    title: 'how to vote',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'jouza',
    },
    ];

const artical=(req,res)=>{
    res.json(articles)
}
const createNewArticle=(req,res)=>{
articles.push(req.body)
res.json("done")
}
const changeArticleTitleById=(req,res)=>{
    for(let i=0;i<articles.length-1;i++){
        if(articles[i].id===req.params.id){
            articles[i].title=req.newTitle
            res.json("done")
        }
    }
}
module.exports={
    artical,
    createNewArticle,
    changeArticleTitleById
}