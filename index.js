//let { id } = require("./allClientsData/dimaId.json")
// Include the chrome driver
require("chromedriver");
let { data } = require("./clientsKone9am.json")
let { data2 } = require("./clientsKone17pm.json")

let { data3 } = require("./clientsMicrosoft9am.json")
let { data4 } = require("./clientsMicrosoft17pm.json")
let { data5 } = require("./clientsMicrosoft745am.json")
let { data6 } = require("./clientsMicrosoft830am.json")
let { data7 } = require("./clientsMicrosoft845am.json")
let { data8 } = require("./clientsMicrosoft1530pm.json")
let { data9 } = require("./clientsMicrosoft16pm.json")
let { data14 } = require("./clientsMicrosoft10am.json")


let { data10 } = require("./clientsPanda845am.json")
let { data11 } = require("./clientsPanda10am.json")
let { data12 } = require("./clientsPanda16pm.json")
let { data13 } = require("./clientsPanda1645pm.json")




const MicrosoftWorkspace = `[value='msteams-fibo']`
const KoneWorkspace = `[data-shared-channel='kone']`
const PandaWorspace = `[data-shared-channel='pandacoachbot']`

const morningSession = "6200d57014d1b95a4c82dc68"
const eveningSession = "61b65debfe32175adb317233"


async function run(id, Workspace, Session) {
    let { email, pass } = require("./logpas.json");
    // Include selenium webdriver
    let swd = require("selenium-webdriver");
    let browser = new swd.Builder();
    let tab = browser.forBrowser("chrome").build();
    // Get the credentials from the JSON file
    let tabToOpen = tab.get("https://www.fibofy.com/signin/?redir=/panda/admin/");

    tabToOpen
        .then(function () {
            console.log(`1/////////`)
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })
        .then(function () {
            console.log(`2/////////`)
            // Step 2.-1 - Finding the Sign In button
            let promiseFormBtn = tab.findElement(
                swd.By.css("#login-fibo")
            );
            return promiseFormBtn;
        })
        .then(function (FormBtn) {
            console.log(`3/////////`)
            // Step 2.0 - Clicking the Sign In button
            let promiseClickFormIn = FormBtn.click();
            return promiseClickFormIn;
        })

        .then(function () {
            console.log(`4/////////`)
            // Step 2.1 - Finding the username input
            let promiseUsernameBox =
                tab.findElement(swd.By.css("[name='username']"));
            return promiseUsernameBox;
        })
        .then(function (usernameBox) {
            console.log(`5/////////`)
            // Step 3 - Entering the username
            let promiseFillUsername =
                usernameBox.sendKeys(email);
            return promiseFillUsername;
        })
        .then(function () {
            // Step 4 - Finding the password input
            let promisePasswordBox =
                tab.findElement(swd.By.css("[name='password']"));
            return promisePasswordBox;
        })
        .then(function (passwordBox) {
            // Step 5 - Entering the password
            let promiseFillPassword =
                passwordBox.sendKeys(pass);
            return promiseFillPassword;
        })
        .then(function () {
            // Step 6 - Finding the Sign In button
            let promiseSignInBtn = tab.findElement(
                swd.By.css("#next")
            );
            return promiseSignInBtn;
        })
        .then(function (signInBtn) {
            // Step 7 - Clicking the Sign In button
            let promiseClickSignIn = signInBtn.click();
            return promiseClickSignIn;
        })
        .then(function () {
            console.log("Successfully signed in fibo Panda!");
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseDropDown = tab.findElement(
                swd.By.css(".select_workspace")
            );
            return promiseDropDown;
        })
        .then(function (DropDown) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickOption = DropDown.click();
            return promiseClickOption;
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseDropDown2 = tab.findElement(
                swd.By.css(Workspace)
            );
            return promiseDropDown2;
        })
        .then(function (DropDown2) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickOption2 = DropDown2.click();
            return promiseClickOption2;
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseFetchBtn = tab.findElement(
                swd.By.css("#fetchUserBtn")
            );
            return promiseFetchBtn;
        })
        .then(function (FetchBtn) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickFetch = FetchBtn.click();
            return promiseClickFetch;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })

        .then(function () {
            // Step 6 - Finding the user by id
            console.log(`/////////${id}/////////`)
            let promiseFindUser = tab.findElement(
                swd.By.css(`[data-userid='${id}']`)
            );
            return promiseFindUser;
        })
        .then(function (FindUser) {
            let promiseClickFind = FindUser.click();
            return promiseClickFind;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 1000, // 10 seconds
                });
            return findTimeOutP;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })

        .then(function () {
            let promiseMessageBox =
                tab.findElement(swd.By.css("#start_flow_id"));
            return promiseMessageBox;
        })
        .then(function (MessageBox) {
            let promiseFillMessage =
                MessageBox.sendKeys(Session);
            return promiseFillMessage;
        })


        .then(function () {
            let promiseSendBtn = tab.findElement(
                swd.By.css("[class='send_flow']")
            );
            return promiseSendBtn;
        })
        


        .then(function (SendBtn) {
            let promiseClickSend = SendBtn.click();
            return promiseClickSend;
        })

        
        
        .catch(function (err) {
            console.log("Error ", err, " occurred!");
        })
        .then(function () {
            let findTimeOutP = tab.sleep(7000)
            return findTimeOutP;
        })
        .then(function () {
            let findTimeOutP3 = tab.close();
            return findTimeOutP3;
        })
}


