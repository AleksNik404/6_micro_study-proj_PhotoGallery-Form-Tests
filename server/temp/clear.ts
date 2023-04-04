import { connect, connection } from 'mongoose';

async function clear() {
  await connect(
    'mongodb+srv://Griz-rss-gameCard:Griz-rss-gameCard@cluster0.2mffwm9.mongodb.net/GameCard?retryWrites=true&w=majority'
  );

  const data = await connection.collection('Game').find().toArray();

  if (data.length) await connection.collection('Game').drop();

  await connection.close();
}

clear()
  .then(() => {
    console.log('[clear] : success');
  })
  .catch((error) => {
    console.log(`[clear] : error: `, error);
  });
