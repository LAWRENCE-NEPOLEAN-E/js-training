// for in -  is for objects

console.log("testing for in:");

const post = {
    'id' : 1,
    'title': 'post title',
    'body': 'post body'

}
for (let posts in post) {
    console.log(post); // to get id
}

for (let posts in post) {
    console.log(post[posts]); // to get property
}