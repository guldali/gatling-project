var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "227",
        "ok": "227",
        "ko": "5"
    },
    "meanResponseTime": {
        "total": "50",
        "ok": "61",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "96",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5",
        "ok": "6",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "62",
        "ko": "5"
    },
    "percentiles3": {
        "total": "183",
        "ok": "194",
        "ko": "5"
    },
    "percentiles4": {
        "total": "218",
        "ok": "220",
        "ko": "5"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 80
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
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.455",
        "ok": "0.364",
        "ko": "0.091"
    }
},
contents: {
"req_get-specific-vi-e8c6a": {
        type: "REQUEST",
        name: "Get specific video game",
path: "Get specific video game",
pathFormatted: "req_get-specific-vi-e8c6a",
stats: {
    "name": "Get specific video game",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "227",
        "ok": "227",
        "ko": "5"
    },
    "meanResponseTime": {
        "total": "50",
        "ok": "61",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "96",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5",
        "ok": "6",
        "ko": "5"
    },
    "percentiles2": {
        "total": "7",
        "ok": "62",
        "ko": "5"
    },
    "percentiles3": {
        "total": "183",
        "ok": "194",
        "ko": "5"
    },
    "percentiles4": {
        "total": "218",
        "ok": "220",
        "ko": "5"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 80
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
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.455",
        "ok": "0.364",
        "ko": "0.091"
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
