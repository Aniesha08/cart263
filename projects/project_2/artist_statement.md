Aniesha Sangarapillai
CART263 Creative Computation II
Pippin Barr

Project 2 - Something is Wrong on the Internet (Itsy Bitsy)

After reading James Bridle’s essay on Something is Wrong on the Internet, I found his TedTalk video on Youtube regarding the same topic. Watching the video helped me understand his points more clearly. I took notes of some keywords that stood out to me from his speech as well as words that came to my mind while watching. Some of those words are: repetition, keyword salad, originality, strangeness, automation, literacy, education, kids, surprise eggs and so on. While looking at the upcoming activities from the course schedule, I stumbled upon an activity called Condiments in which a list of condiments, verbs, cats and rooms (stored in a JSON file) are randomly chosen and put into a string as variables to form a sentence. The result is a sentence that makes no sense. When we refresh, the page randomly generates a new sentence each time. I found this activity to be a great basis for my project. I then started to think about how I can incorporate inspiration from Bridle into the project.

I decided that I would like my project to be a game for kids (ideally ages eight and up). As Bridle mentioned, there are billions of kids videos online in which the concepts are exactly the same but there are variations in the way it is presented. Some of them seem child-friendly while others have extremely poor graphics, are cringy and even contain adult content. It is difficult to say who created these videos and where it all originated from. The videos are very strange, scary and make no sense as the videos seem familiar, but are unfamiliar at the same time. These videos have keyword salad titles just to trigger the kids to see more videos. 

Based on these characteristics, I decided to use a famous nursery rhyme: Itsy-Bitsy Spider in which I replace certain words from the original lyrics. These words are divided into five categories: insect, a place, a liquid, a noun & verb (which have their own list of words) and are stored as JSON objects. After loading the data into my javascript file, I created a string for the lyrics. With each category transformed into variables, a random word is selected from the list of words from each category to replace the words of the lyrics. Every time the game is loaded, the page will generate a new lyric.

The summary of the game is for the child to say the lyrics correctly and see a prize at the end of the game. The game’s core interaction is through voice interaction. I achieved this through the help of Annyang. As annyang is not able to accurately detect really long strings of text, I cut the lyrics into three parts. Still, I had some difficulty making it accurately detect all the words from one line. This, I would say, worked in my favour because this game is for kids. Surely, children do not necessarily pronounce as clear as adults. Therefore, I decided that I will tell annyang to detect if the user can say only a small part of the line correctly, the rest of the lyrics will not be counted to pass each line. The *tag variable is used in the string which means that the user can say anything in that part of the string. The child has to pass through three lines to finally see a surprise. 

The following is one of the outcomes from the randomly generated lyrics: 
“Itsy bitsy lice climbed up my shoe, Down came the vomit and clean the lice out. Out came the monster and sucked up all the vomit. And the itsy bitsy lice climbed up my shoe again”.

The outcome of the lyrics covers the themes of repetition, humour, surprise, weirdness nonsense and sometimes even violence. The weirdness of the lyrics creates a sense of amusement which can stimulate a sense of addiction. In the congratulations page, I have mentioned that more surprises are waiting as a prompt to make the child play the game again. When the child plays the game again, they will realize that the lyrics are not the same as before and that the lyrics are weird and funny. This will make the child curious every time as to what the next lyrics might be. Therefore, they will want to continue to play the game. The surprises also are not the same every time. For the surprises, I chose random objects that I have found in my house to add another layer of weirdness to the game. There is no educational purpose to the game, just like the millions and millions of children youtube videos that are in the dark rabbit hole mentioned by Bridle. They just feed off of children’s engagement to create more and more of the same videos and to create profit. Some lyrics from my game may be silly and funny while some may turn out to be violent such: “…Down came the monster and punched up all the blood”. Through my game, children may be caught saying things that they are not supposed to say which will then create a bad influence on them, just like how kids are fed kids videos that have content that is not suitable for kids at all. By replacing words from the lyrics, just like the functionality of keyword salads in Youtube videos, my game shines light on its negative consequences. 

Credits:

Egg Illustrations: Myself

Background Image: Myself

Surprise Images: Taken & Edited by Myself

Wow Sound: “Crowd Wow Surprise People” by dersuperanton (https://freesound.org/people/dersuperanton/sounds/437645/). 

Here is the link to the screen recording or the project:
https://github.com/Aniesha08/cart263/blob/master/projects/project_2/project2_screen_recording.mov











