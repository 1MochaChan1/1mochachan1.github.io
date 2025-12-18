import { getCollection } from 'astro:content';

const games = await getCollection('games');
games.forEach(game => {
  console.log(`ID: ${game.id}, Title: ${game.data.title}`);
});
