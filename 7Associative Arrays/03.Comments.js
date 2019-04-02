function solve (input) {
    let users=[];
    let articles=[];
    let comments={};

    for (let line of input) {
        if(line.startsWith('user ')){
            let userName=line.replace('user ','');
            users.push(userName);
        }else if(line.startsWith('article ')){
            let article=line.replace('article ', '');
            articles.push(article);
        }else{                                           // someUser posts on someArticle: NoTitle, stupidComment
            let tokens = line.split(/[\s,:]/g).filter(x => x !== '');  // [ 'someUser','posts', 'on', 'someArticle','NoTitle', 'stupidComment' ]
            let username=tokens[0];
            let article=tokens[3];

            if(users.includes(username) && articles.includes(article)){
                tokens=line.split(': ');
                let comment = tokens[1].replace(',', ' -');
                if(!comments.hasOwnProperty(article)){
                    comments[article]=[];
                }
                comments[article].push((`--- From user ${username}: ${comment}`));
            }
        }
    }
    let sortedArticles = Object.keys(comments).sort((a, b) => comments[b].length - comments[a].length);

    for (let article of sortedArticles) {
        console.log(`Comments on ${article}`);
        let sortedComments = Object.keys(comments[article]).sort( (a, b) =>{
            let aUsername = comments[article][a].split(':')[0].replace('--- From user ', '');
            let bUsername = comments[article][b].split(':')[0].replace('--- From user ', '');
            return aUsername.localeCompare(bUsername);
        });
        for (let comment of sortedComments) {
            console.log(comments[article][comment]);
        }
    }
}
solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 
'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 
'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 
'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);