//Microsoft 7.45AM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 7 && date.getMinutes() === 45) { // Check the time
        // Do stuff
        for (let index = 0; index < data5.length; index++) {
            const element = data5[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 8.30AM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 8 && date.getMinutes() === 30) { // Check the time
        // Do stuff
        for (let index = 0; index < data6.length; index++) {
            const element = data6[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 8.45AM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 8 && date.getMinutes() === 45) { // Check the time
        // Do stuff
        for (let index = 0; index < data7.length; index++) {
            const element = data7[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Panda 8.45AM
setInterval(() => { // Set interval for checking
    const Workspace = PandaWorspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 8 && date.getMinutes() === 46) { // Check the time
        // Do stuff
        for (let index = 0; index < data10.length; index++) {
            const element = data10[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Kone 9 AM
setInterval(() => { // Set interval for checking
    const Workspace = KoneWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 9 && date.getMinutes() === 0) { // Check the time
        // Do stuff
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 9AM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 8 && date.getMinutes() === 55) { // Check the time
        // Do stuff
        for (let index = 0; index < data3.length; index++) {
            const element = data3[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 10AM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 9 && date.getMinutes() === 58) { // Check the time
        // Do stuff
        for (let index = 0; index < data14.length; index++) {
            const element = data14[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Panda 10AM
setInterval(() => { // Set interval for checking
    const Workspace = PandaWorspace
    const Session = morningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 10 && date.getMinutes() === 0) { // Check the time
        // Do stuff
        for (let index = 0; index < data11.length; index++) {
            const element = data11[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 15.30PM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = eveningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 15 && date.getMinutes() === 30) { // Check the time
        // Do stuff
        for (let index = 0; index < data8.length; index++) {
            const element = data8[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 16.00PM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = eveningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 16 && date.getMinutes() === 0) { // Check the time
        // Do stuff
        for (let index = 0; index < data9.length; index++) {
            const element = data9[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Panda 16PM
setInterval(() => { // Set interval for checking
    const Workspace = PandaWorspace
    const Session = eveningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 15 && date.getMinutes() === 57) { // Check the time
        // Do stuff
        for (let index = 0; index < data12.length; index++) {
            const element = data12[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Panda 16.45PM
setInterval(() => { // Set interval for checking
    const Workspace = PandaWorspace
    const Session = eveningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 16 && date.getMinutes() === 45) { // Check the time
        // Do stuff
        for (let index = 0; index < data13.length; index++) {
            const element = data13[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Microsoft 17PM
setInterval(() => { // Set interval for checking
    const Workspace = MicrosoftWorkspace
    const Session = eveningSession
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date)
    if (date.getHours() === 16 && date.getMinutes() === 55) { // Check the time
        // Do stuff
        for (let index = 0; index < data4.length; index++) {
            const element = data4[index];
            console.log(element.conv_id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.conv_id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);
//Kone 17 PM
setInterval(() => { // Set interval for checking
    const Workspace = KoneWorkspace
    const Session = eveningSession
    var date = new Date();// Create a Date object to find out what time it is
    console.log(date.toISOString().slice(0, 10)," hours: "+date.getHours()," minutes: "+date.getMinutes())
    if (date.getHours() === 17 && date.getMinutes() === 0) { // Check the time
        // Do stuff
        for (let index = 0; index < data2.length; index++) {
            const element = data2[index];
            console.log(element.id)
            //run(element.conv_id)
            setTimeout(() => {
                run(element.id, Workspace, Session);
            }, index * 8000);
        }
    }
}, 60000);














