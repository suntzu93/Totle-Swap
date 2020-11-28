# Totle-Swap

This subgraph indexes and exposes in GraphQL all the event data related to the Totle Swap contracts, providing an easy access to :

Tracking Swap transaction
Get Status network

A live version of this subgraph can be found [here](https://thegraph.com/explorer/subgraph/suntzu93/totle-swap-exchange), along with useful queries and examples already available on the playground.

Example
Query top 5 swap order:

curl -X POST -H "Content-Type: application/json" --data '{"query":"{logSwaps(first:5) {sourceAsset,destinationAsset,sourceAmount,destinationAmount,feeAsset ,feeAmount}","variables":null}'
