console.log("Let's get this party started!");

$('#find-gif').on("click", async function(){
    console.log("hello");
    addGif(await getGif($('#gif-search').val()));
});

$('#remove-gifs').on("click", function(){
    $('#gif-area').html("");
});

async function getGif(search){
    console.log(search);
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'O3G4u5OheYNTKZloKSGDQLJsAIcisYJ9',
            q: search
        }
    });
    return res.data.data[0].images.original.url;
}

async function addGif(url){
    const gif = $('<div>').addClass('gif').append($('<img>').addClass('gif-img').attr('src', url));
    $('#gif-area').append(gif);
}

