const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost:27017/nodemountain',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('DB Connected!');
    // start()
  })
  .catch(err => console.error(err));

const db = mongoose.connection;
db.on('error', (e)=>{ console.error(e); });

db.once('open', () => {
    start();
});

function start() {
  const ProxyModel = require('./proxyModel');
  console.log('start')
  const test = new ProxyModel({
    port: 5555,
    subdomain: 'apa.nodethat.net'
  });
  // console.log(test);
  test.save().then((proxy, error) => {
      console.log('saved: ', proxy, error);
    })
    .catch(err => console.error(err));
}
