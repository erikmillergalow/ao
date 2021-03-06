// sample configuration.js,
// production configuration.js should be in root folder of ao
module.exports = {
    rethink: {
        host: 'localhost',
        port: 28016,
        db:'dctrl',
    },
    bitcoind:{
        username:'bitcoinrpc',
        password:'',
        network: 'testnet'
    },
    bitcoinAverage: {
        pub: '',
        secret: ''
    },
    lnd: {
        rpcserver: 'localhost:10009',
        cert: "/home/trhode/.lnd/tls.cert",
        macaroon: "/home/trhode/.lnd/admin.macaroon",
    }
}
