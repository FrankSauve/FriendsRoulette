const thumbnailImg = document.querySelector('#thumbnail');
const description = document.querySelector('#description');
const episodeH1 = document.querySelector('#episode')

function spin() {
    const roulette = document.querySelector('#roulette');
    roulette.classList.add('roulette-spin');
    setTimeout(function () {
        roulette.classList.remove('roulette-spin');
        getRandomEpisode();
    }, 2000);
}

function getRandomEpisode() {
    $.getJSON('data/episodes.json', function (friends) {
        var season = Math.floor(Math.random() * 10);
        var episode = Math.floor(Math.random() * friends.seasons[season].episodes.length);
        console.log("Season var " + season);
        console.log("Episode var " + episode);
        console.log(friends.seasons[season].episodes[episode]);
        thumbnailImg.src = friends.seasons[season].episodes[episode].image;
        episodeH1.innerHTML = "<b>Season " + friends.seasons[season].number +
                                " Episode " + friends.seasons[season].episodes[episode].number + ": </b>" +
                                 friends.seasons[season].episodes[episode].title;
        description.innerHTML = friends.seasons[season].episodes[episode].description;
    });
}
