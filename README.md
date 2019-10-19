# Real-time collaborative drawing built with uWebSockets.js pub/sub
This repo implements a very basic, but fully functional collaborative drawing web app where anyone can join and draw. There are five sheets of paper to swap between using the 1, 2, 3, 4 and 5 keys.

The papers are of course implemented using separate pub/sub topics (or so called "rooms"), and whatever you draw is published to everyone looking at that paper.

For comparison there is also a Socket.IO implementation, however this is not meant as a benchmark (for benchmarking against Socket.IO, look at [the stock market example](https://github.com/uNetworking/pubsub-benchmark) instead).
