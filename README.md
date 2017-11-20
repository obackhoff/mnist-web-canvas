# mnist-web-canvas
Draw a digit from 0 to 9 on a p5js sketch and predict the digit using a trained neural network (MLP). 

I use a simple Feed Forwrad NN class, which is also in one of my repositories, to create, train and predict (in this case) the MNIST digital hand written digits dataset. 

There is a simple node service which displays the canvas to draw and provides it with the API to call the pyhon program and get the prediction given the pre-traiend model.

To run, make sure you have all the dependencies for python: pickle, numpy, json, optparse. The dependencies for Nodejs are in the package.json, simply run:
```npm install```

To run it: ```node mnist.js``` and access it in http://localhost:8080

Screeshots:

<a href="url"><img src="https://github.com/obackhoff/mnist-web-canvas/raw/master/screen1.png" align="left" width="200" ></a>
<a href="url"><img src="https://github.com/obackhoff/mnist-web-canvas/raw/master/screen2.png" align="left" width="200" ></a>
<a href="url"><img src="https://github.com/obackhoff/mnist-web-canvas/raw/master/screen3.png" align="left" width="200" ></a>



