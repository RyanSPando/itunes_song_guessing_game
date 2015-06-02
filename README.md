# iTunes Song Guessing Game

In this project you will use the iTunes lookup api get a song url and then play the song for the user.  The user should guess the song title, artist name or album.


### Details

1. You are given a songs.js file with a list of song ids.  Use the song ids and the itunes lookup api to play a random song.
2. Start playing the song and present the user with a input field to guess the song name, artist name, or album name.
3. Tell the user if the guess was correct, or incorrect.  Also, show the song title, artist name, album name and album cover art on the same page.
4. Make a stats screen that tells the user how many guesses were correct or incorrect.
5. Style the page so that the game looks appealing.

### Bonus

1. Investigate a styling library like bootstrap and use it in your app.
2. Make the stats data persist so that it stays on my browser even if I refresh.  This will require learning about browser local storage.
3. Improve the stats tab to keep a history of every song that was played, and if it was correct or incorrect.  Allow the user to play the preview of any song in the stats tab.

### Hints

1. The itunes api that you will use is the lookup api.  You can search google for itunes preview api.
2. The itunes api does not support cors.  You will have to make a jsonp request.  Here are the [jquery docs on jsonp](https://learn.jquery.com/ajax/working-with-jsonp/).
3. In order to play audio, you will need an audio tag on the page.  An audio tag looks like this:

```
<audio id="audio_preview" src="http://a632.phobos.apple.com/us/r1000/103/Music/3c/df/1f/mzm.aqrqqzxn.aac.p.m4a"></audio>
```

To play the audio file in javascript:

```
// This works since the tag above has the id of audio_preview
$("#audio_preview")[0].play();

// The above example will only work when the audio has been loaded at least partially.  
// Here is an example that waits until the audio can be played
$("#audio_preview").on("canplay", function() {
  $("#audio_preview")[0].play();
});
```