/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * showAveTime() uses the 'node-fetch' module to show the average time taken to send a request and received a JSON object
 * from 'http://date.jsontest.com/'
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223871627/Challenge+3+-+Quick+and+dirty+network+perf+calculator
 */

function showAveTime() {

    let fetch = require("node-fetch");
    let sum = 0;

    for(let i = 1; i <= 100; i++)
    {
        let time = new Date().getTime();
        fetch('http://date.jsontest.com/').then(function(res) {
                return res.json();
            }).then(function(json) {
                //console.log("Time taken: " + (json.milliseconds_since_epoch - time) + " ms");
                sum += json.milliseconds_since_epoch - time;
                console.log("Average time taken to receive date: " + sum/i + " ms");
        });
    }
}

showAveTime();