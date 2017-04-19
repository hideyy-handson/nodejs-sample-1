## Node.js Sample App

### Pre-Operation

Install git client.

```
sudo yum install git -y
```

Clone this repository.
```
git clone https://github.com/hideyy-handson/nodejs-sample-1.git
```

Install Node.js (version 4.4.5)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash  
. ~/.nvm/nvm.sh
nvm install 4.4.5
node -e "console.log('Running Node.js ' + process.version)"ß
```

Install forever

```
npm -g install forever
```
