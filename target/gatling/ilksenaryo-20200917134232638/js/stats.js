var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "197",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "17"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "197",
        "ko": "17"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "107",
        "ok": "197",
        "ko": "17"
    },
    "percentiles2": {
        "total": "152",
        "ok": "197",
        "ko": "17"
    },
    "percentiles3": {
        "total": "188",
        "ok": "197",
        "ko": "17"
    },
    "percentiles4": {
        "total": "195",
        "ok": "197",
        "ko": "17"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
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
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles2": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "197",
        "ok": "197",
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
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "meanResponseTime": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "percentiles2": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "percentiles3": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "percentiles4": {
        "total": "17",
        "ok": "-",
        "ko": "17"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
