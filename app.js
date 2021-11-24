// require('./addValues')
const os = require('os');
const user = os.userInfo();
console.log("user", user)

const currOSInfo ={
  name : os.type(),
  release : os.release(),
  upTime : (os.uptime()),
  freeMem : os.freemem(),
  totalMem : os.totalmem()
}
console.log("currOSInfo", currOSInfo)
