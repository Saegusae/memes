const MEME = require('./memes.json');

module.exports = function MEMES(dispatch) {

    dispatch.hook('C_CHAT', 1, (event) => {
        if(event.message.includes('!meme')) {
            for(let meme in MEME) {
                if(event.message.includes(meme.toString().toLowerCase())) {
                    dispatch.toServer('C_CHAT', 1, {
                        channel: event.channel,
                        message: '<FONT>'+MEME[meme]+'</FONT>'
                    });
                    return false;
                }
            }

            

            dispatch.toServer('C_CHAT', 1, {
                channel: event.channel,
                message: '<FONT>' + randomMeme(MEME) + '</FONT>'
            });
            
            return false;
        }
            
    });

    let randomMeme = function(obj) {
        let keys = Object.keys(obj)
        return obj[keys[ keys.length * Math.random() << 0]];
    };

}