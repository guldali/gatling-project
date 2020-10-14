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
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1625",
        "ok": "1625",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2494",
        "ok": "2494",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3144",
        "ok": "3144",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3274",
        "ok": "3274",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.222",
        "ok": "0.222",
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
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3306",
        "ok": "3306",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
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
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles2": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles3": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles4": {
        "total": "57",
        "ok": "57",
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
        "total": "0.111",
        "ok": "0.111",
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
