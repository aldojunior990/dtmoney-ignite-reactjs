import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { createServer, Model } from 'miragejs'


createServer({

  models: {

    transaction: Model,

  },
  seeds(server) {
    server.db.loadData({
      transactions: [

      ]
    })
  },
  routes() {

    this.namespace = 'https://dtmoney-ignite-reactjs.vercel.app'


    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })


    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

