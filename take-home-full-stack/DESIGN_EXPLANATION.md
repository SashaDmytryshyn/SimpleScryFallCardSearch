# Design Decisions and Thoughts
I implemented the '1 API request per second' check in the backend as well as in the frontend, as knowledgable users can bypass the frontend limiter by calling the backend themselves directly

I only display the normal sized image as attempting to display all of them drains to many resources.

If the user request has more cards than is returned in a single call, the next batch of cards are loaded in only when the user scrolls to the bottom of the page. To further optimize, I would consider loading at most ~30 at a time.

The api is called only when the input is unchanged for one second, the countdown starting from the last time the user typed a character.

For simplicity for this small project, if the scryfall api response "has_more" was true, I called the remaining of the cards directly instead of going through my endpoint, but also limited that direct call to 1 per second