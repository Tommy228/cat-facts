# 🐱 Cat Facts Voting App

## Goal
You will build a small Angular feature that fetches random cat facts from a public API and allows the user to vote 👍 or 👎 for each fact.

We’ve already prepared the UI using Angular Material.  
Your task is to **add the logic**.

## Requirements

1. **Fetch a random cat fact**
   - Use the `GET https://catfact.ninja/fact` endpoint.
   - Display the fetched fact in the top card.

2. **Upvote / Downvote**
   - When the user clicks 👍 or 👎, add the fact to the list below
   - Show all voted facts in the list below.

## API Reference
**Endpoint:**

GET https://catfact.ninja/fact
```json
{
  "fact": "Cats sleep 70% of their lives.",
  "length": 41
}
```

## What's provided

* Angular Material layout and components
* HTML/CSS for:
  - Random fact card
  - Voted facts list
 
## What you need to do

* Implement the call to the API to fetch and display facts
* Wire up the "Fetch New Fact" button
* Wire up the 👍 / 👎 buttons to update the voted facts list
* Display the updated voted facts list in the UI  

