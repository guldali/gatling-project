var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "percentiles2": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles3": {
        "total": "561",
        "ok": "561",
        "ko": "-"
    },
    "percentiles4": {
        "total": "579",
        "ok": "579",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_token-generate-a225a": {
        type: "REQUEST",
        name: "token generate",
path: "token generate",
pathFormatted: "req_token-generate-a225a",
stats: {
    "name": "token generate",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "percentiles2": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "percentiles3": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "percentiles4": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_login-ol-62437": {
        type: "REQUEST",
        name: "login ol",
path: "login ol",
pathFormatted: "req_login-ol-62437",
stats: {
    "name": "login ol",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles2": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles3": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles4": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}