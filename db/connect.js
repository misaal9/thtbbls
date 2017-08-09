import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// mongoose connection
const dbUser = process.env.DBUSER;
const pwd = process.env.PWD;
const dbURI = `mongodb://${dbUser}:${pwd}@ds153682.mlab.com:53682/thought-bubble`;
var dbConnectPromise = mongoose.connect(dbURI, {
  useMongoClient: true
});

const exitHandler = () => {
  console.log('Node is shutting down. Cleanup in progress.');
  console.log('Cleanup completed. 123');
};

dbConnectPromise.then(db=>{
  db.on('error', () => {
    console.log('there was an error');
  });
  db.on('open', ()=> {
    console.log('connecton is now open');
  });
}).catch(err=>console.log(`${err} 12345`));

process.on('exit', exitHandler.bind(null));
process.on('SIGINT', exitHandler.bind(null));

export default dbConnectPromise;
